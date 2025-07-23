import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const user = {
    name: 'Samriddhi Jaiswal',
    rationCardNo: 'RJ2025XXXX',
    familyMembers: 4,
    address: 'Jaipur, Rajasthan',
  };

  return (
    <div className="dashboardContainer">
      <h2>Welcome, {user.name}</h2>

      <div className="card">
        <h3>Ration Card Number</h3>
        <p>{user.rationCardNo}</p>
      </div>

      <div className="card">
        <h3>Family Members</h3>
        <p>{user.familyMembers}</p>
      </div>

      <div className="card">
        <h3>Address</h3>
        <p>{user.address}</p>
      </div>

      <div className="buttons">
        <button onClick={() => navigate('/ration-card')}>View Ration Card</button>
        <button onClick={() => navigate('/allotment')}>Check Allotments</button>
        <button onClick={() => navigate('/history')}>View History</button>
        <button onClick={() => navigate('/update-request')}>Request Update</button>
        <button onClick={()=> navigate('/search')}>Search Users</button>
        <button onClick={()=> navigate('/notifications')}>Notifications</button>
      </div>
    </div>
  );
};

export default Dashboard;
