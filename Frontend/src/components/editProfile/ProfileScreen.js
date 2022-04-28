import Nav from "../nav/nav";
//import Avatar from "./avatar";
import UserPic from "../../images/1.png";
import "./ProfileScreen.css";
import { useState } from "react";


function ProfileScreen() {

  const email = window.localStorage.getItem('user');
  const name = window.localStorage.getItem('name');
  const github = window.localStorage.getItem('github');
  const linkedin = window.localStorage.getItem('linkedin');
  const myArr = {
     linkedInId: linkedin ,
     GithubId: github ,
     password: '********'
  }
  const [inputs, setInputs] = useState(myArr);
  const [selectedFile, setselectedFile] = useState();
  const [change, setChange ] = useState(0);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if(name==='password'){
      setChange(1);
    }
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    const email = window.localStorage.getItem('user')
    console.log(email);
    console.log(inputs.linkedInId);
    fetch("http://localhost:8000/login", {
      crossDomain: true,
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        email: email,
        password: inputs.password,
        linkedInId: inputs.linkedInId,
        GithubId: inputs.GithubId,
        change: change,
        flag: 1
      }),
    }).then(function (response) {
      console.log(response.body);

      const { body } = response;

      const { message } = body;

      return response.json();
    });
    alert('submitted')
  };

  const fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
    setselectedFile(event.target.files[0])
  }

  const fileUploadHandler = (event) => {
  }

  return (
    <>
      <Nav />
      {console.log(email)}
      {console.log(name)}
      {console.log(inputs.linkedInId)}
      {console.log(inputs.GithubId)}
      {console.log(inputs.password)}
      <div className="editProfileScreen">
        <div className="profile-content-left">
          <div className="imgdiv">
            <img src={UserPic} alt="Your image" />
          </div>
          <div className="profilepic">
            <h5>Update Profile Picture</h5>
            <input type="file" name="mypic" id="dp" placeholder="Select Your profile picture" onChange={fileSelectedHandler} readOnly />
            {/* <button onClick={{fileUploadHandler}}>+</button> */}
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
                placeholder={name}
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
                placeholder={email}
                readOnly
              />
            </div>
            <div className="form-profile">
              <label className="profile-label">Change Password</label>
              <input
                id="password"
                type="password"
                name="password"
                className="profile-input"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                value={inputs.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-profile">
              <label className="profile-label">LinkedIn ID</label>
              <input
                id="linkedInId"
                type="text"
                name="linkedInId"
                className="profile-input"
                placeholder={linkedin}
                value={inputs.linkedInId}
                onChange={handleChange}
              />
            </div>
            <div className="form-profile">
              <label className="profile-label">Github ID</label>
              <input
                id="GithubId"
                type="text"
                name="GithubId"
                className="profile-input"
                placeholder={github}
                value={inputs.GithubId}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>

        <div className="profile-content-right">
          <button className="save-button" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </>);
};
export default ProfileScreen;
