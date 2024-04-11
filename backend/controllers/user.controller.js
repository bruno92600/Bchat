import User from "../models/user.models.js";

export const getUsersForSidebar = async (req, res) => {
    try {

        const loggedInUserId = req.user._id;

        const filtereUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");

        res.status(200).json(filtereUsers);
        
    } catch (error) {
        console.error("erreur dans getUsersForSidebar:", error.message);
        res.status(500).json({error: "erreur serveur!"});
    }
}