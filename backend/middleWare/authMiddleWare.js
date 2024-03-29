const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const user =  require('../Models/userModel');


const protect = asyncHandler(async (req, res, next) => {
    let token;
  
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
  
        //decodes token id
        const decoded = jwt.verify(token, 'indreshKumar');
  
        req.user = await user.findById(decoded.id).select("-password");
  
        next();
      } catch (error) {
        res.status(401);
        throw new Error(`Not authorized, token failed ${error}`);
      }
    }
  
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  });
  
  module.exports = { protect };