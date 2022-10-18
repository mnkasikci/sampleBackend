const bekci = function (req,res,next){
    console.log("Yeni bir istek geldi.");
    next();
};

module.exports = bekci;

