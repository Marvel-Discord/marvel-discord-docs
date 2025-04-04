---
---

# Discord Pages

These pages that can be written within the docs and then synced to the server via the Jocasta bot. These are made for "static" channels, where content is not expected to change often, such as #rules and Server Guide channels.

## How to Use

### Defining the page

The page can be placed anywhere in the docs. But for it to be recognised by the bot, it needs this in the header:

```yaml
---
discord-channel-id: channel id here
---
```

### Formatting

The entire content of these pages will be used as the content of the channel. This means that you can use all the same formatting as you would in a normal message, including images, links, and embeds.

There's a few exceptions to this:

| On Discord            | In the `.md` file             | Example                               |
| --------------------- | ----------------------------- | ------------------------------------- |
| `<@user id>`          | `@[username](user id)`        | `@[Rocked03](204778476102877187)`     |
| `<@&role id>`         | `@[role name](role id)`       | `@[Server Staff](281649289397141505)` |
| `<#channel id>`       | `#[channel name](channel id)` | `#[rules](1109693299297632328)`       |
| `<url without embed>` | `!url`                        | `!https://marvelcord.com`             |

Each individual message is separated by a `---` line. This means that you can have multiple messages in a single file, and they will be sent as separate messages in the channel.

```markdown
Message 1

---

Message 2

---

Message 3
```

### Syncing on Discord

TODO
