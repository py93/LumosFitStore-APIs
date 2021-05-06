const requestLogger = (req,res,next) => {
  console.log("Request params", req.params);
  console.log("LOGGED" , req.method);
  next();
}

module.exports = {requestLogger}