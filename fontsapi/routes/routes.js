
var appRouter = function (app) {
    
    var restroomStatus = "Not Set Yeat :D";

    app.get("/", function (req, res) {
        res.status(200).send("Welcome to our restful API");
    });

    app.get("/restroomstatus", function (req, res) {
        res.send(JSON.stringify({ restroom: restroomStatus }));
    });

    app.get("/restroomstatus/change/:status", function (req, res) {
        
        switch(req.params.status) {
            case "occupied":
                restroomStatus = req.params.status;
            
                res.send(JSON.stringify({ message: "Status Changed to " + restroomStatus }));
                break;
            case "vacant":
                restroomStatus = req.params.status;
                res.send(JSON.stringify({ message: "Status Changed to " + restroomStatus }));    
                break;
            default:
                res.send(JSON.stringify({ message: "Ops, you can just change between Ocupied or Vacant" }));        
        }
        
    });

}

module.exports = appRouter;