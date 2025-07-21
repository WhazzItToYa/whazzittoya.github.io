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

**Import Code** Version 1.1.2 (2025/07/20)
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

### 1.1.2 (2025/07/20)
* Add credits

### 1.1.1 (2025/07/20)
* Properly set the Exclude from History flag on actions.

### 1.1.0 (2025/07/19)
* Adds ability to hide avatars after each message.
* Switch to browser-based configuration
* Fix/Workaround some issues when importing into Streamer.bot 1.0.0

### 1.0.0 (2025/01/07)
* Iniital version
