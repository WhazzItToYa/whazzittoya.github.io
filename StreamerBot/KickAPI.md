# Kick API vs. Kick.bot Feature Comparison
(as of Feb 24, 2025)

| FEATURE | Kick API | kick.bot |
|---------| :-------: | :--------: |
| **REQEUSTS** |
| Ban |                                   |  X |
| Unban |                                 |  X |
| Timeout |                               |  X |
| Send Message |                X         |  X |
| Reply to Message |                      |  X |
| Pin/Unpin Message |                     |  X |
| Delete Message |                        |  X |
| Clear Chat |                            |  X |
| Set Emote/Follow/Sub Only |             |  X |
| Set Slow mode |                         |  X |
| Set Bot protection |                    |  X |
| Add/Remove moderator |                  |  X |
| Add/Remove OG |                         |  X |
| Add/Remove VIP |                        |  X |
| Get Followers |                         |  X |
| Get Viewer count |                      |  X |
| Get Follow Age |                        |  X |
| Get User info |               X         |  X |
| Get Channel Info |            X         |    |
| Run poll |                              |  X |
| List/Search Available Categories |   X  |    |
| Get Category Info (name, thumbnail) | X |    |
| Change Category |             X         |  X |
| Change Title |                X         |  X |
| Make Clip |                             |  X |
| Get Clips |                             |  X |
| List/Search Livestreams | X |   |
| **EVENTS** ([note](#on-events)) |
| New follower |                X         |  X |
| Chat Message Received |       X         |  X |
| New Pinned Message |                    |  X |
| Chat Message Deleted |                  |  X |
| User Banned/Unbanned |                  |  X |
| Poll Completed |                        |  X |
| Stream Started/Ended |                  |  X |
| Stream Title/Game Changed |             |  X |
| Sub |                         X         |  X |
| Subs Gifted |                 X         |  X |
| Channel Raided |                        |  X |

## On Events

The Kick API delivers events to bots by using Webhooks, a cumbersome and costly mechanism that doesn't integrate well with standalone applications like Streamer.bot.
