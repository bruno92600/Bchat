import jwt from 'jsonwebtoken';
import User from '../models/user.models.js';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({
                error: "non autorisé - no token provided!"
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({
                error: "non autorisé - token invalide!"
            });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({
                error: "utilisateur non trouvé!"
            });
        }

        req.user = user;

        next();

    } catch (error) {
        console.log("erreur dans la fonction protect route :", error.message);
        res.status(500).json({ error: "erreur serveur interne" });
    }
};

export default protectRoute;