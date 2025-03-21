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

To send a snippet, use the following command.

```md
!!<snippetname>
!!!<snippetname>     // Send anonymously

!!hi
!!!declineap
```

### Available snippets

- `!!hi` - Hello! How can we help you?

TODO: complete list
