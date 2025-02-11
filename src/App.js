

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import "./App.css"; // Import the updated CSS file

// function App() {
//   return (
//     <div className="bg-container">
//       <Router>
//         <div className="glass-card">
//           <Routes>
//             <Route path="/" element={<Signup />} />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//           <ToastContainer position="top-right" autoClose={3000} />
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;















import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "./App.css"; 

function App() {
  return (
    <div className="bg-container">
      <Router>
        <div className="glass-card">
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <ToastContainer position="top-right" autoClose={3000} />
        </div>
      </Router>
    </div>
  );
}

export default App;
