import User from "../models/user.model.js";

export const getUsers = async(req, res, next) => {
    try {
        const users = await User.find();

        res.status(200).json({success: true, data : users})
    } catch (error) {
        next(error);
    }
}

export const getUser = async(req, res, next) => {
    try {
        const user = await User.findById(req.params.id).select('-password');

        if (!user) {
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({success: true, data : user})
    } catch (error) {
        next(error);
    }
}

export const editUser = async(req, res, next) => {
    try {
     const { id } = req.params;
     const updateUser = await User.findByIdAndUpdate(id, req.body);

     if (!updateUser) {
         const error = new Error('User not found');
         error.statusCode = 404;
         throw error;
     }

     res.status(200).json({ success: true, message:"User updated successfully" })
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
    const { id } = req.params;
    const dltUser = await User.findByIdAndDelete(id, req.body);

    if (!dltUser) {
        const error = new Error('User not found, please enter a valid id');
        error.statusCode=404;
        throw error;
    }

    res.status(200).json({ success: true, message: 'User deleted Successfully' });
    } catch (error) {
        next(error);
    }
}
