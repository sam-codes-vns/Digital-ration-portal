import './RationCard.css';

const RationCard = () => {
  const rationCardDetails = {
    cardNumber: 'RJ2025XXXX',
    holderName: 'Samriddhi Jaiswal',
    address: 'Jaipur, Rajasthan',
    cardType: 'APL',
    issueDate: '12-Jan-2023',
    members: [
      { name: 'Samriddhi Jaiswal', age: 20, relation: 'Self' },
      { name: 'Shyam Jaiswal', age: 48, relation: 'Father' },
      { name: 'Radha Jaiswal', age: 45, relation: 'Mother' },
      { name: 'Sakshi Jaiswal', age: 15, relation: 'Sister' },
    ],
  };

  return (
    <div className="cardContainer">
      <h2>Ration Card Details</h2>

      <div className="cardInfo">
        <p><strong>Card Number:</strong> {rationCardDetails.cardNumber}</p>
        <p><strong>Holder Name:</strong> {rationCardDetails.holderName}</p>
        <p><strong>Address:</strong> {rationCardDetails.address}</p>
        <p><strong>Card Type:</strong> {rationCardDetails.cardType}</p>
        <p><strong>Issue Date:</strong> {rationCardDetails.issueDate}</p>
      </div>

      <h3>Family Members</h3>
      <table className="membersTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Relation</th>
          </tr>
        </thead>
        <tbody>
          {rationCardDetails.members.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.age}</td>
              <td>{member.relation}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="downloadBtn">Download Card (PDF)</button>
    </div>
  );
};

export default RationCard;
