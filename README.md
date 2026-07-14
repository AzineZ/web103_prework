# WEB103 Prework - _Creatorverse_

Submitted by: **Phi Nguyen**

About this web app: **Creatorverse is a website for curating your favorite content creators. Browse a gallery of creators, view an individual creator's details, and add, edit, or delete creators. Data is stored in and served from a Supabase (PostgreSQL) database.**

Time spent: **9** hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->

-  [x] **A logical component structure in React is used to create the frontend of the app**
-  [x] **At least five content creators are displayed on the homepage of the app**
-  [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
-  [x] **API calls use the async/await design pattern via Axios or fetch()**
-  [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
-  [x] **Each content creator has their own unique URL**
-  [x] **The user can edit a content creator to change their name, url, or description**
-  [x] **The user can delete a content creator**
-  [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

-  [x] Picocss is used to style HTML elements
-  [x] The content creator items are displayed in a creative format, like cards instead of a list
-  [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

-  [x] Built with TypeScript for type safety across components and pages
-  [x] Client-side routing with React Router (`useRoutes`), giving each creator a unique `/creator/:id` URL
-  [x] Responsive card grid that neatly adjusts itself based on screen width
-  [x] Confirmation dialog before deleting a creator to prevent accidental deletion
-  [x] "Back to all creators" navigation on the detail and form pages

## Video Walkthrough

Here's a walkthrough of implemented required features:

[YouTube link to website walkthrough](https://www.youtube.com/watch?v=d1Gxc3QhFtw)

<!-- Replace this with whatever GIF tool you used! -->

Video created with Macbook Screen Recording

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

One challenge was that some image hosts (e.g. wiki CDNs) block hotlinking, so images that loaded directly in the browser returned a 404 when embedded in the app; using hotlink-friendly image URLs resolved it. Another was mapping the prework's plain-JavaScript instructions onto a TypeScript + Vite project. For example, typing component props and the Supabase query results.

## License

Copyright 2026 Phi Nguyen

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
