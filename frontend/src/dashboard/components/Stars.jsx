const Stars = ({ rating }) => (
  <span className="text-orange-400 text-xs">
    {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
  </span>
);
export default Stars;
