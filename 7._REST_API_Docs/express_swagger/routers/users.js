import { Router } from "express";
const router = Router();

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Returns the list of all the users
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Returns an array of users.
 */
router.get("/users", (req, res) => {
    res.send({ users: [
        {
            name: "Steve"
        }
    ]});
});

export default router;
