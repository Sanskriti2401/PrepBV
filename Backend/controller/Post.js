"use strict";
import { PostDetails } from "../model";

const PostController = {
  post_c
};

async function post_c(req, res, next) {
  const { body } = req;
  const data = await PostDetails.post_c(body);
  console.log(data);
  return res.send(data);
}

export default PostController;
