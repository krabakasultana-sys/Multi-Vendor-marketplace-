import { useState } from 'react';
import TopBar from './components/TopBar';
import DashboardHeader from './components/DashboardHeader';
import NavBar from './components/NavBar';
import Breadcrumb from './components/Breadcrumb';
import Sidebar from './components/Sidebar';
import DashboardFooter from './components/DashboardFooter';
import { RatingModal, AddCardModal } from './components/Modals';

import Dashboard from './pages/Dashboard';
import OrderHistory from './pages/OrderHistory';
import OrderDetails from './pages/OrderDetails';
import CardsAddress from './pages/CardsAddress';
import BrowsingHistory from './pages/BrowsingHistory';
import Settings from './pages/Settings';
import Placeholder from './pages/Placeholder';

const breadcrumbs = {
  dashboard: ['Home', 'User Account', 'Dashboard'],
  'order-history': ['Home', 'User Account', 'Dashboard', 'Order History'],
  'order-details': ['Home', 'User Account', 'Dashboard', 'Order History', 'Order Details'],
  'cards-address': ['Home', 'User Account', 'Dashboard', 'Cards & Address'],
  'browsing-history': ['Home', 'User Account', 'Dashboard', 'Browsing History'],
  settings: ['Home', 'User Account', 'Dashboard', 'Setting'],
  'track-order': ['Home', 'User Account', 'Dashboard', 'Track Order'],
  'shopping-cart': ['Home', 'User Account', 'Dashboard', 'Shopping Cart'],
  wishlist: ['Home', 'User Account', 'Dashboard', 'Wishlist'],
  compare: ['Home', 'User Account', 'Dashboard', 'Compare'],
};

// This is the account/dashboard section of the site.
// It manages its own internal sub-navigation (dashboard, orders, settings, etc.)
// while living at the single "/dashboard" route of the main app.
function DashboardApp() {
  const [page, setPage] = useState('dashboard');
  const [showRating, setShowRating] = useState(false);
  const [showAddCard, setShowAddCard] = useState(false);

  const navigate = (p) => {
    setPage(p);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (page) {
      case 'dashboard':
        return <Dashboard navigate={navigate} onAddCard={() => setShowAddCard(true)} />;
      case 'order-history':
        return <OrderHistory navigate={navigate} />;
      case 'order-details':
        return <OrderDetails navigate={navigate} onLeaveRating={() => setShowRating(true)} />;
      case 'cards-address':
        return <CardsAddress />;
      case 'browsing-history':
        return <BrowsingHistory />;
      case 'settings':
        return <Settings />;
      case 'track-order':
        return <Placeholder title="Track Order" />;
      case 'shopping-cart':
        return <Placeholder title="Shopping Cart" />;
      case 'wishlist':
        return <Placeholder title="Wishlist" />;
      case 'compare':
        return <Placeholder title="Compare" />;
      default:
        return <Dashboard navigate={navigate} />;
    }
  };

  return (
    <div>
      {showRating && <RatingModal onClose={() => setShowRating(false)} />}
      {showAddCard && <AddCardModal onClose={() => setShowAddCard(false)} />}

      <TopBar />
      <DashboardHeader />
      <NavBar />
      <Breadcrumb items={breadcrumbs[page] || breadcrumbs['dashboard']} />

      <div className="flex max-w-6xl mx-auto gap-5 px-5 my-5">
        <Sidebar active={page} navigate={navigate} />
        <div className="flex-1 min-w-0">{renderPage()}</div>
      </div>

      <DashboardFooter />
    </div>
  );
}

export default DashboardApp;
