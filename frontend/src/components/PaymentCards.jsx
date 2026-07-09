import { useState } from 'react';

const cards = [
  { amount: '$95,400.00 USD', num: '3814', type: 'VISA',       color: 'from-[#0d3880] to-[#1a56db]' },
  { amount: '$87,583.00 USD', num: '1761', type: 'MC',         color: 'from-[#15803d] to-[#16a34a]' },
];

const PaymentCards = ({ onAddCard }) => {
  const [openMenu, setOpenMenu] = useState(null);
  return (
    <div className="bg-white rounded-md p-5 mb-4">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-semibold uppercase tracking-wide">Payment Option</span>
        <button onClick={onAddCard} className="text-orange-500 text-xs cursor-pointer bg-transparent border-none">Add Card →</button>
      </div>
      <div className="flex gap-4 flex-wrap">
        {cards.map((card, i) => (
          <div key={i} className={`relative w-48 rounded-xl p-4 text-white bg-gradient-to-br ${card.color}`}>
            <button
              className="absolute top-3 right-3 bg-transparent border-none text-white cursor-pointer text-base"
              onClick={() => setOpenMenu(openMenu === i ? null : i)}
            >•••</button>
            {openMenu === i && (
              <div className="absolute top-8 right-2 bg-white rounded-md shadow-lg z-10 min-w-[110px] overflow-hidden">
                <button className="block w-full text-left px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-50 border-none bg-white cursor-pointer" onClick={() => setOpenMenu(null)}>Edit Card</button>
                <button className="block w-full text-left px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-50 border-none bg-white cursor-pointer" onClick={() => setOpenMenu(null)}>Delete Card</button>
              </div>
            )}
            <div className="text-sm font-bold mb-3">{card.amount}</div>
            <div className="text-[9px] opacity-70 uppercase">Card Number</div>
            <div className="text-xs tracking-widest mt-0.5">**** **** **** {card.num}</div>
            <div className="flex justify-between items-center mt-3 text-xs">
              <span className="font-bold text-sm">{card.type}</span>
              <span>Kevin Gilbert</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PaymentCards;
