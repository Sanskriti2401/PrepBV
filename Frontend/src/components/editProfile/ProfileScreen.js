import Nav from "../nav/nav";
//import Avatar from "./avatar";
import React from "react";
import UserPic from "../../images/1.png";
import "./ProfileScreen.css";
import { useState } from "react";
import axios from "axios";

function ProfileScreen() {
  const email = window.localStorage.getItem("user");
  const name = window.localStorage.getItem("name");
  const github = window.localStorage.getItem("github");
  const linkedin = window.localStorage.getItem("linkedin");
  const myArr = {
    linkedInId: linkedin,
    GithubId: github,
    photo: "",
  };
  const init = 0;
  const [inputs, setInputs] = useState(myArr);
  const [selectedFile, setselectedFile] = useState();
  const [change, setChange] = useState(init);
  const [show, setShow] = useState(0);
  const [pic, setPic] = useState(0);

  const ProfilePic = () => {
    
    const formData = new FormData();
    formData.append("email", email);
    formData.append("photo", inputs.photo);
    console.log(inputs.photo);
    console.log(email);

    console.log(...formData);
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);
    
    fetch("http://localhost:8000/profile", {
      crossDomain: true,
      method: "POST",

      // body: JSON.stringify(Object.fromEntries(formData))
      body: formData,
    }).then(function (response) {
      console.log(response.body);

      const { body } = response;

      const { message } = body;

      return response.json();
    });
    // axios
    //   .post("https://localhost:8000/profile", formData, { headers })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch(function (error) {
    //     if (error.response) {
    //       // Request made and server responded
    //       console.log(error.response.data);
    //       console.log(error.response.status);
    //       console.log(error.response.headers);
    //     } else if (error.request) {
    //       // The request was made but no response was received
    //       console.log(error.request);
    //     } else {
    //       // Something happened in setting up the request that triggered an Error
    //       console.log("Error", error.message);
    //     }
    //   });
    // const myurl = "https://localhost:8000/profile";
    // axios({
    //   method: "post",
    //   url: "/profile",
    //   data: formData,
    //   headers: { "Content-Type": "multipart/form-data" },
    // })
    //   .then(function (response) {
    //     //handle success
    //     console.log(response);
    //   })
    //   .catch(function (response) {
    //     //handle error
    //     console.log(response);
    //   });
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "password") {
      setChange(1);
    }
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    const email = window.localStorage.getItem("user");
    console.log(email);
    console.log(inputs.linkedInId);
    if (pic == 1) ProfilePic();
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
        flag: 1,
      }),
    }).then(function (response) {
      console.log(response.body);

      const { body } = response;

      const { message } = body;

      return response.json();
    });
    alert("submitted");
  };

  const uploadImage = React.useRef(null);

  /*
  const fileSelectedHandler = (event) => {
    const [file] = event.target.files;
    if(file){
      const reader = new FileReader();
      const {current} = uploadImage;
      current.file = file;
      reader.onload = (e) => {
          current.src = e.target.result;
      }
      reader.readAsDataURL(file);
      console.log(file);
      console.log(file.name);
      console.log(current.src);
      setselectedFile(current);
      // setShow(1);
    }
    
  }*/
  const fileSelectedHandler = (event) => {
    setPic(1);
    setInputs({ ...inputs, photo: event.target.files[0] });
    // console.log(event.target.files[0]);
  };

  const fileUploadHandler = (event) => {
    const email = localStorage.getItem("email");
    fetch("http://localhost:8000/Login", {
      crossDomain: true,
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        email: email,
        data: uploadImage,
        required: true,
        img: 1,
      }),
    }).then(function (response) {
      console.log(response.body);

      const { body } = response;

      const { message } = body;

      return response.json();
    });
  };

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
            {/* {show==1 ? <img ref={uploadImage} alt="Your image" /> : <img src={UserPic} alt="Your image" />} */}
            <img ref={uploadImage} alt="Your image" />
          </div>
          <div className="profilepic">
            <h5>Update Profile Picture</h5>
            <input
              type="file"
              accept="image/*"
              multiple={false}
              name="mypic"
              id="dp"
              placeholder="Select Your profile picture"
              onChange={fileSelectedHandler}
              readOnly
            />
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
          <button className="save-button" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}
export default ProfileScreen;
