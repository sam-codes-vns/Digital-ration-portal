import './History.css';

const History = () => {
  const historyRecords = [
    {
      date: '14 July 2025',
      items: [
        { name: 'Wheat', quantity: '5kg', status: 'Collected' },
        { name: 'Rice', quantity: '3kg', status: 'Collected' },
        { name: 'Sugar', quantity: '1kg', status: 'Pending' },
      ],
    },
    {
      date: '15 June 2025',
      items: [
        { name: 'Wheat', quantity: '5kg', status: 'Collected' },
        { name: 'Rice', quantity: '3kg', status: 'Collected' },
        { name: 'Sugar', quantity: '1kg', status: 'Collected' },
      ],
    },
    {
      date: '15 May 2025',
      items: [
        { name: 'Wheat', quantity: '5kg', status: 'Collected' },
        { name: 'Rice', quantity: '3kg', status: 'Collected' },
        { name: 'Sugar', quantity: '1kg', status: 'Collected' },
      ],
    },
  ];

  return (
    <div className="historyContainer">
      <h2>Ration Usage History</h2>

      {historyRecords.map((record, index) => (
        <div key={index} className="recordBlock">
          <h3>{record.date}</h3>
          <table className="historyTable">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {record.items.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td className={item.status === 'Collected' ? 'collected' : 'pending'}>
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default History;
