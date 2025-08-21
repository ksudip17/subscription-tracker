import {Router} from 'express';
import authorize from "../middleware/auth.middleware.js";
import {
    cancelSubscription,
    createSubscription, deleteSubscription, editSubscription,
    getAllSubscriptions,
    getSubscriptionDetail,
    getUserSubscriptions
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', getAllSubscriptions);

subscriptionRouter.get('/:id', getSubscriptionDetail);

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.put('/:id', editSubscription);

subscriptionRouter.delete('/:id', deleteSubscription);

subscriptionRouter.patch('/:id/cancel', cancelSubscription);


export default subscriptionRouter;

