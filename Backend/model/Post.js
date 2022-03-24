
import { PostCrudModel } from ".";

const PostDetails = {
  post_c
};

async function post_c(attrs) {
  const { title, content } = attrs;
  console.log(attrs);
  if (content.length !== 0) {
    await PostCrudModel.create(attrs);
    const postAfterCreation = { message: "Experience published" };
    console.log(postAfterCreation);
    return postAfterCreation;
  }
  return {
    message: "Empty experience can't be published",
  };
}

export default PostDetails;
