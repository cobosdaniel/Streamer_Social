Board Structure

Think of your board as:

Backlog – not started

This Sprint – what you’re working on next

In Progress / Done – you move cards as you go

Below are small tasks you can drop into a tool like Trello/Jira/Notion.

Sprint 0 – Clean up & layout (frontend only)
0.1 Fix base layout to use full-screen app

Goal: Make sure the background and app layout behave like a real site, no weird centering/white areas.
Est. time: 20–30 min

Subtasks:

Remove display: flex; place-items: center; from body in index.css. 

index

Confirm .app fills full height/width (min-height: 100vh, padding, etc.). 

App

Manually resize browser to confirm no white bars.

0.2 Basic layout: header + main content

Goal: Structure page like a real app shell.
Est. time: 20–30 min

Subtasks:

Wrap content in:

<header> (app title, dark-mode toggle, placeholder avatar/username)

<main> (queue + future sections)

Add simple CSS for header bar (full width, flex row, space-between).

Ensure mobile looks reasonable (no overlap).

Sprint 1 – Single-user queue with statuses (still frontend-only)
1.1 Add anime status field (watching / completed / not started)

Goal: Each anime entry has a status, editable by user.
Est. time: 25–30 min

Subtasks:

Extend formData to include status ("not_started" default). 

App

Add a <select> input in the form: Not started, Watching, Completed.

Store status on each newAnime object.

Render the status in the list (e.g. badge or text).

1.2 Add ability to update status from the list

Goal: User can change status after adding an anime.
Est. time: 20–30 min

Subtasks:

For each list item, add a small <select> or buttons to change status.

Implement handler that updates animeList immutably by id.

Visually distinguish statuses (e.g. emojis 🎬 / ✅ / ⏳).

1.3 Add ability to remove anime from the queue

Goal: User can prune their list.
Est. time: 15–25 min

Subtasks:

Add a small “Remove” button per item.

Implement handleDelete(id) that filters animeList.

Confirm UI updates correctly.

Sprint 2 – “Profiles” concept (front-end model only)
2.1 Define basic data model for User + Anime lists

Goal: Capture how you think about data before building backend.
Est. time: 20–30 min

Subtasks:

In a markdown file or Notion page, define:

User (id, username, avatar, bio, etc.)

Anime (id, title, genre, maybe externalId from Crunchyroll)

QueueItem (userId, animeId, status, addedBy, suggestedByUserId, etc.)

Write a tiny example JSON snippet showing:

one user

their queue

their watched list

2.2 Simulate multiple users on the frontend (no auth yet)

Goal: Pretend there are multiple profiles, switch between them.
Est. time: 25–30 min

Subtasks:

Create a small hard-coded users array in your React app.

Add currentUserId state and a simple dropdown to select current user.

Store animeList per user (e.g. { [userId]: AnimeList[] }).

When switching user, list shows that user’s queue.

2.3 “Public profile view” mock

Goal: UI concept for viewing someone else’s profile/list.
Est. time: 20–30 min

Subtasks:

Create a simple “Profile card” component:

username

avatar placeholder

counts: queueLength, completedCount

Add a section like “Other users” with 2–3 fake users.

Clicking another user shows their list in a readonly view.

Sprint 3 – Suggestions flow (still local data only)
3.1 Add a “Suggest Anime” UI targeting another user

Goal: You can create suggestion entries for another user.
Est. time: 25–30 min

Subtasks:

Add a SuggestAnimeForm with:

target user (dropdown)

anime name + genre

Keep suggestions in separate state, something like suggestions[] with:

id, toUserId, fromUserId, name, genre, status: "pending" | "accepted" | "rejected".

3.2 Accept / reject suggestions (and add to queue on accept)

Goal: When you’re viewing as a given user, you can accept or reject incoming suggestions.
Est. time: 25–30 min

Subtasks:

On “current user” view, show incoming suggestions.

Add “Accept” and “Reject” buttons.

Accept:

Moves suggestion into that user’s animeList (queue).

Updates suggestion status to "accepted".

Reject:

Updates suggestion status to "rejected" (or removes it).

Sprint 4 – Backend & API planning (no coding, just design)
4.1 Choose backend stack & sketch API endpoints

Goal: Decide tech and endpoints before you write code.
Est. time: 20–30 min

Subtasks:

Decide: Python (FastAPI / Flask) + React frontend.

In a doc, list key endpoints:

POST /users, GET /users/:id

GET /users/:id/queue, POST /users/:id/queue

POST /users/:id/suggestions, PATCH /suggestions/:id

Decide simple auth plan (e.g. “MVP: no real login; later: JWT or OAuth”).

4.2 Design database schema v1

Goal: Humans + tables before code.
Est. time: 25–30 min

Subtasks:

On paper or in a doc, design tables:

users

anime (canonical anime objects)

user_anime (queue/watched relationship, status)

suggestions

For each table, list columns, types, and a couple example rows.

Sprint 5 – Crunchyroll research (spike)
5.1 Research Crunchyroll API or alternatives

Goal: Understand whether you can actually pull watch history.
Est. time: 20–30 min

Subtasks:

Search for:

“Crunchyroll API watch history”

Community docs/guides on OAuth or scraping limitations.

Write one page summary:

Is there an official API?

What auth does it use?

What data can you realistically pull (titles, episodes, progress)?

Decide: v1 tries to integrate, or keeps it as “future feature.”

If you tell me how much time you have today, I can pick 2–3 of these tasks and put them together as “Today’s Sprint” so you’ve got a super clear mini-plan to execute.