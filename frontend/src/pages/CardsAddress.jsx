import { useState } from 'react';
import PaymentCards from '../components/PaymentCards';
import { AddCardModal } from '../components/Modals';

const CardsAddress = () => {
  const [showAddCard, setShowAddCard] = useState(false);
  return (
    <div>
      {showAddCard && <AddCardModal onClose={() => setShowAddCard(false)} />}
      <PaymentCards onAddCard={() => setShowAddCard(true)} />
      <div className="grid grid-cols-2 gap-4">
        {['Billing Address', 'Shipping Address'].map((title, i) => (
          <div key={i} className="bg-white rounded-md p-5">
            <h4 className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold mb-3">{title}</h4>
            <div className="font-semibold text-sm mb-2">Kevin Gilbert</div>
            <div className="text-xs text-gray-500 leading-relaxed mb-1">East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh</div>
            <div className="text-xs text-gray-500 mt-2">Phone Number: +1-202-555-0118</div>
            <div className="text-xs text-gray-500">Email: kevin.gilbert@gmail.com</div>
            <button className="mt-4 border border-gray-200 text-orange-500 px-4 py-1.5 text-[11px] uppercase tracking-widest rounded bg-white cursor-pointer hover:bg-orange-50">
              Edit Address
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardsAddress;
