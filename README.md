# Momaz's E-Commerce Platform

A responsive, full-stack e-commerce web application built for **Momaz's**. This platform features dynamic product browsing, advanced filtering, reusable frontend components, and robust backend APIs connected to a MongoDB database.

---

## Features

*   **Dynamic Product Catalog:** Browse products with real-time state management.
*   **Filtering & Sorting:** Filter products by categories, price, and attributes for an improved shopping experience.
*   **Reusable Component Architecture:** Built using modular React components for scalability and maintainability.
*   **RESTful API Integration:** Node.js and Express.js backend handling product data retrieval and business logic.
*   **Database Integration:** Document-based storage powered by MongoDB for managing catalog data and application state.
*   **Responsive UI:** Styled with CSS3 and HTML5 to ensure a seamless layout across desktop, tablet, and mobile devices.

---

## Tech Stack

### Frontend
*   **React** (UI library & state management)
*   **JavaScript (ES6+)**
*   **HTML5 & CSS3**

### Backend
*   **Node.js** (Runtime environment)
*   **Express.js** (Web application framework)

### Database
*   **MongoDB** (NoSQL Database)

---

## Project Structure

```text
momaz-ecommerce/
├── client/                 # Frontend React Application
│   ├── src/
│   │   ├── components/    # Reusable UI components (Navbar, ProductCard, Filter, etc.)
│   │   ├── pages/         # Page views (Home, ProductDetails, Cart, etc.)
│   │   ├── App.js         # Root component & routing
│   │   └── index.js       # Entry point
│   └── package.json
│
└── server/                 # Backend Node/Express Application
    ├── config/            # Database connections and configurations
    ├── controllers/       # API business logic
    ├── models/            # MongoDB schema definitions
    ├── routes/            # Express endpoint routes
    ├── server.js          # Express app server entry point
    └── package.json