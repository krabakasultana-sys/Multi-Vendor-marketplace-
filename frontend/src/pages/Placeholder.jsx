const Placeholder = ({ title }) => (
  <div className="bg-white rounded-md p-16 text-center">
    <div className="text-5xl mb-4">🚧</div>
    <div className="text-lg font-semibold mb-2">{title}</div>
    <div className="text-gray-400 text-sm">This page is under construction</div>
  </div>
);
export default Placeholder;
