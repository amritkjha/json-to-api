import { Router } from "express";
import { deleteMock, getMock } from "../services/store.js";
import { AppError } from "../utils/appError.js";

const router = Router();

router.get('/:id/', (req,res) => {
    const { id } = req.params;  // to be used to extract data
    const data = getMock(id);
    if(!data) {
        // res.status(404).json({error: 'No such API found.'});
        throw new AppError(
            404,
            "MOCK_NOT_FOUND",
            `Mock API with id: ${id} not found.`
        )
    }
    res.status(200).json(data.data);
})
router.delete('/:id/', (req,res) => {
    const { id } = req.params;
    const deleted = deleteMock(id);
    if(!deleted) {
        // return res.status(404).json({error: 'No such API found'});
        throw new AppError(
            404,
            "MOCK_NOT_FOUND",
            `Mock API with id: ${id} not found.`
        )
    }
    res.status(200).json({id, message: 'API deleted successfully'});
})

export default router;