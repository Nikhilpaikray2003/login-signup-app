import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold text-black">Please Login Or Sign Up To Continue</h1>
      <div className="d-flex gap-4 justify-content-center p-4">
        <Link to="/login">
          <button className="px-4 py-2 btn btn-primary">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-4 py-2  btn btn-success">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
