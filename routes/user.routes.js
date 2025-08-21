import {Router} from 'express';
import authorize from "../middleware/auth.middleware.js";
import {deleteUser, editUser, getUser, getUsers} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id',authorize, getUser);

userRouter.put('/:id', editUser);

userRouter.delete('/:id', deleteUser);

export default userRouter;
