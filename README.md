# 🛒 E-Commerce Platform — Full Stack Spring Boot + React

> A professional, production-grade e-commerce application built with Java Spring Boot (REST API backend) and React.js (frontend), featuring JWT-based authentication, product & category management, shopping cart, order processing, and image uploads.

---

## 📋 Table of Contents

- [Problem Statement](#problem-statement)
- [Solution](#solution)
- [Architecture Overview](#architecture-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Getting Started](#getting-started)
- [API Reference](#api-reference)
- [Future Upgrades](#future-upgrades)
- [Contributing](#contributing)
- [License](#license)

---

## 🧩 Problem Statement

Modern consumers expect a seamless, responsive, and secure online shopping experience. Building such a platform from scratch requires solving multiple engineering challenges simultaneously:

- **Authentication & Authorization** — Ensuring only authenticated users can place orders, while admins can manage the catalog.
- **Product Catalog Management** — Supporting CRUD operations on products and categories with image handling.
- **Shopping Cart** — Maintaining stateful cart data tied to individual users.
- **Order Lifecycle** — Tracking orders from placement through fulfillment, with associated address and payment info.
- **Scalability & Maintainability** — Structuring backend code (layered architecture: Controller → Service → Repository) so the codebase can grow without becoming a monolith mess.
- **Frontend-Backend Decoupling** — Allowing a React SPA to communicate securely with a Spring Boot REST API via CORS-configured endpoints.

---

## ✅ Solution

This project delivers a **full-stack e-commerce platform** that addresses all of the above concerns:

- A **Spring Boot REST API** (`sb-ecom`) exposes well-structured endpoints for products, categories, carts, orders, and users, secured with **JWT (JSON Web Tokens)** and **Spring Security**.
- A **React.js SPA** (`ecom-frontend`) consumes these APIs and provides users with a clean, responsive shopping interface.
- **Role-based access control** distinguishes between `USER` and `ADMIN` roles — admins can manage inventory while regular users browse, cart, and order.
- **MySQL** serves as the relational database, with **Spring Data JPA / Hibernate** managing schema creation and ORM.
- A **Postman collection** is included for rapid API testing and onboarding.

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                    Client Layer                      │
│         React.js SPA  (ecom-frontend)               │
│   Redux / Context · Axios · React Router            │
└──────────────────────┬──────────────────────────────┘
                       │  HTTP / REST (JSON)
┌──────────────────────▼──────────────────────────────┐
│                  API Gateway Layer                   │
│          Spring Boot REST API  (sb-ecom)            │
│  Controllers → Services → Repositories → MySQL DB  │
│         Spring Security + JWT Auth                  │
└──────────────────────┬──────────────────────────────┘
                       │  JPA / Hibernate
┌──────────────────────▼──────────────────────────────┐
│                   Data Layer                        │
│                 MySQL Database                      │
└─────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

### Backend (`sb-ecom`)

| Technology | Purpose |
|---|---|
| **Java 17+** | Core language |
| **Spring Boot 3.x** | Application framework, auto-configuration |
| **Spring Security** | Authentication & authorization |
| **JWT (jjwt)** | Stateless token-based auth |
| **Spring Data JPA** | ORM & repository layer |
| **Hibernate** | JPA implementation, schema management |
| **MySQL** | Relational database |
| **Maven** | Dependency management & build |
| **Lombok** | Boilerplate reduction (getters/setters/constructors) |
| **ModelMapper** | DTO ↔ Entity mapping |
| **Swagger / OpenAPI** | API documentation |

### Frontend (`ecom-frontend`)

| Technology | Purpose |
|---|---|
| **React.js 18** | UI library |
| **Redux / Context API** | Global state management |
| **Axios** | HTTP client for REST calls |
| **React Router v6** | Client-side routing |
| **Tailwind CSS / CSS Modules** | Styling |
| **Vite** | Fast dev server & bundler |

### Dev & Testing

| Tool | Purpose |
|---|---|
| **Postman** | API testing (collection included) |
| **IntelliJ IDEA** | Recommended backend IDE |
| **VS Code** | Recommended frontend IDE |

---

## 📁 Project Structure

```
E-Commerce-Project/
├── sb-ecom/                          # Spring Boot Backend
│   └── src/main/java/
│       ├── controller/               # REST endpoints (Auth, Product, Cart, Order…)
│       ├── model/                    # JPA entity classes
│       ├── repository/               # Spring Data JPA interfaces
│       ├── service/                  # Business logic layer
│       ├── payload/                  # DTOs (request/response objects)
│       ├── security/                 # JWT filter, UserDetailsService, config
│       └── exceptions/               # Global exception handling
│   └── src/main/resources/
│       └── application.properties    # DB config, JWT secret, etc.
│
├── ecom-frontend/                    # React.js Frontend
│   └── src/
│       ├── components/               # Reusable UI components
│       ├── pages/                    # Page-level views (Home, Product, Cart…)
│       ├── store/                    # Redux store / slices
│       ├── api/                      # Axios API calls
│       └── App.jsx                   # Root component & routing
│
└── Java Spring Boot- Professional eCommerce Project
    Masterclass.postman_collection.json   # Postman API test suite
```

---

## ✨ Key Features

### 🔐 Authentication & Authorization
- User registration and login with hashed passwords (BCrypt)
- JWT-based stateless authentication
- Role-based access: `ROLE_USER` and `ROLE_ADMIN`
- Secured endpoints using Spring Security filter chain

### 📦 Product & Category Management (Admin)
- Full CRUD for products and categories
- Product image upload and retrieval
- Pagination and sorting support on product listings
- Search/filter products by keyword or category

### 🛒 Shopping Cart
- Add, update, and remove items from cart
- Cart persisted per authenticated user
- Real-time quantity and total calculation

### 📬 Order Management
- Place orders from cart with delivery address
- Order history per user
- Admin order status management

### 👤 User Profile
- View and update user profile
- Manage saved addresses

---

## 🚀 Getting Started

### Prerequisites

- Java 17+
- Node.js 18+
- MySQL 8+
- Maven 3.8+

### Backend Setup

```bash
# 1. Clone the repository
git clone https://github.com/krish-2466/E-Commerce-Project.git
cd E-Commerce-Project/sb-ecom

# 2. Configure database in src/main/resources/application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecomdb?createDatabaseIfNotExist=true
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update

# 3. Add your JWT secret
app.jwtSecret=your_jwt_secret_key
app.jwtExpirationMs=86400000

# 4. Build and run
mvn spring-boot:run
```

Backend will be available at: `http://localhost:8080`

### Frontend Setup

```bash
cd ../ecom-frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```

Frontend will be available at: `http://localhost:5173`

### API Testing

Import the included Postman collection:

```
Java Spring Boot- Professional eCommerce Project Masterclass.postman_collection.json
```

Set the `base_url` variable to `http://localhost:8080/api` and start hitting endpoints.

---

## 📡 API Reference (Key Endpoints)

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/api/auth/signup` | Public | Register a new user |
| `POST` | `/api/auth/signin` | Public | Login, returns JWT |
| `GET` | `/api/public/products` | Public | List all products |
| `GET` | `/api/public/categories` | Public | List all categories |
| `POST` | `/api/admin/products` | Admin | Create a product |
| `PUT` | `/api/admin/products/{id}` | Admin | Update a product |
| `DELETE` | `/api/admin/products/{id}` | Admin | Delete a product |
| `GET` | `/api/carts` | User | View cart |
| `POST` | `/api/carts/products/{id}/quantity/{qty}` | User | Add item to cart |
| `DELETE` | `/api/carts/products/{id}` | User | Remove item from cart |
| `POST` | `/api/order/users/payments/{payment}` | User | Place an order |
| `GET` | `/api/admin/orders` | Admin | View all orders |

> Full documentation available at `http://localhost:8080/swagger-ui.html` when running locally.

---

## 🔮 Future Upgrades

| Feature | Description |
|---|---|
| **Payment Gateway Integration** | Integrate Stripe or Razorpay for real payment processing |
| **Microservices Migration** | Split into separate services: Auth, Product, Cart, Order, Notification |
| **Redis Caching** | Cache product listings and user sessions for faster reads |
| **Elasticsearch** | Full-text product search with faceted filtering |
| **Email Notifications** | Order confirmation and shipping update emails via JavaMail / SendGrid |
| **OAuth2 / Social Login** | Login with Google or GitHub via Spring OAuth2 |
| **Docker & Kubernetes** | Containerize both services; deploy on Kubernetes for horizontal scaling |
| **CI/CD Pipeline** | GitHub Actions pipeline for automated build, test, and deploy |
| **Product Reviews & Ratings** | Let users rate and review purchased products |
| **Wishlist** | Allow users to save products for later |
| **Admin Dashboard Analytics** | Sales charts, revenue reports, top products |
| **Inventory Management** | Stock tracking with low-inventory alerts |
| **Multi-image Support** | Upload multiple images per product |
| **PWA Support** | Progressive Web App for offline browsing and mobile install |

---

## 🤝 Contributing

1. Fork this repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request
