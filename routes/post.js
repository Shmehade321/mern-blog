const express = require("express");
const {
  createPost,
  getPosts,
  updatePost,
  getPost,
  deletePost,
} = require("../controllers/post");
const protect = require("../middlewares/auth");
const router = express.Router();

router.post("/", protect, createPost);
router.get("/", getPosts);
router.put("/:id", protect, updatePost);
router.get("/:id", getPost);
router.delete("/:id", protect, deletePost);

module.exports = router;
