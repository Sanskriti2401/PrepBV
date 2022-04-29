import mongoose from "mongoose";
import ProfileSchema from "../Schemas/ProfilePic";

const Profile= mongoose.model("Profile", ProfileSchema);

const ProfileCrudModel = {
    create
  
};

async function create(email,pic) {
  const entry = await Profile.create(email,pic);
  console.log("Profile insertion completed!!");
  return entry;
}
/*
async function interview() {
  const application = await Post.find({});
  console.log(application)
  console.log("fetched");
  return application;
}*/
export default ProfileCrudModel;