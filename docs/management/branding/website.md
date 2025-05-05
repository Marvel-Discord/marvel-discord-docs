---
sidebar_position: 1
sidebar_label: Website
---

# Website

We have a website! It can be found at https://marvelcord.com/.

This website is [open-source](https://github.com/Rocked03/marvel-discord-site), built using Next.js and Typescript, and is hosted using Netlify. 

## Invite

The https://marvelcord.com/invite page is an automatic redirect to our server invite link (https://discord.gg/marvel).

## Appeal

The https://marvelcord.com/appeal page details everything needed for appealing a ban. It includes a link to the Post Office server and the required details to include in the appeal.

:::tip

If somebody asks about appealing a ban, please direct them to this page!

:::

## Gallery

We've also got a gallery! https://marvelcord.com/gallery

This gallery has three pages - logos, banners, and wallpapers - all filled from the server's archives. 

Images can be added to the gallery by editing the `entries.ts` files in the codebase. 

```ts
  {
    title: "",  // Title
    description: "",  // Description
    imageUrls: [
      "/img/gallery/...",  // Image URL. Multiple images can be added.
    ],
    date: new Date("YYYY-MM-DD"),  // Date
    creator: "",  // Creator (optional)
    previewImageIndex: 1,  // Index of the image to use as the preview image
      // (e.g. static image rather than a gif) (optional, defaults to the first image in the list)
  },
```

```ts
// Example entry
  {
    title: "Marvel Discord",
    description: "Base logo for the Marvel Discord server.",
    imageUrls: [
      "/img/gallery/logo/Logo with full icon.png",
      "/img/gallery/logo/Base logo.png",
      "/img/gallery/logo/Base logo 2.png",
      "/img/gallery/banner/Banner centred text.png",
      "/img/gallery/banner/Banner new.png",
    ],
    date: new Date("2017-02-16"),
    creator: "Rocked03",
  },
```
