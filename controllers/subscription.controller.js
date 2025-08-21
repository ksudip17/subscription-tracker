import Subscription from "../models/subscription.model.js";
import {workflowClient} from "../config/upstash.js";
import {SERVER_URL} from "../config/env.js";
import User from "../models/user.model.js";

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        });

        const workflowResponse = await workflowClient.trigger({
            url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
            body: { subscriptionId: subscription.id },
            headers: { "content-type": "application/json" },
            retries: 0,
        });


        res.status(201).json({
            success: true,
            data: subscription,
            workflowRunId: workflowResponse.workflowRunId
        });
    } catch (error) {
        next(error);
    }
}

export const getUserSubscriptions = async (req, res, next) => {
    try {
        if (req.user.id !== req.params.id) {
            const error = new Error('You are not the owner of this account')
            error.statusCode = 401;
            throw error;
        }
            const subscriptions = await Subscription.find({ user: req.params.id });

            res.status(200).json({ success: true, data:subscriptions })

    } catch (error) {
        next(error);
    }

}

export const getAllSubscriptions = async (req, res, next) => {
    try {
        const subscriptions = await Subscription.find();

        res.status(200).json({success: true, data : subscriptions})
    } catch (error) {
        next(error);
    }
}

export const getSubscriptionDetail = async (req, res, next) => {
    try {
        const getSubscription = await Subscription.findById(req.params.id);

        if (!getSubscription) {
            const error = new Error('Subscription not found');
            error.statusCode=404;
            throw error;
        }

        res.status(200).json({ success: true, data:getSubscription })

    } catch (error) {
        next(error);
    }
}

export const editSubscription = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateSubscription = await Subscription.findByIdAndUpdate(id, req.body);

        if (!updateSubscription) {
            const error = new Error('Subscription not found');
            error.statusCode=404;
            throw error;
        }

        const updatedSubscription = await Subscription.findById(id);

        res.status(200).json({ success: true, message:'subscription updated successfully', data:updatedSubscription })

    } catch (error) {
        next(error);
    }
}

export const deleteSubscription = async (req, res, next) => {
    try {
        const { id } = req.params;

        const dltSubscription = await Subscription.findByIdAndDelete(id);

        if (!dltSubscription) {
            const error = new Error('Subscription not found');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            success: true,
            message: 'Subscription deleted successfully'
        });

    } catch (error) {
        next(error);
    }
};

export const cancelSubscription = async (req, res, next) => {
    try {
        const { id } = req.params;

        const subscription = await Subscription.findByIdAndUpdate(id,{ status: 'cancelled' }, { new : true });

        if (!subscription) {
            const error = new Error('Subscription not found');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            success: true,
            message: 'Your subscription has been cancelled'
        });

    } catch (error) {
        next(error);
    }
};



