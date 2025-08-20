<div align="center">

🏨 Fixyland - Luxury Hotel Website Clone

A fully interactive, responsive, and animated clone of the Fixyland website, built with a modern React tech stack.

</div>

<div align="center">


![React-shield](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)


![Vite-shield](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)


![Tailwind-shield](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)


![Framer-shield](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)


![Router-shield](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

</div>

📋 Table of Contents

✨ Features

🛠️ Tech Stack

💡 Why This Tech Stack?

⚙️ Getting Started

📜 Available Scripts

📂 Project Structure

✨ Features
⚙️ Core Functionality

Multi-Page Navigation: Fully routed application with pages for Home, Rooms, and Contact using React Router DOM.

Dynamic Room Filtering: Interactive filtering on the rooms page by category (Solo, Couples, Family) with smooth animations.

Mock Booking System: A functional booking flow where users can select a room, open a modal with a form, and receive a confirmation message.

Component-Based Architecture: The UI is broken down into reusable and maintainable React components.

🎨 UI & UX Enhancements

Full Dark/Light Mode: A persistent theme switcher that respects the user's OS preference and saves their choice in localStorage.

Custom Animated Cursor: Replaces the default system cursor with a custom one that animates and reacts to interactive elements.

Interactive Spotlight Cards: A subtle radial gradient follows the user's cursor on room and news cards, creating an engaging spotlight effect.

Fully Responsive Design: The layout is optimized for all screen sizes, from mobile phones to widescreen desktops.

🎬 Animations & Transitions

Page Transitions: Smooth fade and slide animations between pages using Framer Motion.

Scroll-Reveal Animations: Elements gracefully fade and slide into view as the user scrolls.

Staggered List Animations: Grids of items (like rooms and news articles) animate in one by one.

Micro-interactions: Subtle hover effects and animations on buttons and cards provide satisfying user feedback.

🛠️ Tech Stack

Framework: React 18

Build Tool: Vite

Styling: Tailwind CSS

Routing: React Router v6

Animation: Framer Motion

Icons: React Icons

Linting: ESLint

💡 Why This Tech Stack?
<details>
<summary>Click to expand and see the detailed reasoning</summary>

<br>


The technology stack for this project was deliberately chosen to create a modern, high-performance, and highly interactive user experience while maintaining an excellent developer experience. Each piece of the stack serves a specific, crucial purpose:

React (with Vite)

Component-Based Architecture: React's core strength is its ability to break down complex UIs into small, reusable components. This was essential for building the Fixyland site, where elements like RoomCard, NewsCard, and Header are used and managed independently, leading to a clean and scalable codebase.

Declarative UI: React allows you to describe what the UI should look like for a given state, and it handles the complex job of updating the DOM efficiently. This was critical for features like the dynamic room filtering and the booking modal.

Vite as the Build Tool: Vite was chosen for its unparalleled developer experience. It leverages native ES modules, resulting in lightning-fast server start times and Hot Module Replacement (HMR) that feels instantaneous, significantly speeding up the development cycle.

Tailwind CSS

Rapid Prototyping: As a utility-first framework, Tailwind allows for styling directly within the JSX. This eliminates context-switching between different files and drastically speeds up the process of building and refining the UI.

Consistency and Maintainability: By using a predefined design system, Tailwind enforces consistency across the entire application and prevents the common problem of "magic numbers" in custom CSS.

Built-in Features: Tailwind's responsive prefixes (sm:, md:, lg:) and dark: variants make implementing a fully responsive design and a complete dark mode incredibly straightforward.

React Router

Seamless Client-Side Navigation: As a Single Page Application (SPA), React Router provides a smooth, app-like experience without full page reloads. Navigating between pages is instant, which is crucial for a premium feel.

Framer Motion

Declarative and Powerful Animations: Manually handling animations in React can be cumbersome. Framer Motion provides a simple, declarative API that integrates perfectly with React components to create sophisticated animations like page transitions, scroll-reveal effects, and micro-interactions.

In summary, this tech stack creates a synergistic workflow: Vite provides the speed, React builds the components, Tailwind styles them, React Router connects them, and Framer Motion brings them to life.

</details>

⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

Prerequisites

You need to have Node.js (v16.x or later) and npm installed.

Installation

Clone the repository (replace your-username with your GitHub username):

code
Sh
download
content_copy
expand_less

git clone https://github.com/your-username/fixyland-clone.git

Navigate to the project directory:

code
Sh
download
content_copy
expand_less
IGNORE_WHEN_COPYING_START
IGNORE_WHEN_COPYING_END
cd fixyland-clone

Install NPM packages:

code
Sh
download
content_copy
expand_less
IGNORE_WHEN_COPYING_START
IGNORE_WHEN_COPYING_END
npm install
Running the Project

To start the development server, run:

code
Sh
download
content_copy
expand_less
IGNORE_WHEN_COPYING_START
IGNORE_WHEN_COPYING_END
npm run dev

Open http://localhost:5173 to view it in your browser.

📜 Available Scripts

npm run dev: Runs the app in development mode.

npm run build: Builds the app for production.

npm run lint: Lints the source code.

npm run preview: Serves the production build locally.

📂 Project Structure
<details>
<summary>Click to see the project folder structure</summary>

code
Code
download
content_copy
expand_less
IGNORE_WHEN_COPYING_START
IGNORE_WHEN_COPYING_END
fixyland-clone/
├── public/
├── src/
│   ├── components/      # Reusable UI components
│   ├── context/         # React Context providers (ThemeContext)
│   ├── pages/           # Page-level components
│   ├── App.jsx          # Main application layout
│   ├── main.jsx         # App entry point & router config
│   └── index.css        # Global styles & Tailwind directives
├── .gitignore
├── index.html
├── package.json
├── README.md
└── tailwind.config.js
</details>
