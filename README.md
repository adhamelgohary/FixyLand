---

# Fixyland - Luxury Hotel Website Clone

---

This is a complete, feature-rich front-end clone of the Fixyland luxury hotel website, built from the ground up with modern web technologies. The project serves as a comprehensive demonstration of advanced React development, state management, and interactive UI/UX design.

The website is fully responsive, animated, and includes a persistent dark/light mode, making it a polished and professional portfolio piece.

---

## ✨ Features

A complete list of features implemented in this project:

#### **Core Functionality**
-   **Multi-Page Navigation:** Fully routed application with pages for Home, Rooms, and Contact using React Router DOM.
-   **Dynamic Room Filtering:** Interactive filtering on the rooms page by category (Solo, Couples, Family) with smooth animations.
-   **Mock Booking System:** A functional booking flow where users can select a room, open a modal with a form, and receive a confirmation message.
-   **Component-Based Architecture:** The UI is broken down into reusable and maintainable React components.

#### **UI & UX Enhancements**
-   **Full Dark/Light Mode:** A persistent theme switcher that respects the user's OS preference and saves their choice in `localStorage`.
-   **Custom Animated Cursor:** Replaces the default system cursor with a custom one that animates and reacts to interactive elements like links and buttons.
-   **Interactive Spotlight Cards:** A subtle radial gradient follows the user's cursor on room and news cards, creating an engaging spotlight effect.
-   **Fully Responsive Design:** The layout is optimized for all screen sizes, from mobile phones to widescreen desktops, using Tailwind CSS.

#### **Animations & Transitions**
-   **Page Transitions:** Smooth fade and slide animations between pages using Framer Motion.
-   **Scroll-Reveal Animations:** Elements gracefully fade and slide into view as the user scrolls down the page.
-   **Staggered List Animations:** Grids of items (like rooms and news articles) animate in one by one for a dynamic effect.
-   **Micro-interactions:** Subtle hover effects and animations on buttons and cards provide satisfying user feedback.

---

## 🛠️ Tech Stack

This project was built using a modern front-end stack:

-   **Framework:** [React 18](https://reactjs.org/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Routing:** [React Router v6](https://reactrouter.com/)
-   **Animation:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
-   **Linting:** [ESLint](https://eslint.org/)

---

💡 Why This Tech Stack?
The technology stack for this project was deliberately chosen to create a modern, high-performance, and highly interactive user experience while maintaining an excellent developer experience. Each piece of the stack serves a specific, crucial purpose:
React (with Vite)
Component-Based Architecture: React's core strength is its ability to break down complex UIs into small, reusable components. This was essential for building the Fixyland site, where elements like RoomCard, NewsCard, and Header are used and managed independently. This approach leads to a codebase that is clean, scalable, and easy to maintain.
Declarative UI: React allows you to describe what the UI should look like for a given state, and it handles the complex job of updating the DOM efficiently. This was critical for features like the dynamic room filtering and the booking modal, where the UI needs to change instantly based on user interaction.
Vite as the Build Tool: Instead of traditional bundlers like Webpack, Vite was chosen for its unparalleled developer experience. It leverages native ES modules in the browser, resulting in lightning-fast server start times and Hot Module Replacement (HMR) that feels instantaneous. This significantly speeds up the development and iteration cycle.
Tailwind CSS
Rapid Prototyping and Development: As a utility-first framework, Tailwind CSS allows for styling directly within the JSX. This eliminates the need to switch between different files (like CSS and JS), drastically speeding up the process of building and refining the UI.
Consistency and Maintainability: By using a predefined set of design tokens (for spacing, colors, fonts, etc.), Tailwind enforces a consistent design system across the entire application. This prevents the common problem of "magic numbers" or inconsistent styles in custom CSS.
Built-in Responsiveness and Dark Mode: Tailwind's responsive prefixes (sm:, md:, lg:) and dark: variants make implementing a fully responsive design and a complete dark mode incredibly straightforward and intuitive, without writing complex media queries.
React Router
Seamless Client-Side Navigation: As a Single Page Application (SPA), React needs a router to handle navigation without full page reloads. React Router is the industry standard, providing a smooth, app-like experience for the user. Navigating between the Home, Rooms, and Contact pages is instant, which is crucial for a premium feel.
Framer Motion
Declarative and Powerful Animations: Modern UIs are not just static; they are interactive and feel alive. Manually handling complex animations in React can be cumbersome. Framer Motion provides a simple, declarative API that integrates perfectly with React components.
Advanced Animation Capabilities: It was used to easily implement sophisticated animations that would be difficult otherwise, such as:
Page Transitions: Creating smooth transitions between different views.
Scroll-Reveal Effects: Animating elements into view as the user scrolls.
Staggered Animations: Animating list items (like room cards) in sequence.
Micro-interactions: Adding satisfying hover and click effects that improve the user experience.

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 16.x or later) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/fixyland-clone.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd fixyland-clone
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```

### Running the Project

To start the development server, run the following command:
```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in your browser. The page will reload automatically as you make edits.

---

## 📜 Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run lint`: Lints the source code using ESLint.
-   `npm run preview`: Serves the production build locally to preview it.

---

## 📂 Project Structure

The project follows a standard component-based structure to keep the codebase organized and scalable.

```
fixyland-clone/
├── public/
├── src/
│   ├── components/      # Reusable UI components (Header, RoomCard, etc.)
│   ├── context/         # React Context providers (ThemeContext)
│   ├── pages/           # Page-level components (HomePage, RoomsPage, etc.)
│   ├── App.jsx          # Main application layout and routing setup
│   ├── main.jsx         # Main entry point of the application
│   └── index.css        # Global styles and Tailwind CSS directives
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

---
