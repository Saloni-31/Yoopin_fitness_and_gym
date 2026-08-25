export const adminMiddleware = (req, res, next) => {

    console.log("Logged in user:", req.user);

    if (req.user.role !== "admin") {
        return res.status(403).json({
            message: "Access denied. Admin only",
            roleReceived: req.user.role
        });
    }

    next();
};