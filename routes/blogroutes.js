import express from "express";
import { getHome, getNewPost, getEditPost, addPost, updatePost, deletePost } from "../controllers/blogcontrollers.js";

const router = express.Router();

router.get("/", getHome);
router.get("/new", getNewPost);
router.post("/add", addPost);
router.get("/edit/:id", getEditPost);
router.post("/update/:id", updatePost);
router.post("/delete/:id", deletePost); 

export default router;
