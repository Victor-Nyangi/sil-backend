const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken')
require('dotenv').config();

exports.verifyToken = async (req, res) => {
    const { client_id, jwtToken } = req.body
    const client = new OAuth2Client(client_id);

    try {
        // Call the verifyIdToken to
        // varify and decode it
        const ticket = await client.verifyIdToken({
            idToken: jwtToken,
            audience: client_id,
        });

        // This is a JSON object that contains all the user info
        // Get the JSON with all the user info
        const payload = ticket.getPayload();
        // Generate JWT
        const generateToken = (id) => {
            return jwt.sign({ id }, process.env.JWT_SECRET, {
                expiresIn: '2d',
            })
        }
        res.status(201).json({
            name: payload.name,
            email: payload.email,
            token: generateToken(payload.jti)
        });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

exports.checkAuthentication = async (req, res) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

}