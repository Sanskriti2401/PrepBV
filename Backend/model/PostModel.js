import mongoose from "mongoose";
import PostSchema from "../Schemas/Post";

const Post = mongoose.model("Post", PostSchema);

const PostCrudModel = {
  create
};

async function create(attrs) {
  const entry = await Post.create(attrs);
  console.log("Insertion Completed");
  return entry;
}

export default PostCrudModel;
