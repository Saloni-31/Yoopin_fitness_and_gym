import jwt from "jsonwebtoken";

const SECRET_KEY = "YOOPIN_SECRET_KEY_2026";

export const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Access denied. Token required"
        });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: "Access denied. Token required"
        });
    }

    try {

        const decoded = jwt.verify(token, SECRET_KEY);

        req.user = decoded;

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid or expired token"
        });

    }
};