---
sidebar_position: 3
sidebar_label: Spoiler Channels
---

# Spoiler Channels

We have spoiler channels in our server to contain spoilery discussions. These are frequently used, as everyone watches content at different times and are most often avoiding spoilers before they watch it. 

## Spoiler Rules

These rules set the guidelines on how the spoiler channels are set up and how users should use them.

Can be found in the `?spoilers` command.

### If the content is Marvel...
- ... and is __unreleased__, use #[future-screen-spoilers](1109731729385721926)
- ... and is a __comic__ that is less than __1 week old__, use #[comic-spoilers](1109731683177078867) only
- ... and is a __film or show__ that has its own dedicated channel, use that channel only
### If the content is non-Marvel...
- ... and is less than __1.5 months old__, use #[non-marvel-spoilers](1109733536832946196) only
Otherwise, if the content doesn't meet this criteria, you're free to discuss in general chat, however, *please be mindful of users who haven't seen the content*, and use spoiler tags appropriately.

## #[comic-spoilers](1109731683177078867)

Discussion of comic issues that are less than 1 week old. This is also used for comic leaks. News about future comics are also encouraged to be discussed here, but the rules are less strict about keeping them solely in here. 

## #[future-screen-spoilers](1109731729385721926)

Discussion of Marvel films and shows that are upcoming in the later future. Before a topical spoiler channel is opened for a film or show (typically within a week of release), discussion of (what typically are) leaks and rumours must be kept in this channel.

## #[non-marvel-spoilers](1109733536832946196)

This is a forum channel for discussing non-Marvel films and shows. Threads can be created in this channel for any film or show that is less than 1.5 months old and have a lot of active discussion. 

:::tip[Note]
There's no set criteria for what qualifies as a "lot of active discussion", but if a thread is created, we should expect a decent amount of activity in it. A good way of judging this is by searching to see how much the film/show has been discussed recently - if it's only been mentioned a small few times, then it's probably not worth creating a thread for it.
:::

### Creating a thread

We have commands set up with the Jocasta bot that hooks into the TMDB API to create threads easily. 

```
/spoiler-thread movie <title>
/spoiler-thread tv <title>
```

These commands should be used within the #[Request Spoiler Threads!](1109734588378525748) thread.

The bot will find the first result for the provided title, then open an interactive modal the title, description, and image URL it found. It's correct the large majority of the time, but if it isn't, you can edit it before saving it. Once saved, the bot creates the thread and links it in the channel. 

## Topical spoiler channels

Topical spoiler channels get opened for films, shows, and story games that are soon-to-be or recently released. Games that are long-term (such as live-service games like Rivals and Snap) instead get threads in [#gamerverse](./social-channels#gamerverse).

These channels are temporary and recycle archived spoiler channels from previous releases. 

### Durations

These channels are typically opened **within the week prior to release**. While rumours and leaks are often discussed considerably prior, we urge users to keep these discussions in [#future-screen-spoilers](#future-screen-spoilers) as so not to oversaturate the quantity of spoiler channels we have open. 

Spoiler channels for theatrical releases are closed **roughly around one month** after the initial international theatrical release. For streaming releases, this is about **two weeks after** the special or final episode airs.

### Opening a spoiler channel
1. Rename an archived spoiler channel
2. Move it to the `Spoilers` category
   - Sync permissions with the category. This is prompted when the channel is initially moved, otherwise can be done in channel settings - `Permissions > "Permissions not synced" > Sync Now`
3. Post intro message
   - > ```
     > **================================**
     > [logo here]
     > **================================**
     > ```
   - It's not an exact science and it doesn't really matter if it's not exact, but it's a good guideline to keep a general consistency
   - Keep the logo and the borders as individual messages.
   - The logo is preferably a high-resolution image with a transparent background. Also not a big deal, but it's nice to have.
     - Ask Rocked if you need help with this.
   - Pin the logo message. (This is why the logo is a separate message, so it can be pinned without the borders.)
4. Add the channel as a selectable option in #[Channels & Roles](0)
   - These questions can be edited in `Settings > Onboarding > Questions`
   - See [Onboarding](../../onboarding) for more details
5. Add link to the pinned message into [#resources-spoiler-archive](../server-guide). This can only be done by the user who sent the existing message.
6. Post announcement in #[announcements](1110214786223968346) stating that it's open!
   
### Closing a spoiler channel
1. Rename it to `#spoilers-whatever`
   - As a gag, it's fun to rename the "whatever" to something cryptically related to the next project that it'll probably be used for. 
2. Move it to `Spoilers Archive` category
   - Sync permissions with the category.
3. Post in the channel, "archived!" (or similar).
4. Remove it from the selectable options in #[Channels & Roles](0)
   - See [above](#opening-a-spoiler-channel) for details.
5. Post announcement in #[announcements](1110214786223968346) stating that it's closed.
   - If it's a film that hasn't hit digital yet, it's good to advise people to be mindful of spoilers for others and to use spoiler tags.

### Spoiler Channel Archive

See [Spoilers Archive](./archived-channels#spoilers-archive) for details.
