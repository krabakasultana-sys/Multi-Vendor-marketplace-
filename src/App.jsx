import { useEffect, useState } from 'react'

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

import ProductQuickView from './components/ProductQuickView'

function App() {
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const path = window.location.pathname

  useEffect(() => {
    const openQuickView = (event) => {
      setQuickViewProduct(event.detail)
    }

    window.addEventListener('open-product-quick-view', openQuickView)

    return () => {
      window.removeEventListener('open-product-quick-view', openQuickView)
    }
  }, [])

  let page = <Home />

  if (path === '/') {
    page = <Home />
  } else if (path === '/about-us') {
    page = <AboutUsPage />
  } else if (path === '/blog') {
    page = <BlogListPage />
  } else if (path === '/blog-detail') {
    page = <BlogDetailPage />
  } else if (path === '/customer-support') {
    page = <CustomerSupportPage />
  } else if (path === '/email-verification') {
    page = <EmailVerificationPage />
  } else if (path === '/faqs') {
    page = <FAQsPage />
  } else if (path === '/forget-password') {
    page = <ForgetPasswordPage />
  } else if (path === '/reset-password') {
    page = <ResetPasswordPage />
  } else if (path === '/sign-in') {
    page = <SignInPage />
  } else if (path === '/sign-up') {
    page = <SignUpPage />
  } else {
    page = <NotFoundPage />
  }

  return (
    <>
      {page}

      {quickViewProduct && (
        <ProductQuickView
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </>
  )
}

export default App