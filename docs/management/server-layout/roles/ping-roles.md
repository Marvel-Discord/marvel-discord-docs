---
sidebar_position: 3
sidebar_label: Ping Roles
---

# Ping Roles

These are roles specifically used for pinging members. 

## @everyone and @here

The @everyone and @here pings are in-built pings in Discord. We use them infrequently. 

:::info[Why we don't use them often]

@[everyone](0) and @[here](0) are both very powerful pings that can reach the entire server. When we use them, we want to be able to reach as many people as we can. However, users can opt of these pings by disabling them in their notification settings, which people regularly do when they are overwhelmed or disinterested in the pings. In order to avoid a "boy who cried wolf" situation, we reserve these pings for only the most important announcements, giving us a stronger guarantee that people won't have muted them.

:::

## @Watchers Ping

This ping is linked to the Jocasta bot. When a user pings this role, Jocasta convert that into a message that pings all Watchers that are currently online or idle. If there are no Watchers online, Jocasta will ping the role (pinging _all_ Watchers) instead. Jocasta will also ping all Watchers if the @[Watchers Ping](0) is repeated once more as a reply to the first Jocasta ping message.

## @News Ping

This ping is used in the [news channels](../channels/info-channels/#news-channels). When any message is sent in these channels, Jocasta will automatically ping this role. 

To avoid clutter, the previous pings are deleted when the latest is sent. 

This ping is automatically assigned to new members in the server and can also be toggled in #[Channels & Roles](0). Users can opt in and out of this role by using the `Add/Remove Ping Role` button below every @[News Ping](0) message.

## @Comic Notify

This ping is used in the [#comic-news](../channels/info-channels/#comic-news) channel by [Zelma](../../bots/weekly-comics). This role is pinged when the weekly comic list is sent.

This role can be toggled in #[Channels & Roles](0).

## @Polls

This role can be toggled in #[Channels & Roles](0). See [Polls](../../events/polls).

## @Bookclub

This role can be toggled in #[Channels & Roles](0). See [Bookclub](../../events/bookclub).

## @Murderworld

This role can be toggled in #[Channels & Roles](0). See [#murderworld](../channels/special-channels/#murderworld).

## @Killjoys Never Die

This role can be toggled in #[Channels & Roles](0). TODO

## @Inhuman Royal Artist

This role can be toggled in #[Channels & Roles](0). TODO
