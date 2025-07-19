# Reactive Chat for OBS & Streamer.bot

Puts PNGTuber-like avatars into your stream which react when selected users chat.  Unrelated to TTS.  Can optionally display the messages, or play random sounds.

<video controls width="50%">
    <source src="ReactiveChat.mp4" type="video/mp4">
</video>

## Prerequisites
* OBS (developed & tested on version 30)
* Streamer.bot 0.2.4 or newer
* Idle & speaking images for each friend whose chat messages you want a reactive avatar for
* A friend

## Installation & Setup

### Avatar images in OBS

1. In the OBS scene you want your reactive PNGs, create a Source Group called "Chat Character *twitch-login*", where *twitch-login* is the twitch user login (the lowercase, no-spaces name) of a user you want the avatar for.
2. Inside the group, create two Image Sources titled "Chat Character *twitch-login* Open" and "Chat Character *twitch-login* Closed", representing the "mouth open" and "mouth closed" images of the avatar.
  * Feel free to add fade hide & show transitions or other effects on being made visible/hidden.
3. (optional) Inside the group, create a GDI Text source titled "Chat Character *twitch-login* Message".  This will display the chat messages sent by the user.  Set whatever properties (color, font, alignment) that you'd like.
4. Repeat for each user you want an avatar for.

  ![OBS Sources](ReactiveChat-sources.png)

### Avatar sounds

If you don't want sounds to play when a user chats, then skip this section.

* Create a folder on your PC somewhere for the audio files.
* If you want each user to have their own sounds:
  * Create subfolders, one for each user, named "*twitch-login*" (the same convention as above)
* Place all the sound files you want to have play randomly, into the folder(s).

  ![Sound folder structure](ReactiveChat-sounds.png)

### Streamer.bot

