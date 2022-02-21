const myLogger = (req, res, next)=> {
    const start = new Date();
    day=start.getDay()
    hour=start.getHours()
    if(day==0 ||day==6 || hour>17 || hour<9){
    return res.status(400).send("closed only avaible from monday to friday")
  }
    next();
  };

 module.exports=myLogger