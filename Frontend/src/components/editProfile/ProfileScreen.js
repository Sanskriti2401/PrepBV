import Nav from "../nav/nav";
//import Avatar from "./avatar";
import UserPic from "../../images/1.png";
import "./ProfileScreen.css";

function ProfileScreen() {
  return(
    <>
    <Nav />
  <div className="editProfileScreen"> 
      <div className="profile-content-left">
        <div className="imgdiv">
           <img src={UserPic} alt="Your image" />
        </div>
       <div className="profilepic">
            <h5>Update Profile Picture</h5>
            <input type="text" name="" id="" placeholder="Select Your profile picture" readOnly />
            <button>+</button>
       </div>
      </div>
    
      <div className="profile-content-middle">
        <form className="info-form">
            <div className="form-profile">
              <label className="profile-label">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className="profile-input"
                placeholder="User's name"
                readOnly
              />
            </div>
            <div className="form-profile">
              <label className="profile-label">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className="profile-input"
                placeholder="User's email"
                readOnly
              />
            </div>
            <div className="form-profile">
              <label className="profile-label">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                className="profile-input"
                placeholder="User's Password"
              />
            </div>
            <div className="form-profile">
              <label className="profile-label">LinkedIn ID</label>
              <input
                id="linkedInId"
                type="text"
                name="linkedInId"
                className="profile-input"
                placeholder="User's LinkedIn"
              />
            </div>
            <div className="form-profile">
              <label className="profile-label">Github ID</label>
              <input
                id="GithubId"
                type="text"
                name="GithubId"
                className="profile-input"
                placeholder="User's Github"
              />
            </div>
        </form>
      </div>

    <div className="profile-content-right">
        <button className="save-button">Save</button>
    </div>

  </div>
  </>);
};
export default ProfileScreen;
