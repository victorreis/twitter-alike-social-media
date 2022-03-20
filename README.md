# twitter-alike-social-media

## Summary

- [Introduction](#introduction)
- [Features](#features)
- [Bonus features and implementations](#bonus-features-and-implementations)
- [Data consumed](#data-consumed)
- [Installation](#installation)
- [Running](#running)
- [Another scripts](#another-scripts)
- [Planning](#planning)
- [Critique](#clitique)

## Introduction

A simple and intuitive twitter alike website.
The main objective of this project is to practice some development skills through some technologies and concepts:

- ReactJS
- React Hooks
- TypeScript
- CSS-in-JS (styled-components)
- Unity tests (Jest + React Testing Library)
- Linters (eslint, style-lint, lint-staged)
- Formatters (editorconfig, prettier)
- git hooks (husky: pre-commit, prepare-commit-message)
- conventional-commits (commitizen)
- Scaffolding (scaffdog)
- Environment config (.vscode/\*, .npmrc)
- Thematization
- Usability
- Responsivity
- Clean Code
- SOLID
- KISS: “Keep It Simple, Stupid!”
- YAGNI: “You Ain’t gonna need it”
- DRY: “Do not Repeat Yourself”

## Features

- Homepage that lists all posts, reposts (retweets) and quote posts and also a vertical menu.
- Switch between showing all posts and filtering by just the following user posts (need to reflect in the page URL).
- Write posts, reposts and quote posts from there.
- User page with all the details, posts, reposts and quote posts shown in a modal as you click in the user avatar.
- Show whether the logged user follows or not.
- Follow and unfollow the user.
- Write posts, reposts and quote posts from there if it is your profile.
- Simulate data source consumption (in this case was some mocked data in the localStorage).
- Do not build authentication and user creation/edition/deletion.
- Do not edit posts.

## Bonus features and implementations

- Friendly messages to show the user some success/error status.
- High level of quality (strong eslint/typescript rules, scaffolding, separation of responsibilities, tests, pre-commit with type-check/linting/tests etc).
- Create a lot of components through the styled-components with a well organized structure of files (instead of using third part libraries).
- Unity tests in the component styles, behaviors, snapshots etc.
- Global tests configuration that provides a simple and standardized way to render the components through the React Testing Renderer or through React Testing Library, with the theme provider already embedded.
- Create a thematization structure that allows you to create how many themes that you want.
- Create a customized theme interface with some structures implemented (borders, colors and typography).
- Implements responsiveness to allow any screen size by using @media queries and the Grid Layout.
- Usage of React Context, React Hooks.
- Usage of Typescript generics, union type and interface manipulation and interesting Type utilities.

## Data consumed

- locaStorage is initialized with some mocked data. Services consumes this data.
- **IMPORTANT:** make sure to erase the localStorage because of the limit of posts per day (5 posts per day).

## Installation

- Make sure that you have nodejs installed in you computer. Preference: node 16.
- `yarn install` if you have the yarn installed globally or `npx yarn install`, if not.

## Running

- `yarn start` or `npm start`

## Another scripts

- Typescript type check: `yarn type-check`
- Prettier formating: `yarn format`
- Linting code: `yarn lint`
- Build: `yarn build`
- Tests: `yarn test`
- Scaffolding: `yarn g`

## Planning

The Product Manager wants to implement a new feature called "reply-to-post" (it's a lot like Twitter's These are regular posts that use "@ mentioning" at the beginning to indicate that it is a reply directly to a post. Reply posts should only be shown in a new, secondary feed on the user profile called "Posts and Replies" where all original posts and reply posts are shown. They should not be shown in the homepage feed.

**Questions to the Product Manager:**

- Considering that the project already has a TabBar in the user page, should I need to create another tab called "Posts and Replies"?
- Should I use a modal to do this feature or should I do it inline?
- What are the error scenarios?
- If a loaded post is deleted (in an async way) and the user tries to reply to this post, what message needs to be shown?
- Should this message be shown in the toast component like the other success/error messages?

**What I will do to implement this feature:**

- Create the model "RepliedPostType".
- Create the interfaces "RepliedPostCreatorService" and "RepliedPostRetrieverService".
- Create the services that implement these interfaces.
- Create the component "RepliedPost".
- Create the component "CreateRepliedPost".
- Create the custom hook "RepliedPost" to handle the modal opening/closing and the service consumption.
- Create another tab "Posts and Replies" in the user page.
- Enable the content exchanging between these tabs to show the list of the RepliedPosts in the user page.
- Server side changings do not apply here.

## Critique

**Improvements if I had (a lot) more time:**

- Cut out the localStorage because it is insecure, modifiable and slow because of its synchronicity.
- Increase the test coverage by creating more unity tests.
- Write E2E tests.
- Get some fancy fonts to make the site look better.
- Improve the components aesthetics, because right now they are very simple.
- Improve responsiveness.
- Create a CI/CD pipeline.
- Implement internationalization.
- Create an infinity scrolling feed (loads more content as the user scrolls down).
- CDNs usage to the assets.
- Create a design system and extract all the components to a different package.
- Add media to the post creation like gifs, images, emojis, etc.
- SSR.
