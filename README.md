# E-Commerce Store 🛒

A modern, fully-functional e-commerce storefront built with React and Vite, featuring WhatsApp order notifications.

## Features

- 🛍️ **Product Catalog** - Browse 12 products across 6 categories
- 🔍 **Search & Filter** - Find products by name, description, or category
- 🛒 **Shopping Cart** - Add, remove, and adjust quantities
- 💾 **Persistent Cart** - Cart data saved to localStorage
- 💳 **Checkout Process** - Complete form with contact, shipping, and payment
- 📱 **WhatsApp Integration** - Orders sent automatically to +96171873635 with product images
- 🌐 **Serverless Backend** - API functions deployed on Vercel
- 🗄️ **Optional Database** - Supabase integration for order storage
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Project Structure

```
ecommerce/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.jsx       # Navigation with cart badge
│   │   ├── Footer.jsx       # Site footer
│   │   └── ProductCard.jsx  # Product display card
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Product catalog page
│   │   ├── Cart.jsx        # Shopping cart page
│   │   └── Checkout.jsx    # Checkout form page
│   ├── context/            # React Context for state management
│   │   └── CartContext.jsx # Cart state and operations
│   ├── lib/                # Utilities
│   │   └── supabase.js     # Supabase client (optional)
│   ├── App.jsx             # Main app with routing
│   ├── main.jsx            # Entry point
│   └── App.css             # Global styles
├── api/                    # Serverless backend
│   ├── create-order.js     # POST /api/create-order
│   ├── get-orders.js       # GET /api/get-orders
│   └── package.json        # API dependencies
├── supabase/
│   └── setup.sql           # Database schema
├── vercel.json             # Vercel deployment config
├── index.html
└── package.json
```

## Technologies Used

- **React 18** - UI library with hooks
- **React Router v6** - Client-side routing
- **Vite** - Fast build tool and dev server
- **Context API** - State management for cart
- **Vercel Serverless** - Backend API functions
- **Supabase** - Database (optional)
- **CSS3** - Modern styling with gradients and animations
- **localStorage** - Cart persistence

## Features Breakdown

### Product Catalog (Home Page)
- Grid layout with responsive design
- 12 products with images from Unsplash
- Filter by 6 categories (Electronics, Accessories, Fashion, Home, Sports, Books)
- Search by product name or description
- Add to cart from product cards
- Visual indication when product is in cart

### Shopping Cart
- View all cart items with images
- Adjust quantities with +/- buttons
- Remove individual items
- Clear entire cart
- Real-time price calculations
- Order summary with subtotal, tax (10%), and total
- Free shipping
- Cart badge in header shows total item count
- Empty cart state with call-to-action

### Checkout
- Multi-section form:
  - Contact information (name, email, phone)
  - Shipping address (street, city, state, ZIP)
- Form validation (all fields required)
- Order summary sidebar with product list
- **WhatsApp Integration**: Orders automatically sent to +96171873635
  - Customer details
  - Order items with product images
  - Total price and delivery address
- Order processed via serverless API
- Cart cleared after successful order

## API Endpoints

### `POST /api/create-order`
Creates a new order and optionally saves to database.
```javascript
{
  firstName, lastName, email, phone,
  address, city, state, zipCode,
  items, subtotal, tax, total
}
```

### `GET /api/get-orders`
Retrieves orders from database (requires Supabase).
```
?limit=50&offset=0
```

## Deployment

See [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md) for complete deployment instructions.

**Quick Deploy:**
1. Push to GitHub
2. Import to Vercel
3. Deploy automatically
4. Optional: Add Supabase for order storage

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Environment Variables

Optional - only needed if using Supabase:

```env
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Without these, orders still work with auto-generated IDs!

## Future Enhancements

Potential features to add:
- User authentication
- Product detail pages
- Product reviews and ratings
- Wishlist functionality
- Payment gateway integration (Stripe, PayPal)
- Order history dashboard
- Product filtering by price range
- Sorting options (price, popularity, etc.)
- Related products
- Promotional codes/coupons
- Email notifications

## License

MIT License - feel free to use this project for learning or building your own e-commerce store!
