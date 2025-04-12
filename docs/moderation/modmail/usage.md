---
sidebar_position: 1
sidebar_label: How to Use
---

# How to Use Modmail

When a user messages the Modmail bot, a new channel will be created with their message. You can discuss with moderators in the channel, reply (`!r`, `!ar`) to the user using commands, and close (`!close`) the thread when finished. 

Please move channels to the appropriate category when opened.

To get user IDs, see [Useful Resources > Discord IDs](../resources#discord-ids).

## Commands

### Replying

Please try to make an effort to not be anonymous when possible! It's far friendly that way, but there's also going to be times when anonymity is preferred (e.g., when you're speaking on behalf of the mod team in general).

```md
!r <message>
!ar <message>     // Send anonymously

!r Hello, how can I help you?
!ar I'm sorry, I can't help with that.
```

### Thread Management

Please move threads to the correct category. Appeals and Reports belong to Moderators, while Affiliations belong to Managers. If you're not sure, feel free to ask a Head Staff.

```md
!move <category>

!move appeals
!move affiliations
```

Closing a thread can include the `[time]` parameter to close after a set time and the `-s` parameter to close silently (sends no notification to user).
  
```md
!close
!close [time]
!close -s
!close -s [time]

!close 1d
!close -s 1h
```

New threads are typically opened by users DMing the bot, however, threads can also be manually opened by staff.

```md
!newthread <user id>
```

Threads can be suspended, in cases where the thread is not currently needed, but should not yet be closed. Suspending the thread will make the bot act like the thread doesn't exist, meaning that new DMs from the user will create a new thread and commands like `!close` will not work.

```md
!suspend
!unsuspend
```

### Logs

These logs are accessible to anybody with the link. Due to this, we don't want log links to appear in other modmail logs, therefore, please don't copy-paste log links into modmail threads. Using these commands in threads are fine however!

To show all logs for threads by the current user:

```md
!logs
!logs [user id]
```

To view the log link for the current thread:

```md
!loglink
```

### User

To get the user's ID:

```md
!id
```

Sometimes a user needs to be blocked from Modmail. This prevents them from interacting with the bot entirely. 

```md
!block
!unblock
```

## Snippets

Snippets are pre-written messages that can be sent with a single command. 

A full list can be found with this command.

```md
!snippets
!s
```

To view the content of a snippet, use this command.

```md
!snippet <name>

!s hi
>> Hello! How can we help you?
```

Enclose a snippet with double-curled braces to use it inline within a written message.

```md
{{snippetnamehere}}

Okay. {{anyelse}} => Okay. Is there anything else we can help with?
```

To create a new snippet:

```md
!s <name> <text>
```

To edit an existing snippet:

```md
!es <name> <text>
```

To delete an existing snippet:

```md
!ds <name>
```

To send a snippet, use the following command.

```md
!!<snippetname>
!!!<snippetname>     // Send anonymously

!!hi
!!!declineap
```

### General

- `!!hi` - "Hello! How can we help you?"
- `!!anyelse` - "Is there anything else we can help with?"
- `!!okbye` - "Okay! Have a good day/night 👋"
- `!!blocked` - "You have been blocked from using Modmail."
- `!!patience` - Asks the user to remain patient while the staff team is discussing their matter.
- `!!serious` - "Please use Modmail for serious enquiries only. Misuse can result in being blocked."
- `!!misuse` - "Modmail exists for moderation queries regarding the server only. Misuse can result in being blocked."

### Appeals
  
- `!!appeal` - Lists all the info that punished users need to provide for an appeal (ban, mute etc)
- `!!discuss` - "Thanks, we'll discuss it within the team, and we'll get back to you when we make a decision."
- `!!acceptap` - "Hi there, thanks for your patience - we've discussed this and we've decided to repeal your ban. You can rejoin the server at https://discord.gg/marvel"
- `!!declineap` - "Hi there, thanks for your patience - we've discussed this and we've decided to decline your appeal."
- `!!privacy` - "For privacy reasons, we only discuss queries and appeals with the punished user. If they are unable to contact Modmail via the main server, get them to join the Post Office server at https://discord.gg/ppm8DXZxKp"
- `!!middleman` - "Queries and appeals can only be made by the punished user. If they are unable to contact Modmail through the main server, get them to join the Post Office server at https://discord.gg/ppm8DXZxKp"
- `!!unmuted` - "You are now unmuted. Is there anything else we can help with?"

### Reports

- `!!report` - Lists all the info which someone reporting another user must provide.
- `!!idpls` - Asks the user to provide the ID of the person they are reporting and how they can obtain it. 
- `!!warn` - "I’ve warned the user. Is there anything else we can help with?"
- `!!care` - "The user has been taken care of. Is there anything else we can help with?"

### Affiliations

- `!!affiliation` - Lists all the info a user who wishes to partner with us must provide.  
- `!!declineaf` - "Hi, thanks for your patience - unfortunately, we've decided to decline your affiliation request at this time."

### Miscellaneous

- `!!binding` - "To bind your Discord account to Marvel Rivals, you need to head to the Rivals server - https://discord.gg/marvelrivals"
- `!!notrivals` - "Hi, we are a community-run Marvel server. For official Marvel Rivals support, please head to their server - https://discord.gg/marvelrivals"
- `!!unofficial` - "The Marvel Discord is an fan-made, unofficial community that has no affiliation with Marvel or Disney."
- `!!invite` - "Here is the invite link to the server: https://www.discord.gg/marvel"
- `!!inactive` - "Hi, this thread will close in 24 hours due to inactivity if we receive no more messages."
- `!!source` - "Marvel Modmail is a self-hosted version of the following bot: https://github.com/Dragory/modmailbot"
- `!!resources` - "Here's the link to contact Discord's Trust & Safety: https://dis.gd/contact"
