import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js';
import User from '../models/user.models.js';

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        if(password !== confirmPassword) {
            return res.status(400).json({error: "Les mots de passe ne correspondent pas!"});
        }

        const user = await User.findOne({username})

        if (user) {
            return res.status(400).json({error: "L'utilisateur existe déjà!"});
        }

        // couper le mot de passe ici
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // https://avatar-placeholder.iran.liara.run/
        // https://avatar.iran.liara.run/public/boy?username=${username}
        // https://avatar.iran.liara.run/public/girl?username=${username}

        // avatar de l'utilisateur
        // https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male"? boyProfilePic : girlProfilePic
        });

        if (newUser) {
			// Generate JWT token here
			generateTokenAndSetCookie(newUser._id, res);
			await newUser.save();

			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				username: newUser.username,
				profilePic: newUser.profilePic,
			});

        } else {
            res.status(400).json({ error : "utilisateur invalide "})
        }

    } catch (error) {
        console.log("erreur lors de l'enregistrement de l'utilisateur!");
        res.status(500).json({error: "Une erreur est survenue lors de l'enregistrement de l'utilisateur!"});
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect) {
            return res.status(400).json({error: "Nom d'utilisateur ou mot de passe incorrect!"});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        })

    } catch (error) {
        console.log("erreur lors de la connection de l'utilisateur!");
        res.status(500).json({error: "Une erreur est survenue lors de la connexion de l'utilisateur!"});
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0})
        res.status(200).json({message: "Déconnexion réussie!"});

    } catch (error) {
        console.log("erreur lors de la déconnection de l'utilisateur!");
        res.status(500).json({error: "Une erreur est survenue lors de la déconnexion de l'utilisateur!"});
    }
}


