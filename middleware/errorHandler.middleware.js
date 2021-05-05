function route404Handler (req,res){
  res.status(404).json({success:false, message: "404: Page does not exist"})
}
function errorHandler(err,req,res,next){
  console.error(err.stack);
  res.status(500).json({success:false, message: "Internal Server Error occured.", errorMessage: err.message})
}
module.exports = {route404Handler, errorHandler}