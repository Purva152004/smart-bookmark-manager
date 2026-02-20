const express = require("express");
const router = express.Router();
const Bookmark = require("../models/Bookmark");

// Add bookmark
router.post("/", async (req, res) => {
  try {
    const bookmark = await Bookmark.create(req.body);
    return res.status(201).json(bookmark);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// View all bookmarks
router.get("/", async (req, res) => {
  try {
    const bookmarks = await Bookmark.find().sort({ createdAt: -1 });
    return res.json(bookmarks);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

//Update bookmark
router.put("/:id", async (req, res) => {
  try {
    const updated = await Bookmark.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    return res.json(updated);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

//Delete bookmark
router.delete("/:id", async (req, res) => {
  try {
    await Bookmark.findByIdAndDelete(req.params.id);
    return res.json({ message: "Bookmark deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;