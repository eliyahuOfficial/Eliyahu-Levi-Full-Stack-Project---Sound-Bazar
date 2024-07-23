import { Router } from "express";
import { usersService } from "../services/users-service";
import { validateLogin, validateUser } from "../middleware/joi";
import { isAdmin } from "../middleware/is-admin";
import { isAdminOrSelf } from "../middleware/is-admin-or-self";
import { isSelf } from "../middleware/is-self";
import { isBusiness } from "../middleware/is-business";

const router = Router();


router.get("/", ...isAdmin, async (req, res, next) => {
    try {
        const users = await usersService.getAllUsers();
        res.json(users);
    } catch (e) {
        next(e);
    }
});


router.post("/login", validateLogin, async (req, res, next) => {
    try {
        res.send(await usersService.loginUser(req.body));

    } catch (e) {
        next(e);
    }
});


router.post("/", validateUser, async (req, res, next) => {
    try {
        const result = await usersService.createUser(req.body);
        const { password, ...saved } = result.toJSON();
        res.status(201).json(saved);
    } catch (e) {
        next(e);
    }
});


router.get("/:id", ...isAdminOrSelf, async (req, res, next) => {
    try {
        const user = await usersService.getUserById(req.params.id);
        res.json(user);
    } catch (e) {
        next(e);
    }
});


router.put("/:id", ...isSelf, validateUser, async (req, res, next) => {
    try {
        const saved = await usersService.updateUser(req.body, req.payload._id);
        res.json(saved);
    } catch (e) {
        next(e);
    }
});


router.patch("/:id", ...isSelf, ...isBusiness, async (req, res, next) => {
    try {
        const updatedUser = await usersService.changeUserBusinessStatus(req.params.id, req.body.isBusiness);
        res.json(updatedUser);
    } catch (e) {
        next(e);
    }
});


router.delete("/:id", ...isAdmin, async (req, res, next) => {
    try {
        await usersService.deleteUser(req.params.id);
        res.json("User are Deleted");
    } catch (e) {
        next(e);
    }
});

export default router;

