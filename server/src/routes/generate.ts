import { Router } from "express";
import { saveMock } from "../services/store.js";

const router = Router();

router.post('/generate', (req,res) => {
    const data = req.body;  // to be stored
    if(!data || Object.keys(data).length == 0) {
        res.status(400).json({error: 'Invalid Json'});
    }
    const id = Math.random().toString(36).substring(2, 8);
    saveMock(id, data);
    res.status(200).json({
        id,
        urll: `localhost:3000/${id}`,
    })
})

export default router;