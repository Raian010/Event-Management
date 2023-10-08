import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Profile = () => {
    const {user} = useContext(AuthContext);
    console.log();
    
    return (
        <div className="flex justify-center">
            
           <div>
           <p className="text-3xl mb-10 text-center font-bold">This is your
           <br /> <span className="text-blue-600">personal profile</span></p>
          <div className="space-y-4">
          <img src={user.photoURL} alt="" />
           <p className="font-bold"><span className={user.displayName ? "text-3xl mr-5" : "hidden"}>Name:</span> <span className="text-3xl text-blue-400">{user.displayName}</span> </p>
           <p className="font-bold"><span className="text-3xl mr-5">Email:</span> <span className="text-3xl text-blue-400">{user.email}</span> </p>
           <p className="font-bold"><span className="text-3xl mr-5">Last sign in:</span> <span className="text-3xl text-blue-400">{user.metadata.lastSignInTime}</span> </p>
          </div>
           </div>
        </div>
    );
};

export default Profile;