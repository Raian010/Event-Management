import { useContext } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
const Login = () => {
  // user
    const { handleLogin,handleGoogleSign } = useContext(AuthContext);
    const [loginError,setLoginError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate()


    const showSuccessAlert = () => {
      swal({
        title: 'Success!',
        text: 'Your Login is successful ✅',
        icon: 'success',
      });
    };

    const Login = (e) => {
        e.preventDefault();
        const name  = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password);

        setLoginError("");
  
        handleLogin(email,password)
        .then(result => {
          console.log(result.user);
          showSuccessAlert();
          navigate(location?.state ? location.state : "/")
          
        })
        .catch(error => {
          console.log(error);
          setLoginError(error.message)
        })
    }

    const handleGoogle = () => {
      handleGoogleSign()
      .then(result => {
        console.log(result.user);
        showSuccessAlert();
        navigate(location?.state ? location.state : "/");
      })
      .catch(error => {
        console.log(error);
      })
    }

    
    return (
        <div>
         <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-400">
      <form onSubmit={Login}  className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div>
          <p className="text-center">Do not have an account?  <Link className="text-blue-900 text-lg font-bold" to="/register">Register</Link> </p>
        </div>
        <p className="m-2 text-center">OR</p>
        <div>
          <p className="text-center">You can also sign in by <span><button onClick={handleGoogle} className="bg-white text-blue-500 text-lg  font-bold rounded px-2 py-1 ">Google</button></span></p>
        </div>
      </form>
    </div>
  </div>
  <p className="text-red-500 text-center font-semibold">{loginError}</p>
       </div>
    );
};

export default Login;