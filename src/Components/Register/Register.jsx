
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {
  const { handleRegister } = useContext(AuthContext);
    // console.log(handleRegister);

    const register = (e) => {
      e.preventDefault();
      const name  = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(name,email,password);

      handleRegister(email,password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      })
      
    }
    return (
        <div>
         <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-400">
      <form onSubmit={register}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        
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
          <button className="btn btn-primary">Register</button>
        </div>
        <div>
          <p className="mt-2 text-center">Already registerd? </p>
        </div>
      </form>
    </div>
  </div>
       </div>
    );
};

export default Register;