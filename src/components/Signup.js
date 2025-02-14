// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { object, string, ref } from "yup";
// import { toast } from "react-toastify";
// import { Link, useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import "react-toastify/dist/ReactToastify.css";

// const signupSchema = object({
//   name: string().matches(/^[A-Za-z\s]+$/, "Name must contain only alphabets").min(3, "Name must be at least 3 characters long").required("Name is required"),
//   email: string().email("Enter a valid email address").required("Email is required"),
//   password: string().min(8, "Password must be at least 8 characters")
//     .matches(/[A-Z]/, "Must contain at least one uppercase letter")
//     .matches(/[a-z]/, "Must contain at least one lowercase letter")
//     .matches(/\d/, "Must contain at least one number")
//     .matches(/[\W_]/, "Must contain at least one special character")
//     .required("Password is required"),
//   confirmPassword: string().oneOf([ref("password"), null], "Passwords must match").required("Confirm Password is required"),
// });

// const Signup = () => {
//   const navigate = useNavigate();
//   const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(signupSchema) });

//   const [showPassword, setShowPassword] = useState(false);
//   const togglePasswordVisibility = () => setShowPassword(!showPassword);

//   const onSubmit = (data) => {
//     localStorage.setItem("userEmail", data.email);
//     localStorage.setItem("userPassword", data.password);

//     toast.success("Signup Successful! Redirecting to Login...", { position: "top-right" });

//     setTimeout(() => {
//       navigate("/login"); // Redirects to Login after Signup
//     }, 2000);
//   };

//   return (
//     <div className="auth-container">
//       <h2>Registration Form</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="input-field">
//           <input {...register("name")} placeholder="Name" />
//           {errors.name && <p className="text-danger">{errors.name.message}</p>}
//         </div>

//         <div className="input-field">
//           <input {...register("email")} placeholder="Email" />
//           {errors.email && <p className="text-danger">{errors.email.message}</p>}
//         </div>

//         <div className="password-field">
//           <input {...register("password")} type={showPassword ? "text" : "password"} placeholder="Password" />
//           <span onClick={togglePasswordVisibility} style={{ color: "white" }}>
//             {showPassword ? <FaEyeSlash /> : <FaEye />}
//           </span>
//         </div>
//         {errors.password && <p className="text-danger">{errors.password.message}</p>}

//         <div className="password-field">
//           <input {...register("confirmPassword")} type={showPassword ? "text" : "password"} placeholder="Confirm Password" />
//         </div>
//         {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}

//         <button type="submit">Signup</button>
//       </form>

//       <p className="text-white">Already have an account? <Link to="/login" className="text-decoration-none">Login</Link></p>
//     </div>
//   );
// }

// export default Signup;














// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { object, string, ref } from "yup";
// import { toast } from "react-toastify";
// import { Link, useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import "react-toastify/dist/ReactToastify.css";

// /* Validation Schema */
// const signupSchema = object({
//   name: string()
//     .matches(/^[A-Za-z\s]+$/, "Name must contain only alphabets")
//     .min(3, "Name must be at least 3 characters long")
//     .required("Name is required"),

//   email: string()
//     .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a valid email address")
//     .required("Email is required"),

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
//   const navigate = useNavigate();
//   const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(signupSchema) });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);
//   const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

//   const onSubmit = (data) => {
//     localStorage.setItem("userEmail", data.email);
//     localStorage.setItem("userPassword", data.password);

//     toast.success("Signup Successful! Redirecting to Login...", { position: "top-right" });

//     setTimeout(() => {
//       navigate("/login");
//     }, 2000);
//   };

//   return (
//     <div className="auth-container">
//       <h2>Registration Form</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Name Field */}
//         <div className="input-field">
//           <input {...register("name")} placeholder="Name" />
//           {errors.name && <p className="text-danger">{errors.name.message}</p>}
//         </div>

//         {/* Email Field */}
//         <div className="input-field">
//           <input {...register("email")} placeholder="Email" />
//           {errors.email && <p className="text-danger">{errors.email.message}</p>}
//         </div>

//         {/* Password Field */}
//         <div className="password-field">
//           <input {...register("password")} type={showPassword ? "text" : "password"} placeholder="Password" />
//           <span onClick={togglePasswordVisibility} className="eye-icon">
//             {showPassword ? <FaEye /> : <FaEyeSlash />}
//           </span>
//         </div>
//         {errors.password && <p className="text-danger">{errors.password.message}</p>}

//         {/* Confirm Password Field */}
//         <div className="password-field">
//           <input {...register("confirmPassword")} type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" />
//           <span onClick={toggleConfirmPasswordVisibility} className="eye-icon">
//             {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
//           </span>
//         </div>
//         {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}

//         {/* Signup Button */}
//         <button type="submit">Signup</button>
//       </form>

//       <p className="text-black">Already have an account? <Link to="/login" className="text-decoration-none">Login</Link></p>
//     </div>
//   );
// };

// export default Signup;














// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { object, string, ref } from "yup";
// import { toast } from "react-toastify";
// import { Link, useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import "react-toastify/dist/ReactToastify.css";

