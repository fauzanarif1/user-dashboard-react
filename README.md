# User Dashboard – React + Tailwind

A small **User Analytics Dashboard** built with **React + Vite**.  
The app fetches user data from a public REST API and displays it in an interactive table with search, sorting, pagination, and a detail view.

---

## ✨ Features

- **Fetch data from REST API**  
  Uses `https://jsonplaceholder.typicode.com/users` as the data source.

- **Search users by name**  
  Instant client-side filtering while you type.

- **Sorting**

  - Sort by name **A → Z**
  - Sort by name **Z → A**

- **Pagination**

  - 5 users per page
  - Next / Prev controls
  - Info text like “10 user ditemukan, halaman X dari Y”

- **Detail panel (side panel)**

  - Click a row in the table to see user details on the right panel
  - Shows name, username, email, company, etc.

- **Full detail page (`/user/:id`)**

  - Button **“Buka halaman detail”** in the side panel
  - Navigates to `/user/:id` using **React Router**
  - Supports passing data via `state` and refetching if the page is refreshed.

- **Dark / Light mode**

  - Toggle button in the header
  - Theme is saved in `localStorage` so it persists across reloads
  - All major components support `dark:` classes (table, search bar, detail panel, navbar, etc.).

- **Skeleton loading**

  - While data is being fetched, the table shows gray animated rows (`animate-pulse`) instead of a blank screen.

- **Sticky top bar**

  - Header + Navbar stay visible at the top when scrolling (using `sticky top-0`).

- **Component-based architecture**

  - `Header`, `Navbar`, `SearchBar`, `UserTable`, `UserDetail`, `SortControls`, `Pagination`, `ErrorBanner`, etc.
  - Makes the codebase easier to understand and extend.

- **Responsive layout**
  - Optimized for desktop first, still usable on smaller screens.

---

## 🛠 Tech Stack

- **React** (Vite)
- **React Router** (`react-router-dom`)
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **REST API** (JSONPlaceholder)
- Optional tooling: ESLint (from Vite template)

---

## 📂 Project Structure (simplified)

```bash
src/
  components/
    Header.jsx
    Navbar.jsx
    SearchBar.jsx
    ErrorBanner.jsx
    UserTable.jsx
    UserDetail.jsx
    SortControls.jsx
    Pagination.jsx
  pages/
    AboutPage.jsx
    UserDetailPage.jsx   # /user/:id
  App.jsx
  main.jsx
  index.css              # Tailwind setup
```
