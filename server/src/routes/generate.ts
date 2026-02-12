import { Router } from "express";

const router = Router();

router.post('/generate', (req,res) => {
    const data = req.body;  // to be stored
    const fakeId = 'ag232133';
    res.status(200).json({
        id: fakeId,
        urll: `localhost:3000/user1/${fakeId}`,
    })
})

export default router;