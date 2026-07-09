const StatusBadge = ({ status }) => {
  const colors = {
    'IN PROGRESS': 'text-orange-500',
    'COMPLETED':   'text-green-600',
    'CANCELED':    'text-red-500',
  };
  return <span className={`text-xs font-semibold ${colors[status]}`}>{status}</span>;
};
export default StatusBadge;
