function authInterceptor (req,res){
  //TODO: Check for usename pwd auth
  next();
}

module.exports = {authInterceptor}