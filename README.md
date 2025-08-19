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

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

*(You can add a file named `LICENSE` to your repository and paste the [MIT License text](https://opensource.org/licenses/MIT) into it.)*
