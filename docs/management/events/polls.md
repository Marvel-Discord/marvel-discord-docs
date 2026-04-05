---
sidebar_position: 1
sidebar_label: Polls
---

# Polls

| Manager                         | Shadow                             |
| ------------------------------- | ---------------------------------- |
| @[rocked03](204778476102877187) |                                    |

Polls are daily Marvel questions asked to the server. These are handled through the Jocasta bot.

## About Polls

Polls are Marvel-themed questions that are proposed to the server, multiple days a week. These are questions designed to encourage discussion about various Marvel topics.

## Categories

Every poll is tagged with a specific category, which determines where it's placed in the schedule, where it's sent, and how it's organised.

### Comics

Comic polls cover anything related to Marvel Comics. This category can also be used as a catch-all for questions about Marvel games, animated shows, and other media that don't fit into the other categories.

These polls are asked weekly.

### MCU

MCU polls cover anything related to the Marvel Cinematic Universe of movies and TV shows. This category can also be used for non-MCU movies and shows.

These questions are generally opinion-based, or about their personal experiences with the movies and shows.

These polls are asked weekly.

### Comics vs Adaptation Designs

The design polls compare the comic designs of characters to their adaptation designs in movies, TV shows, games, and other media.

These polls are asked weekly.

### MCU Predictions

The prediction polls ask users to predict various aspects of upcoming MCU movies and TV shows. These questions are generally prediction-based, rather than opinion-based, and so encourage users to be more speculative.

These polls are asked every two weeks.

### Topical

For events such as movie and show releases, we have special topical polls. A movie/show will get its own category tag, and multiple polls will be asked in the week surrounding the release. These polls often ask about predictions (Rotten Tomatoes score, whether things will happen, etc.), opinions ("How did you enjoy X?"), interest in the project, etc. To coincide with the release, often the Comics, MCU, and/or Design categories will have a poll in the week of release that is related to the project (e.g., a comic poll would be a question about the comic version of the character or story, an MCU poll would be about a previous movie with the character, etc.)

These polls are scheduled as needed. There's always a day blocked out for topical polls, but often extra topical polls are added to the schedule in the empty days in the week of a release.

## Schedule

| Day       | Time (UTC) | Category                            |
| --------- | ---------- | ----------------------------------- |
| Monday    | 5:00pm     |                                     |
| Tuesday   | 5:00pm     | Comics vs Adaptation Designs        |
| Wednesday | 5:00pm     | MCU Predictions (every two weeks)   |
| Thursday  | 5:00pm     | _Topical - current movie / TV show_ |
| Friday    | 5:00pm     | Comics                              |
| Saturday  | 5:00pm     |                                     |
| Sunday    | 5:00pm     | MCU                                 |

_Empty days are often reserved to fit in extra topical polls_

## How to make polls

