import { Navigate, Route, Routes } from 'react-router-dom';
import Allotment from './components/Allotment/Allotment';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import History from './components/History/History';
import Home from './components/Home/Home';
import Notifications from './components/Notifications/Notifications';
import RationCard from './components/RationCard/RationCard';
import Search from './components/Search/Search';
import Support from './components/Support/Support';
import { useAuth } from './context/AuthContext';

import UpdateRequest from './components/UpdateRequest/UpdateRequest';


const App = () => {
  console.log("App is rendering...");

  const { isLoggedIn } = useAuth();

  // Wrapper for protected pages
  const ProtectedRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <>
      {/* You can add a global navbar or notification here */}
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ration-card"
          element={
            <ProtectedRoute>
              <RationCard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/allotment"
          element={
            <ProtectedRoute>
              <Allotment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update-request"
          element={
            <ProtectedRoute>
              <UpdateRequest />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/support"
          element={
            <ProtectedRoute>
              <Support />
            </ProtectedRoute>
          }
        />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
