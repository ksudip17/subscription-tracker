import {Router} from 'express';
import {SignIn,SignOut,SignUp} from "../controllers/auth.controller.js";


const authRouter = Router();

// Path: /api/v1/auth/sign-up (POST)
authRouter.post('/sign-up', SignUp);
authRouter.post('/sign-in', SignIn);
authRouter.post('/sign-out', SignOut);

export default authRouter;