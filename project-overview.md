# E-Commerce Angular Application - Project Overview

## Project Overview

This is a modern e-commerce web application built with Angular 21, designed to display and browse products. The application features a clean, responsive UI using Tailwind CSS and follows Angular's latest standalone component architecture.

**Project Name:** e-commerce app
**Framework:** Angular 21
**Styling:** Tailwind CSS
**Testing:** Vitest
**Package Manager:** npm

## Architecture

The application follows a feature-based modular architecture with real-world production structure:

### Core Layer
- **Services**: Singleton business logic and data access
  - `ProductService` (`core/services/product.service.ts`)
  - `CartService` (`core/services/cart.service.ts`)
- **Models**: domain interfaces in `models/` (`product.model.ts`, `cart-item.model.ts`)

### Shared Layer
- **Components**: reusable UI primitives
  - `ProductCardComponent` (`shared/components/product-card`)

### Layout Layer
- **Layout shell**: `layout/layout-shell.ts`
- **Header**: `layout/header/header.ts`

### Feature Layer
- **Products**: `features/products`
  - `ProductList` (/)
  - `ProductDetail` (/product/:name)
- **Cart**: `features/cart` (/cart)
  - add/remove/increase/decrease, total, stock guard
- **Orders**: `features/orders` (/orders)

### App Layer
- `App` root standalone component with `app.routes.ts` using `loadComponent` lazy standalone route loading
- `app.config.ts` for router and HTTP providers

## Project Flow

1. **Application Bootstrap**
   - Angular bootstraps the standalone `App` component
   - Router and HTTP client are configured via `app.config.ts`

2. **Initial Load**
   - User navigates to root path (`/`)
   - `ProductList` component loads and fetches products via `ProductService`
   - Products are cached using RxJS `shareReplay` for performance

3. **Product Browsing**
   - Products displayed in responsive grid layout
   - Each product card shows image, name, and price
   - Clicking a product navigates to `/product/:name`

4. **Product Details**
   - `ProductDetail` component extracts product name from route params
   - Fetches all products and finds matching product by name
   - Displays comprehensive product information

## Components

### App Component
- **File:** `src/app/app.ts`
- **Purpose:** Root component that hosts the router outlet
- **Features:** Uses Angular signals for reactive title

### ProductList Component
- **File:** `src/app/features/products/product-list/product-list.ts`
- **Purpose:** Displays grid of all available products
- **Features:**
  - Async pipe for reactive data binding
  - Click handler for navigation to product details
  - Responsive design with Tailwind CSS

### ProductDetail Component
- **File:** `src/app/features/products/product-detail/product-detail.ts`
- **Purpose:** Shows detailed information for a specific product
- **Features:**
  - Route parameter extraction
  - Product lookup by name
  - Conditional rendering with Angular control flow

## Services

### ProductService
- **File:** `src/app/core/services/product.ts`
- **Purpose:** Handles product data operations
- **Features:**
  - HTTP client integration for data fetching
  - Caching with RxJS shareReplay operator
  - TypeScript interfaces for type safety

## Data Structure

### Product Interface
```typescript
interface Product {
  name: string;
  price: number;
  description: string;
  ratings: number;
  images: { image: string }[];
  category: string;
  seller: string;
  stock: number;
}
```

### Sample Data
The application uses static JSON data stored in `src/assets/data/product.json` containing 8 sample products across various categories:
- Mobile Phones (Samsung Galaxy Z Flip 5)
- Headphones (Bose QuietComfort 45)
- Laptops (Apple MacBook Air M2)
- Sports (Nike Air Zoom Pegasus 40)
- Electronics (Sony Bravia TV)
- Wearables (Fitbit Charge 6)
- Cameras (Canon EOS R6)
- Accessories (Logitech MX Master 3 Mouse)

## Technologies Used

### Core Framework
- **Angular 21**: Latest version with standalone components
- **TypeScript 5.9**: Type safety and modern JavaScript features
- **RxJS 7.8**: Reactive programming for data streams

### Styling & UI
- **Tailwind CSS 4.1**: Utility-first CSS framework
- **PostCSS**: CSS processing

### Development Tools
- **Angular CLI 21**: Project scaffolding and build tools
- **Vitest 4.0**: Fast unit testing framework
- **Prettier 3.8**: Code formatting
- **JSDOM 28**: DOM simulation for testing

### Build System
- **@angular/build 21**: New application builder
- **Vite**: Fast build tool and dev server

## File Structure

```
src/
├── app/
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── app.ts
│   ├── app.html
│   ├── app.css
│   ├── core/
│   │   └── services/
│   │       ├── product.service.ts
│   │       ├── product.service.spec.ts
│   │       ├── cart.service.ts
│   │       └── cart.service.spec.ts
│   ├── models/
│   │   ├── product.model.ts
│   │   └── cart-item.model.ts
│   ├── shared/
│   │   └── components/
│   │       └── product-card/
│   │           ├── product-card.ts
│   │           ├── product-card.html
│   │           └── product-card.css
│   ├── layout/
│   │   ├── layout-shell.ts
│   │   └── header/
│   │       ├── header.ts
│   │       ├── header.html
│   │       └── header.css
│   └── features/
│       ├── products/
│       │   ├── product-list/
│       │   │   ├── product-list.ts
│       │   │   ├── product-list.html
│       │   │   ├── product-list.css
│       │   │   └── product-list.spec.ts
│       │   └── product-detail/
│       │       ├── product-detail.ts
│       │       ├── product-detail.html
│       │       ├── product-detail.css
│       │       └── product-detail.spec.ts
│       ├── cart/
│       │   └── cart/
│       │       ├── cart.ts
│       │       ├── cart.html
│       │       ├── cart.css
│       │       └── cart.spec.ts
│       └── orders/
│           └── orders.ts
├── assets/
│   └── data/
│       └── product.json
├── index.html
├── main.ts
└── styles.css
```

## Routing Configuration

```typescript
const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'product/:name', component: ProductDetail }
];
```

- Root path (`/`) displays the product list
- Dynamic route (`/product/:name`) shows product details
- Route parameters used for product identification

## Key Features Implemented

1. **Responsive Design**: Mobile-first approach with Tailwind CSS
2. **Performance Optimization**: HTTP response caching with shareReplay
3. **Type Safety**: Full TypeScript implementation with interfaces
4. **Modern Angular**: Standalone components, signals, control flow syntax
5. **Clean Architecture**: Separation of concerns with feature modules

## Future Enhancements

The current implementation provides a solid foundation for expansion:

1. **Shopping Cart**: Add cart functionality to the "Add to Cart" button
2. **User Authentication**: Implement login/signup for user accounts
3. **Search & Filtering**: Add search bar and category filtering
4. **Product Reviews**: Display and manage customer reviews
5. **Order Management**: Implement checkout and order history
6. **Admin Panel**: Product management interface
7. **Real API Integration**: Replace static JSON with REST API
8. **State Management**: Add NgRx or similar for complex state
9. **Testing Coverage**: Expand unit and integration tests
10. **PWA Features**: Add service workers for offline functionality

## Development Commands

- `npm start`: Start development server
- `npm run build`: Build for production
- `npm test`: Run unit tests with Vitest
- `npm run watch`: Build in watch mode

## Conclusion

This Angular e-commerce application demonstrates modern web development practices with Angular 21's latest features. The modular architecture and clean code structure make it easy to extend and maintain. The use of standalone components, reactive programming, and utility-first CSS provides a solid foundation for building a full-featured e-commerce platform.</content>
<parameter name="filePath">/home/hari/Documents/Angular/e-commerce/project-overview.md