This heading is about the process behind organising, making, and structuring sets of polls. For details on how to create the polls themselves, jump to [How to Make a Poll](#how-to-make-a-poll) below.

Polls are made in "waves", which is just an organisational way of grouping sets of polls together for easier management. These waves typically span the length of 12 weeks, which covers 12 weekly polls or 6 biweekly polls. These waves are independent for each category.

Each category has its own Google sheet. These sheets come with an Idea Board page where questions are drafted, a template page which should only be copied for each wave, and then a page for each wave where the questions are filled in.

:::info[Google Drive Folder]
The (private) Drive folder with the Google Sheets files can be found [here](https://drive.google.com/drive/folders/1_wj8AUiWv5EYvr2Skw-sLsJMR3xDc64i). Ask Rocked03 for access.
:::

Each wave should be curated by one person. This person is responsible for deciding which questions should be included in the wave, editing the questions for clarity and formatting, ensuring the graphics get created, and creating & scheduling the polls within the system. Other poll contributors can help by drafting questions in the Idea Board, helping to edit questions, and creating graphics.

For topical categories, the wave encompasses the entire topical poll set. The curator needs to ensure to coordinate with the other poll categories to make sure the comics/MCU/design crossover polls in the week of the release are organised and scheduled smoothly (make sure there aren't doubled-up polls on one day, if one takes another's place then the first needs to be rescheduled, either shuffled down a week or appended to the end of the schedule).

### Question curation and editing

The idea behind polls is for them to create a positive and interesting discussion. The polls that are published should be ones that don't just ask for a yes/no answer, but ones that encourage people to share their opinions and experiences. When curating questions for a wave, you should prioritise questions that are more open-ended and discussion-provoking.

:::note[Advice from Rocked]

- Try to avoid bias. This can be subtle but effectively it's avoiding questions like "Do you like Tony better than Steve?" in favour of "Do you prefer Tony or Steve?".
- Avoid power scaling questions. These tend to lead to unproductive arguments rather than discussion...
- It's difficult, but the goal is to always have a poll with a hopefully-even split of votes. You can never accurately predict how people will vote, but try to avoid questions that are likely to have a guaranteed landslide result because that's boring.
  :::

If you're receiving suggestions, they can sometimes be rather verbose, or biased, etc. As the curator, you need to edit these questions to make them more suitable as a poll. This may involve reducing specificity, restructuring to be a broader discussion, making it more concise and clear, etc. Also, make sure to proofread the questions for spelling, grammar, and also that any information within the poll is accurate (e.g. dates).

The maximum option count is 8, but try to aim for 3-4 when possible. If a question has too many options, consider splitting it into multiple questions, or reworking it to be broader.

The question itself should be keep succinct, but if you want to add more detail, you can add that in the description. However, the description should only contain information if it's necessary to understand the question, not just extra fluff.

You can also add a thread question, which is a prompt that will be posted in the discussion thread alongside the poll. It's a way to ask a follow-up question to encourage more discussion. If this is left blank, no thread will be created. If you would like to still create a thread but don't have a specific question in mind, type `def` which will indicate to the bot to just create a default thread with no specific question. **It's recommended to have a thread, so please use the `def` default if you don't have a specific prompt.**

You should also shuffle the order of the polls within the wave so that similar questions aren't back-to-back. In the spreadsheet, you can sort the "RNG" column (right click the column header and select "Sort sheet A-Z") to randomise the order of the questions or manually drag-and-drop the rows to rearrange them.

## How to make a poll

Once you've curated and edited the questions for a wave, it's time to create and schedule the polls. Please read these instructions in full before starting the process!

The spreadsheet exists to help with this process as well as keeping a record, so please use it. Start by making a copy of the template and copying the questions into the new wave page. You can then add the description, thread question, and options. Once you have graphics ready, you can paste the link in as well.

Sign in at https://polls.marvelcord.com to access the poll editing interface. To import your polls from the spreadsheet, follow these instructions:

1. In the spreadsheet, there is a column on the far right, labelled "For copying into the website". Each row has a snippet of code that contains all the data for that question. At the very bottom of that column is a bolded cell containing all the questions concatenated together. **Copy that bolded cell.**
2. At https://polls.marvelcord.com, once signed in, click "Edit mode" in the bottom right.
3. Beneath the search bar is a button labelled "Create a new poll". To the left of it is a square button with an arrow pointing down into a box. **Click that button to import polls.**
4. A pop-up should appear, titled "Import polls from clipboard". Click "Import from clipboard". This will paste in the data you copied from the spreadsheet.
5. The polls should now appear in the interface. You can click on each poll to edit it further if needed.
6. You can also schedule the polls here by clicking the calendar icon and date at the top of the poll card. This is in your own local timezone, so be sure to convert from UTC to your timezone.
   - If you want to programmatically schedule the polls, you can alternatively load in the dates within the spreadsheet. In the "Date" column, you can add the UNIX timestamp (seconds) in the top row, which will refer to the first poll of the wave. The rest of the dates will be auto-filled, and copying the question data will now include the dates.
7. Once all the polls are ready, click the "Save" button in the bottom right to finalise everything.

### Graphics

Graphics exist for polls to be more visually appealing, engaging, and recognisable. They don't need to be complicated or complex, but should contain some relevant (preferably not memey) imagery to the question being asked.

The Drive contains templates for these graphics, and you can easily edit them in an app like [Photoshop](https://www.adobe.com/nz/products/photoshop.html) (paid, desktop), [Pixlr](https://pixlr.com/tools/pixlr-e/) (free, online), [Photopea](https://www.photopea.com/) (free, online), [GIMP](https://www.gimp.org/) (free, desktop), or any other image editing software. Look at the previous graphics for inspiration.

These graphics then need to be uploaded to an image hosting service. We have used [Imgur](https://imgur.com/) in the past, but other image hosting services should work. Please don't use Discord as the image links expire after a while. Once uploaded, copy the direct image link (should end in .png or .jpg) and paste it into the "Image URL" column in the spreadsheet for that question (if you're using Imgur, the album link won't work, you need to make sure you have the actual image link).
