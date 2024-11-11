#Streamer.bot for Developers

This is a quickstart guide for the impatient, who already have experience creating solutions in other languages or frameworks, and want to get up to speed quickly in Streamer.bot.  It is not a replacement for the [full documentation](https://docs.streamer.bot/ ).  In fact, you should at least read [the introduction](https://docs.streamer.bot/get-started/introduction ) to get oriented to the main building blocks (triggers, actions/subactions, and variables (local & global)), and then come back here to learn what might be the same or different from other programming environments.

##Arguments, a.k.a. "local" Variables
* The terms "variable" and "argument" are used interchangeably in docs & Discord.
* Arguments are most closely akin to local variables - they only exist for the duration of the Action, and can only be referenced from the subactions of the action.
* The value of an argument can be substituted into a subaction field by enclosing it with "%" characters, e.g. `%user% is the smartest!`
* Some subaction fields are specifically for naming an argument.  In those cases, do not surround the argument name with "%" characters (since you're not using its name, not its value).  Examples are the Variable fields of the "If/Else", "Set Argument", or the Argument field of "Set Global Variable".

##Global Variables
* As their name implies, **global variables** exist independently of any action.  You can't substitute them directly into your values as you can with arguments: you use the Get and Set Global subactions to put their values into arguments.
  * *Except* "persisted global variables" can be substituted with the "~" character: `~myGlobalVar~`
* Speaking of which, there are 4 categories of global variables, which occupy different namespaces:
  * Persisted global vars: Their values are retained across SBot runs.
  * Temporary (non-persisted) global vars: The values go away when SBot is closed.
  * Persisted User vars: have a different value for each user, and are saved across runs.
  * Temporary User vars: have a different value for each user, and are cleared when SBot is closed.

##Actions

* Concurrency: By default, 
