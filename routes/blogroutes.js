import express from "express";
import { getEditPost , getHome , getNewPost ,deletePost, addPost, updatePost } from "../controllers/blogcontrollers";
import bodyParser from "body-parser";


const router = express.Router();


router.get("/" ,getHome);
router.post("/add" , addPost);
router.get("/new" , getNewPost);
router.get("/edit/:id" , getEditPost);
router.get("/update/:id" , updatePost);
router.get("/delete/:id" , deletePost);

export default router;