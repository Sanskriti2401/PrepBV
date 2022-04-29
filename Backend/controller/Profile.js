"use strict";
// import { Profile } from "../model";
// import { ProfileCrudModel } from ".";
// import multer from "multer";
// import { v4 as uuidv4 } from "uuid";
// import path from "path";

// const ProfileController = {
//   upload_pic,
// };

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     console.log(req.body.email);
//     cb(null, "./images/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
//   },
// });

// // const fileFilter = (req, file, cb) => {
// //   const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
// //   if (allowedFileTypes.includes(file.mimetype)) {
// //     cb(null, true);
// //   } else {
// //     cb(null, false);
// //   }
// // };

// let upload = multer({ storage: storage });

const ProfileController = {
  upload_pic,
};

async function upload_pic(req, res, next) {
  // const { body } = req;
  console.log("entered: ");
  //upload.single("photo");
  console.log("cont: ");
  console.log(req);
  const email = req.body.email;
  console.log(req.body);
  const pic = req.file.filename;
  const entry = await Profile.create(email, pic);
  console.log("Profile insertion completed!!");
  return entry;
  // const data = await Profile.upload_pic(req, res, next);
  // console.log(data);
  // return res.send(data);
}

export default{ ProfileController }