# This is KennyG

My blog portfolio is now LIVE at [kennyg.netlify.app](https://kennyg.netlify.app/)

## About
You can find the live version of this blog site [right here](https://kennyg.netlify.app/). It is built with [Create React App](https://github.com/facebook/create-react-app) and generates a blog using markdown files. This was created using React, [styled-components](https://styled-components.com/), and deployed with [Netlify](https://netlify.com).

## Clone it for Yourself

### Setup

Assuming that you have the necessary dependencies to start a React app:

* Run `yarn install`.
* Run `yarn start` to start the app.
* Edit the file `src/Data.js` in order to customize the content of your cloned site.

Once you've started the local server, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### New Blog Post
* Insert your `{post-name-here}.md` file inside the `posts` folder.
* Edit the file `src/Posts.js` adding the necessary variables, including your markdown file location, to generate your post. The `route` and page will be generated based on what's inside `Posts.js`.
