import { ProfileCrudModel } from ".";
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from "path";

const Profile = {
  upload_pic
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images');
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
  }
  
let upload = multer({ storage, fileFilter });

async function upload_pic(attrs) {

  
  const { req,res,next} = attrs;
  console.log("re");
  console.log(req);
  upload.single('photo');
  const email=req.body.email;
  const pic=req.file.filename;
  //console.log(attrs);
  
    await ProfileCrudModel.create(email,pic);
    const ProfileAfterCreation = { message: "Insertion" };
    console.log(ProfileAfterCreation);
    return ProfileAfterCreation;
  
   

}
export default Profile;