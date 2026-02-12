import { Router } from "express";

const router = Router();

router.get('/:id/*test', (req,res) => {
    const { id } = req.params;  // to be used to extract data
    res.status(200).json({
        message: 'mock response'
    })
})

export default router;