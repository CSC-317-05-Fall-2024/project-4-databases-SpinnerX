// List all new attractions

import express from 'express';
const router = express.Router();

// router.get("/attractions", (req, res) => {
//     // res.send("Router (Get)");
//     // res.send({data: "Hello"});
// });

router.post("/attractions", (req, res) =>{
    res.send("Router (Post)");
});

router.put("/attractions", (req, res) =>{
    res.send("Router (Post)");
});

router.delete("/attractions", (req, res) =>{
    res.send("Router (Post)");
});

export { router as attractionRouter };
