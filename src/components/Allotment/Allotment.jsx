import './Allotment.css';

const Allotment = () => {
  const allotments = [
    {
      month: 'July 2025',
      items: [
        { name: 'Wheat', quantity: '5kg', status: 'Delivered' },
        { name: 'Rice', quantity: '3kg', status: 'Delivered' },
        { name: 'Sugar', quantity: '1kg', status: 'Pending' },
      ],
    },
    {
      month: 'June 2025',
      items: [
        { name: 'Wheat', quantity: '5kg', status: 'Delivered' },
        { name: 'Rice', quantity: '3kg', status: 'Delivered' },
        { name: 'Sugar', quantity: '1kg', status: 'Delivered' },
      ],
    },
  ];

  return (
    <div className="allotmentContainer">
      <h2>Monthly Ration Allotment</h2>

      {allotments.map((entry, index) => (
        <div key={index} className="monthBlock">
          <h3>{entry.month}</h3>
          <table className="allotmentTable">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {entry.items.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td
                    className={
                      item.status === 'Delivered'
                        ? 'delivered'
                        : 'pending'
                    }
                  >
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

export default Allotment;
