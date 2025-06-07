import express from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import { getMyFriends, getRecommendedUsers, sendFriendRequest } from "../controller/user.controller.js";

const router = express.Router();

//apply auth middleware to all the routes below
router.use(protectedRoute)

router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);
router.post("/friend-request/:id", sendFriendRequest);
export default router;