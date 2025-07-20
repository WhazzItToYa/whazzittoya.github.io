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

**Import Code** Version 1.1.1 (2025/07/20)
```
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
```

1. Import the above into streamerbot.
2. On import, it will prompt you to autorun the configuration setup. You can also open the configuration later by running the Test trigger in the "PNG Chat - OPEN CONFIGURATION" action.
    * **Avatars OBS Scene** : should be the name of the OBS Scene containing the PNG avatars you set up above.
    * **Message Sound Folder** : If you have sounds for your reactive chat, put the full path to the sound folder here. Otherwise leave it blank.
        * **Per-user Subfolders** : If you have separate subfolders of sounds for each user, then select this.
    * **Begin Speaking Delay** : The number of milliseconds delay between receiving the chat message, and displaying the mouth-open image.
    * **Base Speaking Duration** : Milliseconds that the mouth should remain open (and the chat message displayed, if using that feature)
    * **Per-letter Speaking Duration** : Adds additional milliseconds for each letter in the chat message.
    * **After Speaking Delay** : Milliseconds to continue displaying the avatar after it has finished "speaking". To keep the avatar on-screen forever, set this to -1.
3. Under Settings > Groups, Create a group called "PNG Chatters", and add your friends' accounts to the group.  This will determine who will get an avatar.
  ![Group](ReactiveChat-group.png)


## Version history:

### 1.1.1 (2025/07/20)
* Properly set the Exclude from History flag on actions.

### 1.1.0 (2025/07/19)
* Adds ability to hide avatars after each message.
* Switch to browser-based configuration
* Fix/Workaround some issues when importing into Streamer.bot 1.0.0

### 1.0.0 (2025/01/07)
* Iniital version
