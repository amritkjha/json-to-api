import { Router } from "express";
import { saveMock } from "../services/store.js";
import { AppError } from "../utils/appError.js";

const router = Router();

router.post('/generate', async(req,res) => {
    const data = req.body;  // to be stored
    if(!data || typeof data !== 'object' || Array.isArray(data)) {
        // res.status(400).json({error: 'Invalid Json'});
        throw new AppError(
            400,
            "INVALID_JSON",
            "Request body must be a valid JSON."
        )
    }
    if(Object.keys(data).length == 0) {
        throw new AppError(
            400,
            "EMPTY_JSON",
            "JSON object cannot be empty."
        )
    }
    for (const key of Object.keys(data)) {
        if (!/^[a-zA-Z0-9_-]+$/.test(key)) {
            throw new AppError(
            400,
            "INVALID_KEY_NAME",
            `Invalid resource key '${key}'. Only alphanumeric, underscore and hyphen allowed`
            );
        }
    }
    const size = Buffer.byteLength(JSON.stringify(data), "utf8");

    if (size > 100000) {
        throw new AppError(
            400,
            "PAYLOAD_TOO_LARGE",
            "JSON exceeds allowed size"
        );
    }
    const id = Math.random().toString(36).substring(2, 8);
    await saveMock(id, data);
    res.status(200).json({
        id,
        urll: `http://localhost:3000/${id}`,
    })
})

export default router;