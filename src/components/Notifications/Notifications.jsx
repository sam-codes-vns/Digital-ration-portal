import './Notifications.css';

const Notifications = () => {
  const notifications = [
    {
      title: 'July Ration Allotment Delivered',
      message: 'Your ration for July 2025 has been delivered to your nearby FPS center.',
      date: '14 July 2025',
      type: 'success',
    },
    {
      title: 'Update Request Approved',
      message: 'Your request to update mobile number has been approved.',
      date: '10 July 2025',
      type: 'info',
    },
    {
      title: 'System Maintenance Alert',
      message: 'Portal will be unavailable on 16 July between 1AM - 4AM for maintenance.',
      date: '09 July 2025',
      type: 'warning',
    },
    {
      title: 'Sugar Not Available',
      message: 'Sugar distribution is delayed this month due to supply issues.',
      date: '01 July 2025',
      type: 'error',
    },
  ];

  return (
    <div className="notificationsContainer">
      <h2>Notifications</h2>
      {notifications.map((note, index) => (
        <div
          key={index}
          className={`${"notificationCard"} ${[note.type]}`}
        >
          <h3>{note.title}</h3>
          <p>{note.message}</p>
          <span className="date">{note.date}</span>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