**Import Code** Version 1.1 (2025/07/19)
```
U0JBRR+LCAAAAAAABADtXetvG0eS/37A/g8DYQ3s3rqdfj8CHA6OE3sNbOwg9jo4xPnQj2qJCB9aPuR4A+dvv+ohKZEckiJHlER57QCxOf2Y7qrqql9VV/f8/qf/qqqTHoz9ydfV7+UH/uz7HuDPkx/Bx3HnAqofXr2onp358cnjWQ0/GZ8NhqXOT2f+3/9+OX47+D9/WXoBw1Fn0C/F7Al7Qi8LEozisHM+nhV+73+FUeWr4eJ78mBYjaALcQypivjSMfa2+OLBj5P+0zjvI4FJyVBJghWOSB0VCSkkYpwVMYikM4TL1r1Ov9Ob9N5djq8/6XZL2ae6xknyS3Tw9VtG+OTn6ZNqXlQXd9K+A6ib/WsCE5i9e/E59H3oQulzPJzAUslvsTtJ8Hw46P29MxoPhh+xUvbd0aZaP0A/dfqn62rNeTtnaUWq1z9896p69vrV85cv/vnj07cvX79aGu/pcDA5X2yyVOq7H/zHEbJk3cuGvp8GvUtmNcrjoB8nwyH0x+tKx8PO6Wlh/gL9V3gwFTc/7BTSja5Yt1CK78id0zfnEMscfq/GnXEXvq7en4xhNEYivT+pPp0st/r0eOUNU05HMIFRK0lMXhIJ3hIPMpBIg3c5WS0UPVltOv54XuhtKF8t2cjvK26O5uL3y2Lpp6sfvyyxoimu28j1aiYJCwRaHcSF79aievI7kqvQ7f3J1++v1EItP8/q5pOhLy9/f/L4/cmgXuAjrPsztisCVzf7UDTFML6J0Ie6XiFNXTJCThdG4LOuD9CtHz69wMU4HFWvv3lTXbVZ0CB1rbdnUNcYlRoVTmXscY33T6sxFlzqlU7PnwIO6NPjdQMaTPrp+aCbYLjDsL6H0Qg7q+pW1UKzdSPLdXE1yNWoVB9V40F13vUfqw9n0K96065QAw7LWCPgUNOT6puu7/9aq8H+YNZu28hHP8Dwn6PVsYfBoLsycqxHJlixejMJ04GN1g78pzK2WiSrUxjPR55RrVTdwWmnX5VhVKPVTrKfdMfYQb2M1w73Zb8z7vjut4AUWB5tf9ILsxlcjfcbKC9DufS/FoZeNVsd8PedbrczAmT+lMIffGdcBUAK4jA/dMbxrBYIJOa8r1oe6r7QItR90PpXpx/rX4zSlVkpStfO6Rs/gtfn0P92cQFcMy9ssjCtxYbXzSx1RrX4FOG+wWTwyfrZoIj8A4rB3XNKRbSmDdtM7BybdaetcY4+pfJXmWIolLqcZ1rscP1U1cpE9fppPu/0dxfDp3l5WvuJoa9bX84BHw+hN0CV5Gv19qQirDz8FeC8LHm4mL1/Pj/CmoJIP/3yqaGqCzB6O7U1q4Z0wYQ5CMYCRJJlQrAiGSc2CTRh2ktvQISgVKPrD9A5PSsWmj6hG8wb42K15BI2NPrbbvg6/QS/lZctmbzH2yza1PC9nMExG6PmnPhoA5GOC+K8TkQB5TLHkCQ1jRENJ/2XvR4g/IPux03jqruXTEDUgSLFVCYyZ0oQ41kiNGOKeimTaGKAHQgoN5FvBSXuQUC2O2Z4UV42BRrL8Kzb9ecjSAvl8+IrjjQhsfQ6UuYjUVFolLIgiKfOkRx8yDFLZY1eC4lPsknZOvDEItIikspEQnaeOGCSKiqkckvkvS/Q/PdOguMDyW3QYKpRsJ+9nDUR4DJYPO+fltm964w6+PQZYoNxQ9zPi3s1GtdcWauLEFIMY+muoTTmgLMxjqlgqcwSaI6rGfUUkUJE4j2udQ7gPQqbAA/t1FcDnV8y9M0YtUJhaR9RXz3hIiS3rtMuaXQ3LFkQg3ez/kvfF9s6nRmldzOerdNUU7Z5xgBARxJNRqsDAtc3t5QYgxqBWVzxa3TyTmxrEOdW2MZ2Z9sqc7YScIBsma88tdH3atqTRXtHZ3/Imv/N/2y0d51tBq+GLpdqqUFpQCl6etOBlE5+3GUw9duWBtQQigUEtNl+ay2z4CVawxyaJpU82m9IhAcmEj4yStl2otgouRVR5HtokOISz+Xw0SCMai/6UePFU02zVLF+sqZmmcg6WUAT1YebysIMoXrIRghDHHWWSGMTKaCBGKBJJKGYcKwNg8RG/rRHWHswY1Uv5EsXZKtWaMDCO9UKay3FZ6kWvFEMNOoByUEg7rSoFjQLxFgnM3MRsm3pF21WCwcxRjvC+m2iOVt3OUewUhKvsicyUUGCQiDOcqJJuyCFc3tRYI6Zd9N+UxC80Xldi582zL2t14IeS8gGPQ5PUemgu5ERpShGuGEqcfCOMfGwvZYZRPw8HJfbM28NUT6kebOIMgIuLgUczRvXjHjuHUH/hUWalEqpGYa/kXk7jJ7Zatzu1YdseG7X+JCUWy2isEQ5ACKdKxxgjCRvMiRLvRXpiw95dD6ko1Ja5iXJkRu0T+j1O5GAUC0CS4lHmlsF3v4zfMgmZP7iQ7YGi9nFYEBnQm1kRMoSYrbaEHyaA0UpdU4fGizeng95MATJeIzZeEu004FI5jPxKaNiddx4J1hiRn7eCNIGG6lGa85ARIKOQyCosoAko7JlMjpt8wYECdTqZAzWR0QgU07EIS4gkVnrfFAuM3UMCPLFYFzNdsBbosjV4d5NisgsgSMxxQW16ONYBF+UaxKsdojws2NRUK11U1HOF6doBKvvK4GjbOL/o+zE14C2/CqWoolna6a8WmHhYjbVCnlUYIIqgfQQhTyWSxKiRkkMzPPg0bcRrfSaUvbwsZc9YNCqPe1M1dpWU9qYy6UpfV5k8Is5PZw5dV4Zap0gxqPEyeAZsSlHdMOBF82nwPMDm9NDbapuFbslkRCBC8cy4VYq1DwIHkKIgjCXohU2WqqbMrW6K71lX59qSS1EQ6gq6FgKQbyXglBG0aUsG645t6HhLWxLt0IfhwnwpBgpxES0AodGNtXqX5EgnNI0hZQ9fdjmeZqU9l3OEMct7fORRXkSXHTiJs9wmoBWW8HRVRJf0xDmTr8zOvumzgh7NijwcbKeonXti0F3UtOVNZfFEHCuo87FxjSbehxzQ9MYCNrq552pIXo6mtXa4mfooIz2ijAhUeq0MiQogZZZeiOYLZqxVVDa3LY1vtNF7bUQhnMihYSyNNFwOK8JMz4KzVHxPfRck5KLV30/mIzPPo8l3QzcborHNiO3dYi3etYdoKDcy/Zk8gqMA0kAMTGRTlASWBBE6ERliIp6euDtybbxW7k7UrlxKL2W0XuJp8uYo7TFKNuSEaQo2vTIE2EMGULL1n671JLD80PcJT/W+OjT2cFv47ruLPf8DS7m83NIzb4PySORc/QplK1FXDNGZGIBta1TIYmQDWjfbs/DHZpHbdH9nsCy7mAPdG+dZYZLS7TwiO551MSJjEonMI7I03swh006vYOc3XZ7RkXP3PWGUaAU9TyTRHEo4msC+m4Bmc0F1cpqmm3LcO/D3zC6AT827BYNNva481aRACpUtpYYiQpKIphDYKcCYYibVaZMmtDKRj+AraLN1PuyT3TngS2gVGWwniQmM5HlqKAXihOB/woRHOrwQwe2HsI+kVQ8Ag285Fp59LvqbGDjiFG4ajUoJ/bcgL+NfaKd5t7WZ00iQ9A2kRQLcs1GEB8QubLkOAimdZJHfWR4CD5V9VHCWQTms/BLV3XpQkhp88HYpcDT+/dbdmN2UhmSmkh1QoCsgkb3EsrpJWdJlI6zFKjJrlUcd8v5rIcY9AnZ2WRNJEp7XEDGcVJyNAm3GoISEREAW7uAHkzQpw5xfN5Rn3192muiPrcZZaDS49KjhngW0WQJz4k3ubixVArBInAq2izLe83au+Woz21G4TTaSRpSOdWZcBXnCMQlZgikBMYz47Q7En7c5XmNa6M+txnkcYYhqEVFbBQqYikDIzb7SHCZWCZlVFK1Opq3OcjT3nDtEYq7vzDF3mcjkxAc0TNxPOOasFITm8AS4RI4KplN4j/2bORRhikcuOQ0zSQ69H6koZEEMIl4z7ijNnoEOF/CFMvdfDkSufK2Q4QpgrQIiSlxyqDmttmU/LhAlEwpu8i8ES3l8EGHKSwV2jnJiZamPrRsiZUeCERQ0SSTBd9v9/3BpbPq6B01wZAoOFoUxkqeM0/EagM8KuulPf4wxfR2q+PzoXZRl+svNJuHGMoM6gttOuPx4KPf7Q4zkEJ6bi2BoA2RiiNeyE4jaFChnABEsd6YAnvEd5jN0fLmQM0fi9eP/dEuOsMEOh0cQa31ShAZuCbeaUksRb/DGxskawmxbj06s595nrsUm8k5DVKc+SEyDIbVTeNeUUeX0dIQKhEBSemABOcRvArOoSghxEgHpmxrD/tGmcdXN6BdL6qL96W1lNjsJfNl71IDByJpziXSnInKyQKlzK6o8Huk6x75Kqtk7ZUwWcH4bwdjpNfsnrDNBP5zz4/P/vLostm8xaPqb9XV08vL0K6K/7t61IX+o7/+uSU3hLPBaUaYc2hQdZDEgdEkGg6RIq9cbnn5xMG54dpzY6e4+R/NyxdbijiSVIQcyqn9ensecZo33pGQYg7ROsZjy4OBh1cd7Ym65b6IBk2vrrdrSVLvuLPCGCK4C2jnkifWWSDZJhNNCJDCsWgN056k3TXByysVgaWntZKYxtRar/mgk+TGRURYZauCK0o818W7ilIk4RwChyOhpT2ABr5e+f6x4ebMtsufgddeKdSkVhKZQBCfoidGCxGFQUFud/LhFuirD0DfhlG6ntBrL/VsiyfAF4RmiQnlnAmlCH6tBKKdAAXBgEvHQm11Qws2v1d3a4hq8zGxtzi0rVGqfZMA6g5aRKkaQ3yYUSqmjUkxMeIsQ3J5hr5XSJIIE4WN2umW90Ldwg09e2wv7Cd569HTvHrLJS11QgPvBTFlB01Ga9GfBUZoCEK7YITUx4Kf7vHo2J7n9x7g0bFyRXH1un+EtwPtsoDqUNmGmJfwzCnuCvoChLPRSBJUioQryWwITmTfjOQeY8xrnnO0GEZoBlx6/rd3mzdKrokrTzFV4iFYFUj2BgmWXEaXSqF9YhSVbWI6tsSstEnNO9xgvyLg+oDBbZDS8sg0pRFBv0ABhJI8TosPYKlzSukI9mhIuUcEZhHI7LtNMKXdzjduB4ZOZ0a0yZy0KIy4el3kiJOsR2eKBQuh1X1N93n4YWm3cs8DjGvJt0UCdUKcaXAJIyuKCsxouhJDI4+Gx3Cv0EAdx+GRPWDTIv32zQXcl36KWwWcWhLLYT9pGcqfDiXhyHJvOHKtXWj64PTbw+FZkr89rz3cl362nFISPqF6KCf0AiB/GKD1dWhiEs+RsuOQv72ic0uRZDQTf3l0FaF79Jj+dU246ObGJKYsFZMMsWRJXjVIVA9BEJq8kDJZylm7nfotxqT9BtQe4Y5Fedz34wFT6u0uj4j5LK/P0THlSu6gQ4ssPepDziAJy4Ee1p60p+BycPMu/Z19v6JxJFv/Pz0rnzMr5+WXvkq13qX5eeHTdb9UP0FYaDQYHrWjs1xWHfIjZymA9EIoEnwMJc4SiBOCE2rRj3U2ZL/mQPXxOUtx0OshX8qMzsbj89HXX331AcKUTE8WsiaeYMWv/nf6/J0f/s8VIcmjKWNf1R8FWrOvPTyd9JCpo7Um58NgWD74821nuMEiXeDb1jut5btBzwfD737rjNdFy6ZsMklrzykjyjtUZRnxnVOUE+1c1ozHwNZoyR20mD68FtvDQ5tSfBayagyx11kbPkS7io/d7M96coHwTuF/xJcsfhkQv5Uj1SRAFiKD1Vy3u/SV0vv88NFydvKaYPSmL/1dJ9y7pylvjoBv+a7gzLOTijPmBGHalO1b5IeXHB1knQQEx51ve0734K5xy4sBjEZ3wUf0XdGJJVKbolYFyl5EhyxqSWO4yceoEtM0lw+OJl9urVflgCnDd3CNvrLUPMp2W98toczWTMVl7+4uscy+TDgmLPMG5h/YrF50B8F3HwqUufmnqK7VZo9Oa4qszzpbVGDrFtAO+mva/dRl2xBa4dxxqgQBzcqFmQmxEnj0n3X9NQnDAjv0zRBHe1pz+o95/ekauubLyXtvjYTuIP6644bGJdrdphr2Pg26MIJVHdA8wjnN8K7TvU820WmGU5eIjSISRvgeGL+B4cXKgroqfNbtzODnVeG405vXL09mn7W++h43m55ZQFV0Phji6ii6qI5HPOFPZqlnzY9k16USsdLYP9E4k0//D2KDp4s1fAAA
```

