import express from "express";
import Result from "../models/results.model.js";

const uploadRouter = express.Router()

uploadRouter.post("/", async (req, res) => {
  try {
    // Sample data
    // const sampleData = {
    //   user: "64f123abc0de123456789012", // <-- Replace with a real ObjectId from your User collection
    //   imageUrl: "https://example.com/image.jpg",
    //   isStressed: true,
    //   percentStressed: 80,
    //   stressLevel: "high",
    //   remedies: ["Take a break", "Meditate", "Drink water"],
    // };

    // Insert the sample document
    const {userId , isStressed , percentStressed , stressLevel  , remedies} = req.body
    const newEntry = await Result.create({userId , isStressed , percentStressed , stressLevel  , remedies});

    // Respond with the newly created document
    return res.status(201).json({
      success: true,
      message: "Sample stress analysis data inserted",
      data: newEntry,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
}
});


export default uploadRouter;
