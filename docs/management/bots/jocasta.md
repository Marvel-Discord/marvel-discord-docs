---
sidebar_label: Jocasta
---

# Jocasta

Jocasta is a utility bot, custom-built for the Marvel Discord server by Rocked03.

| Prefix |
| ------ |
| `/`    |

## Spoiler Threads

See [#non-marvel-spoilers](../server-layout/channels/spoiler-channels#non-marvel-spoilers).


## Polls

See [Polls](../events/polls).


## Timestamp

```
/timestamp generate <time>

/timestamp generate time: 6am apr 6 nzt
```

Generates a Discord-formatted timestamp for the specified time. The time can be specified in words (to an extent).

```
/timestamp repeat <starting_timestamp> <interval> <amount>

/timestamp repeat starting_timestamp: 6am apr 6 nzt interval: 1 week amount: 5
```

Generates a list of Discord-formatted timestamps for the specified starting timestamp, interval, and amount.

```
/timestamp event <event>
```

Generates a Discord-formatted timestamp for an Event listing in the server.


## Embed Links

`Right click a message > Apps > Embed Links`

This little function resends an unembedded link with an embed (if it has one). Useful for checking what a link is without opening it.


## Fun things

### MCU Connections

```
/mcu-connections movie <movie name>
/mcu-connections tv <show name>
/mcu-connections collection <collection name>
```

Hooks into the TMDB API to list all the cast & crew from a specified movie, show, or collection who have worked in the MCU. 

### Shrink Text

```
/shrinktext <text>
```

Shrinks text ᵗᵒ ᵇᵉ ˢᵐᵃˡˡ ᵘⁿⁱᶜᵒᵈᵉ ᶜʰᵃʳᵃᶜᵗᵉʳˢ.

### Fake Tweet

```
/fake-tweet <channel>
```

Creates a fake Tweet. Opens up a interactive modal to fill in the details. Used for April Fools! Don't abuse please :)

