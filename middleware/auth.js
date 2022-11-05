const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const protect = asyncHandler (async (req, res, next) => {
    let token; 
    console.log('authing')
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
            if (!token) {
                res.status(401)
                throw new Error("not authorized")
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.id = await Doctor.findById(decoded.id).select("-password")
            if (req.id === null) {
                throw new Error("User not found")
            }
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error("Not authorized")
        }
    } else {
        res.status(401)
        throw new Error("not authorized")
    }
})

module.exports = protect