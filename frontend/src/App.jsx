import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CartProvider } from './CartContext'
import { CompareProvider } from './CompareContext'

// -- Merged (teammate's) pages: marketing site, auth, blog, account dashboard --
import Home from './pages/Home'
import AboutUsPage from './pages/AboutUsPage'
import BlogDetailPage from './pages/BlogDetailPage'
import BlogListPage from './pages/BlogListPage'
import CustomerSupportPage from './pages/CustomerSupportPage'
import EmailVerificationPage from './pages/EmailVerificationPage'
import FAQsPage from './pages/FAQsPage'
import ForgetPasswordPage from './pages/ForgetPasswordPage'
import NotFoundPage from './pages/NotFoundPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import DashboardApp from './dashboard/DashboardApp'

// -- Rabaka's pages: shop catalog, cart, wishlist, compare, checkout, orders, admin --
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Compare from './pages/Compare'
import Checkout from './pages/Checkout'
import OrderSuccess from './pages/OrderSuccess'
import TrackOrder from './pages/TrackOrder'
import OrderDetail from './pages/OrderDetail'
import Admin from './pages/Admin'
import AdminLoginPage from './pages/AdminLoginPage'

import ProductQuickView from './components/ProductQuickView'

// Only lets a logged-in admin through to whatever it wraps; everyone else
// (including guests) is bounced to the Admin Login page. Used for
// /dashboard and /admin.
function AdminOnlyRoute({ children }) {
  const user = JSON.parse(localStorage.getItem('user') || 'null')
  if (!user || user.role !== 'admin') {
    window.location.href = '/admin-login'
    return null
  }
  return children
}

function App() {
  const [quickViewProduct, setQuickViewProduct] = useState(null)

  useEffect(() => {
    const openQuickView = (event) => {
      setQuickViewProduct(event.detail)
    }

    window.addEventListener('open-product-quick-view', openQuickView)

    return () => {
      window.removeEventListener('open-product-quick-view', openQuickView)
    }
  }, [])

  return (
    <BrowserRouter>
      <CartProvider>
        <CompareProvider>
          <Routes>
            {/* Marketing / account side (teammate's merged branch) */}
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog-detail" element={<BlogDetailPage />} />
            <Route path="/customer-support" element={<CustomerSupportPage />} />
            <Route path="/email-verification" element={<EmailVerificationPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/forget-password" element={<ForgetPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/dashboard" element={<AdminOnlyRoute><DashboardApp /></AdminOnlyRoute>} />

            {/* Shop / cart / checkout side (Rabaka's branch) */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/order/:id" element={<OrderDetail />} />
            <Route path="/admin-login" element={<AdminLoginPage />} />
            <Route path="/admin" element={<AdminOnlyRoute><Admin /></AdminOnlyRoute>} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          {quickViewProduct && (
            <ProductQuickView
              product={quickViewProduct}
              onClose={() => setQuickViewProduct(null)}
            />
          )}
        </CompareProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
