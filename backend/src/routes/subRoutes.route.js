import express from 'express'
import * as subController from '../controller/subscription.controller.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'

const router = express.Router()

// POST /api/sub/addsub
router.post('/addsub', authMiddleware, subController.addSubscription)

// GET /api/sub/getAllSub
router.get('/getsub', authMiddleware, subController.getAllSub)

//PUT /api/sub/updatesub
router.put('/updatesub/:id', authMiddleware, subController.updateSub)

//PUT /api/sub/deletesub
router.delete("/deletesub/:id", authMiddleware, subController.deleteSub)

//GET /api/sub/expiringSubs
router.get('/expiringsubs', authMiddleware, subController.expiringSubs)

//GET /api/sub/totalspend
router.get("/totalspend", authMiddleware, subController.totalSpend)

//GET /api/sub/filteredsubs
router.get("/filteredsubs", authMiddleware, subController.filteredSubs)

export default router