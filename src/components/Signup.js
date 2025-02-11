

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { object, string, ref } from "yup";

// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// // Validation Schema
// const signupSchema = object({
//     name: string().required("Name is required"),
//     email: string().email("Invalid email").required("Email is required"),
//     password: string()
//       .min(8, "Password must be at least 8 characters")
//       .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
//       .matches(/[a-z]/, "Password must contain at least one lowercase letter")
//       .matches(/\d/, "Password must contain at least one number")
//       .matches(/[\W_]/, "Password must contain at least one special character")
//       .required("Password is required"),
//     confirmPassword: string()
//       .oneOf([ref("password"), null], "Passwords must match")
//       .required("Confirm Password is required"),
//   });
  

// const Signup = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(signupSchema),
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);
//   const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

//   const onSubmit = (data) => {
//     toast.success("Signup Successful!");
//     console.log(data);
//   };

//   return (
//     <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
//       <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "400px" }}>
//         <h2 className="text-center mb-4">Signup</h2>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mb-3">
//             <input {...register("name")} placeholder="Name" className="form-control" />
//             <p className="text-danger small">{errors.name?.message}</p>
//           </div>

//           <div className="mb-3">
//             <input {...register("email")} placeholder="Email" className="form-control" />
//             <p className="text-danger small">{errors.email?.message}</p>
//           </div>

//           <div className="mb-3 position-relative">
//             <input {...register("password")} type={showPassword ? "text" : "password"} placeholder="Password" className="form-control pe-5" />
//             <span className="position-absolute top-50 end-0 translate-middle-y me-3" style={{ cursor: "pointer" }} onClick={togglePasswordVisibility}>
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//             <p className="text-danger small">{errors.password?.message}</p>
//           </div>

//           <div className="mb-3 position-relative">
//             <input {...register("confirmPassword")} type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" className="form-control pe-5" />
//             <span className="position-absolute top-50 end-0 translate-middle-y me-3" style={{ cursor: "pointer" }} onClick={toggleConfirmPasswordVisibility}>
//               {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//             <p className="text-danger small">{errors.confirmPassword?.message}</p>
//           </div>

//           <button type="submit" className="btn btn-primary w-100">Signup</button>
//         </form>
//         <p className="mt-3 text-center">Already have an account? <Link to="/login">Login</Link></p>
//       </div>
//     </div>
//   );
// };

// export default Signup;































// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { object, string, ref } from "yup";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// const signupSchema = object({
//   name: string().required("Name is required"),
//   email: string().email("Invalid email").required("Email is required"),
//   password: string()
//     .min(8, "Password must be at least 8 characters")
//     .matches(/[A-Z]/, "Must contain at least one uppercase letter")
//     .matches(/[a-z]/, "Must contain at least one lowercase letter")
//     .matches(/\d/, "Must contain at least one number")
//     .matches(/[\W_]/, "Must contain at least one special character")
//     .required("Password is required"),
//   confirmPassword: string()
//     .oneOf([ref("password"), null], "Passwords must match")
//     .required("Confirm Password is required"),
// });

// const Signup = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(signupSchema),
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);
//   const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

//   useEffect(() => {
//     document.body.style.overflow = "hidden"; 
//     return () => { document.body.style.overflow = "auto"; }; 
//   }, []);

//   const onSubmit = (data) => {
//     toast.success("Signup Successful!");
//     console.log(data);
//   };

//   return (
//     <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center custom-position">

//     <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center mt-n5">

//       <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "400px" }}>
//         <h2 className="text-center mb-4">Signup</h2>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mb-3">
//             <input {...register("name")} placeholder="Name" className="form-control" />
//             <p className="text-danger small">{errors.name?.message}</p>
//           </div>

//           <div className="mb-3">
//             <input {...register("email")} placeholder="Email" className="form-control" />
//             <p className="text-danger small">{errors.email?.message}</p>
//           </div>

//           <div className="mb-3 position-relative">
//             <input {...register("password")} type={showPassword ? "text" : "password"} placeholder="Password" className="form-control pe-5" />
//             <span className="position-absolute top-50 end-0 translate-middle-y me-3" style={{ cursor: "pointer" }} onClick={togglePasswordVisibility}>
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//             <p className="text-danger small">{errors.password?.message}</p>
//           </div>

//           <div className="mb-3 position-relative">
//             <input {...register("confirmPassword")} type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" className="form-control pe-5" />
//             <span className="position-absolute top-50 end-0 translate-middle-y me-3" style={{ cursor: "pointer" }} onClick={toggleConfirmPasswordVisibility}>
//               {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//             <p className="text-danger small">{errors.confirmPassword?.message}</p>
//           </div>

//           <button type="submit" className="btn btn-primary w-100">Signup</button>
//         </form>
//         <p className="mt-3 text-center">Already have an account? <Link to="/login">Login</Link></p>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Signup;




















import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, ref } from "yup";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const signupSchema = object({
  name: string().required("Name is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/\d/, "Must contain at least one number")
    .matches(/[\W_]/, "Must contain at least one special character")
    .required("Password is required"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmit = (data) => {
    toast.success("Signup Successful!");
    console.log(data);
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" />
        <p className="text-danger small">{errors.name?.message}</p>

        <input {...register("email")} placeholder="Email" />
        <p className="text-danger small">{errors.email?.message}</p>

        <div className="password-field">
          <input {...register("password")} type={showPassword ? "text" : "password"} placeholder="Password" />
          <span onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <p className="text-danger small">{errors.password?.message}</p>

        <div className="password-field">
          <input {...register("confirmPassword")} type={showPassword ? "text" : "password"} placeholder="Confirm Password" />
        </div>
        <p className="text-danger small">{errors.confirmPassword?.message}</p>

        <button type="submit">Signup</button>
      </form>
      <p style={{ textAlign: "center" }}>
  <span style={{ color: "white" }}>Already have an account?</span>{" "}
  <Link
    to="/login"
    style={{
      fontWeight: "bold",
      textDecoration: "none",
      transition: "color 0.3s",
    }}
    onMouseOver={(e) => (e.target.style.color = "skyblue")}
    onMouseOut={(e) => (e.target.style.color = "white")}
  >
    Login
  </Link>
</p>
    </div>
  );
};

export default Signup;