1. Import the above into streamerbot.
2. On import, it will prompt you to autorun the configuration setup. You can also open the configuration later by running the Test trigger in the "PNG Chat - OPEN CONFIGURATION" action.
  * `Avatars OBS Scene` : should be the name of the OBS Scene containing the PNG avatars you set up above.
  * `Message Sound Folder` : If you have sounds for your reactive chat, put the full path to the sound folder here. Otherwise leave it blank.
    * `Per-user Subfolders` : If you have separate subfolders of sounds for each user, then select this.
  * `Begin Speaking Delay` : The number of milliseconds delay between receiving the chat message, and displaying the mouth-open image.
  * `Base Speaking Duration` : Milliseconds that the mouth should remain open (and the chat message displayed, if using that feature)
  * `Per-letter Speaking Duration` : Adds additional milliseconds for each letter in the chat message.
  * `After Speaking Delay` : Milliseconds to continue displaying the avatar after it has finished "speaking". To keep the avatar on-screen forever, set this to -1.
3. Under Settings > Groups, Create a group called "PNG Chatters", and add your friends' accounts to the group.  This will determine who will get an avatar.
  ![Group](ReactiveChat-group.png)


## Version history:

### 1.1.0 (2025/0/19)
* Adds ability to hide avatars after each message.
* Switch to browser-based configuration
* Fix/Workaround some issues when importing into Streamer.bot 1.0.0

### 1.0.0 (2025/01/07)
* Iniital version
