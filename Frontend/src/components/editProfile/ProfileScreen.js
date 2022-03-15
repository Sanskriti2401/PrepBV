import Nav from "../nav/nav";
//import Avatar from "./avatar";
import UserPic from "../../images/1.png";
import "./ProfileScreen.css";

function ProfileScreen() {
  return(
  <div> 
      <Nav />
      <div className="profile-content-left">
        <div className="imgdiv">
           <img src={UserPic} alt="Your image" />
        </div>
       <div className="profilepic">
            <h5>Update Profile Picture</h5>
       </div>
      </div>
      <div className="profile-content-right">
        <form action="">

        </form>
      </div>
  </div>);
};
export default ProfileScreen;