// /* Password Validation */
// const passwordValidation = string()
//   .min(8, "Password must be at least 8 characters long")
//   .test("password-strength", (value, context) => {
//     if (!value) return context.createError({ message: "Password is required" });

//     let errors = [];
//     if (!/[A-Z]/.test(value)) errors.push("1 uppercase letter");
//     if (!/[a-z]/.test(value)) errors.push("1 lowercase letter");
//     if (!/\d/.test(value)) errors.push("1 number");
//     if (!/[\W_]/.test(value)) errors.push("1 special character");

//     return errors.length === 0 ? true : context.createError({ message: `Password must include: ${errors.join(", ")}` });
//   });

// /* Validation Schema */
// const signupSchema = object({
//   name: string()
//     .matches(/^[A-Za-z\s]+$/, "Name must contain only alphabets")
//     .min(3, "Name must be at least 3 characters long")
//     .required("Name is required"),

//   email: string()
//     .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a valid email address")
//     .required("Email is required"),

//   password: passwordValidation,

//   confirmPassword: string()
//     .oneOf([ref("password"), null], "Passwords must match")
//     .required("Confirm Password is required"),
// });

// const Signup = () => {
//   const navigate = useNavigate();
//   const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(signupSchema) });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);
//   const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

//   const onSubmit = (data) => {
//     localStorage.setItem("userEmail", data.email);
//     localStorage.setItem("userPassword", data.password);

//     toast.success("Signup Successful! Redirecting to Login...", { position: "top-right" });

//     setTimeout(() => {
//       navigate("/login");
//     }, 2000);
//   };

//   return (
//     <div className="auth-container">
//       <h2>Registration Form</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Name Field */}
//         <div className="input-field">
//           <input {...register("name")} placeholder="Name" />
//           {errors.name && <p className="text-danger">{errors.name.message}</p>}
//         </div>

//         {/* Email Field */}
//         <div className="input-field">
//           <input {...register("email")} placeholder="Email" />
//           {errors.email && <p className="text-danger">{errors.email.message}</p>}
//         </div>

//         {/* Password Field */}
//         <div className="password-field">
//           <input {...register("password")} type={showPassword ? "text" : "password"} placeholder="Password" />
//           <span onClick={togglePasswordVisibility} className="eye-icon">
//             {showPassword ? <FaEye /> : <FaEyeSlash />}
//           </span>
//         </div>
//         {errors.password && <p className="text-danger">{errors.password.message}</p>}

//         {/* Confirm Password Field */}
//         <div className="password-field">
//           <input {...register("confirmPassword")} type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" />
//           <span onClick={toggleConfirmPasswordVisibility} className="eye-icon">
//             {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
//           </span>
//         </div>
//         {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}

//         {/* Signup Button */}
//         <button type="submit">Signup</button>
//       </form>

//       <p className="text-black">Already have an account? <Link to="/login" className="text-decoration-none">Login</Link></p>
//     </div>
//   );
// };

// export default Signup;





















import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, ref } from "yup";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";


/* Password Validation */
const passwordValidation = string()
  .min(8, "Password must be at least 8 characters long")
  .test("password-strength", (value, context) => {
    if (!value) return context.createError({ message: "Password is required" });

    let errors = [];
    if (!/[A-Z]/.test(value)) errors.push("1 uppercase letter");
    if (!/[a-z]/.test(value)) errors.push("1 lowercase letter");
    if (!/\d/.test(value)) errors.push("1 number");
    if (!/[\W_]/.test(value)) errors.push("1 special character");

    return errors.length === 0 ? true : context.createError({ message: `Password must include: ${errors.join(", ")}` });
  });

/* Validation Schema */
const signupSchema = object({
  name: string()
    .matches(/^[A-Za-z\s]+$/, "Name must contain only alphabets")
    .min(3, "Name must be at least 3 characters long")
    .required("Name is required"),

  email: string()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a valid email address")
    .required("Email is required"),

  password: passwordValidation,

  confirmPassword: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(signupSchema) });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const onSubmit = (data) => {
    localStorage.setItem("userEmail", data.email);
    localStorage.setItem("userPassword", data.password);

    toast.success("Signup Successful! Redirecting to Login...", { position: "top-right" });

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="auth-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <div className="input-field">
          <input {...register("name")} placeholder="Name" />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div className="input-field">
          <input {...register("email")} placeholder="Email" />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className="password-field">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={errors.password ? "input-error" : ""}
          />
          <span onClick={togglePasswordVisibility} className="eye-icon">
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        {errors.password && <p className="error-message">{errors.password.message}</p>}

        {/* Confirm Password Field */}
        <div className="password-field">
          <input
            {...register("confirmPassword")}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className={errors.confirmPassword ? "input-error" : ""}
          />
          <span onClick={toggleConfirmPasswordVisibility} className="eye-icon">
            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}

        {/* Signup Button */}
        <button type="submit">Signup</button>
      </form>

      <p className="text-black">
        Already have an account? <Link to="/login" className="text-decoration-none">Login</Link>
      </p>
    </div>
  );
};

export default Signup;




