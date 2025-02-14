// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Home from "./components/Home"; // Import Home component
// import "./App.css"; 
// import Index from "./components/Index";

// function App() {
//   return (
//     <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-container">
//       <Router>
//         <div className="glass-card p-4 w-100 max-width-500">
//           <Routes>
//             <Route path="/" element={<Index />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} /> {/* Home Page Route */}
//           </Routes>
//         </div>
//       </Router>

//       <ToastContainer
//         position="top-right"
//         autoClose={3000} 
//         hideProgressBar={false} 
//         newestOnTop={true} 
//         closeOnClick
//         rtl={false} 
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />
//     </div>
//   );
// }

// export default App;










// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Home from "./components/Home";
// import Index from "./components/Index";
// import "./App.css";

// // Function to check if the user is authenticated
// const isAuthenticated = () => {
//   return localStorage.getItem("authToken") !== null; // Adjust as per your auth logic
// };

// // Protected Route Component
// const ProtectedRoute = ({ element }) => {
//   return isAuthenticated() ? element : <Navigate to="/login" />;
// };

// function App() {
//   return (
//     <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-container">
//       <Router>
//         <div className="glass-card p-4 w-100 max-width-500">
//           <Routes>
//             <Route path="/" element={<Index />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
//           </Routes>
//         </div>
//       </Router>

//       <ToastContainer
//         position="top-right"
//         autoClose={3000} 
//         hideProgressBar={false} 
//         newestOnTop={true} 
//         closeOnClick
//         rtl={false} 
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />
//     </div>
//   );
// }

// export default App;





















import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Index from "./components/Index";
import "./App.css";

// Function to check if the user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null; 
};

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <GoogleOAuthProvider clientId="916484798316-ttjk84nqlh7lpu8rhj7ub5d68uh7tlbn.apps.googleusercontent.com">
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-container">
        <Router>
          <div className="glass-card p-4 w-100 max-width-500">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
            </Routes>
          </div>
        </Router>

        <ToastContainer
          position="top-right"
          autoClose={3000} 
          hideProgressBar={false} 
          newestOnTop={true} 
          closeOnClick
          rtl={false} 
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;

