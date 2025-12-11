# Streamer.bot for Developers

(Updated for version 1.0.0. Most changes are that value parsing (argument substitutions & inline functions) & are accepted in more subactions.)

This is a quickstart guide for the impatient developer, who already has experience in creating solutions using other programming languages or frameworks, and wants to get up to speed quickly in Streamer.bot.  It is not a replacement for the [full documentation](https://docs.streamer.bot/ ).  In fact, you should at least read [the introduction](https://docs.streamer.bot/get-started/introduction ) to get oriented to the main building blocks (triggers, actions/subactions, and variables (local & global)), and then come back here to learn what might be the same or different from other programming environments.

## Arguments, a.k.a. "local" Variables
* The terms "**variable**" and "**argument**" are used interchangeably in docs & Discord ("Global variables" are different - see below).
* Arguments are most closely akin to **local variables** - they only exist for the duration of the Action, and can only be referenced from the subactions of the action.
* Arguments are created in a few ways:
  * The most common is **from a trigger**: Every trigger supplies a number of arguments related to the type of trigger, describing the event.
  * Many **subactions** set arguments as their output.
  * An explicit **Set Argument** subaction
  * In C\#, **`CPH.SetArgument(name, value)`**
* An argument's value can be **substituted** into a subaction's field by enclosing it with "%" characters, e.g. "`%user% is the smartest!`". There are a few exceptions:
  * The "Default Value" field of "Get Global Variable".
* Some subaction fields are specifically for naming an argument.  In those cases, do not surround the argument name with "%" characters (since you are specifying the variable name, not its value).  Examples are:
  * When using the "Does Not Exist" operator of the "If/Else"
  * The "Variable Name" field of "Set Argument"
  * The "Variable Name" field of "Set Argument"
  * The "Destination Variable" of "Get Global Variable".
* When one Action is invoked from another action (E.g., with Run Action or an If/Else), then all the variables of the invoking action are passed to the invoked action.  Likewise, any variable that the invoked action sets, are available when it returns to the invoking action (as long as it used "Run Immediately").
* **Types**: Values have specific C# types, like `int`, `float`, and `string`.  This mainly affects whether the "Less Than" and "Greater Than" operators do string or numeric comparison in an If/Else.  A value's type is deteremined by:
  * If the "Auto Type" checkbox (in the "Set Argument" or "If/Else" subaction) is unchecked, then it is a string.
  * If it is checked, then the type is determined by what the value "looks" like - if it looks like an int, float, or boolean, then it becomes those types.  Otherwise it becomes a string.

## Global Variables
* As their name implies, **global variables** exist independently of any action.  You can set their value in one action, and get the value in another.
* You can't substitute them directly into your values as you can with arguments: you first need to Get them into an argument, and then use the "`%...%`" syntax to substitute the argument.
  * *Except* "persisted global variables" can be substituted with the "~" character: `~myGlobalVar~`
* Speaking of which, there are 4 categories of global variables, which occupy different namespaces (i.e., they are Get and Set independently of each other, and can contain different values, even if they have the same name):
  * Persisted global vars: Their values are retained across SBot runs.
  * Temporary (non-persisted) global vars: The values go away when SBot is closed.
  * Persisted User vars: have a different value for each user, and are saved across runs.
  * Temporary User vars: have a different value for each user, and are cleared when SBot is closed.

## Automatic arguments, and expressions
* There are some arguments that are always available. e.g., `%date%`, `%unixtime%`
* Math expressions can be evaluated and substituted into values with the "`$math(expression)$`" macro.  E.g.,
  * `$math(%points% + 30)$` ==> Evaluates to the variable `points` plus 30.
  * `$math(rUnid(1,%numViewers%))$` ==> Picks a random whole number between 1 & the value of the %numViewers% variable.
  * `$math(%numViewers% > 10 && %numViewers% < 20)$` ==> The result of the logical boolean expression.  This can be useful as a workaround for the lack of support for AND, OR, NOT in the [If/Else subactions.](https://docs.streamer.bot/api/sub-actions/core/logic/if-else).
  * The expression language is based on the [mXparser library](https://mathparser.org/), where you can find full documentation.
* **Exceptions**  (TODO: there are a number of cases where auto variables & math expressions don't seem to work, where substitution of normal variables do.  Need to do a test to find out which)

## Actions

### Concurrency

* Every action queue is processed concurrently with the others.
* By default, actions within a queue are dequeued and begin executing immediately after being enqueued, concurrently with prior actions in the queue.
  * ... unless the queue is marked a "blocking".  In that case, only one action executes at a time.
* Subactions of an action execute sequentially.
  * ... unless the action is marked concurrent.  Then all top-level subactions and groups are run concurrently with each other.  Subactions within a group are executed sequentially.
* Because of the high levels of concurrency, beware of trying to share information between actions using global variables.  While an action is executing, the global variables it is reading and writing may be getting changed by other actions.  Standard read/modify/write logic will not work correctly when executed across concurrent actions.  Even the Set Global Increment and Decrement options are not atomic.  The only ways of guaranteeing you don't get race conditions accessing variables from different actions are to make sure actions which access variables never execute at the same time, only one after another.  Strategies for doing this include:
  * Assigning all actions which read or modify a given variable to the same blocking queue.
  * Arranging your logic so that one action accessing a variable can only execute strictly _after_ another action, say, by having one action modify the variable, then using Run Action to run the other action which modifies the variable.

