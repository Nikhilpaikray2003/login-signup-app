
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import Google from './google';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const storedEmail = localStorage.getItem("userEmail");
//     const storedPassword = localStorage.getItem("userPassword");

//     if (email === storedEmail && password === storedPassword) {
//       // Store auth token after successful login
//       localStorage.setItem("authToken", "your_random_token");

//       toast.success("Login Successful! Redirecting to Home...", { position: "top-right" });

//       setTimeout(() => {
//         navigate("/home"); // Redirect to Home Page after Login
//       }, 2000);
//     } else {
//       toast.error("Invalid Credentials. Please try again.", { position: "top-right" });
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className="input-field">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="password-field">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <span onClick={togglePasswordVisibility}>
//             {showPassword ? <FaEye /> : <FaEyeSlash />}
//           </span>
//         </div>

//         <button type="submit" className="login-btn">Login</button>
//       </form>

//       <p className="text-black">
//         Don't have an account? <Link to="/signup" className="text-decoration-none">Signup</Link>
//       </p>
//       <GoogleOAuthProvider clientId="916484798316-nkuu1h2fobsbp02jjf589947jgr0rcue.apps.googleusercontent.com">
//           <Google />
//       </GoogleOAuthProvider>
//     </div>
//   );
// };

// export default Login;







import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleLogin = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem("authToken", "your_random_token");
      toast.success("Login Successful! Redirecting to Home...");

      setTimeout(() => {
        navigate("/home"); // Redirect to Home
      }, 1000);
    } else {
      toast.error("Invalid Credentials. Please try again.");
    }
  };

  // Handle Google Login Success
  const handleGoogleSuccess = async (response) => {
    console.log("Google Login Success:", response);
    try {
      const res = await axios.post("http://localhost:3000/auth/google", {
        token: response.credential,
      });

      if (res.data.success) {
        localStorage.setItem("authToken", res.data.token);
        toast.success("Google Login Successful! Redirecting to Home...");
        navigate("/home"); // Ensure navigation
      } else {
        toast.error("Google Login Failed.");
      }
    } catch (error) {
      console.error("Google Login Error:", error);
      toast.error("Google Login Failed.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-field">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span onClick={togglePasswordVisibility}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        <button type="submit" className="login-btn">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>

      {/* Google Login Button */}
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={() => toast.error("Google Login Failed")}
      />
    </div>
  );
};

export default Login;
