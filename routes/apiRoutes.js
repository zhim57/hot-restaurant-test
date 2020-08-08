var tableData = require("../data/tableData.js");
var waitListData = require("..data/waitinglistData");



module.exports = function (app) {

    app.get("/api/tables", function (req, res) {
        res.json(tableData);

    });
    app.get("/api/waitlist", function (req, res) {
        res.json(waitlistData);

    });

    app.post("/api/tables", function (req, res) {

        if(tables.length<5){
            res.json(false);
        }
        
        else {
            waitListData.push(req.body);
        res.json(true);
        }

    });
    app.post("/api/clear", function (req, res) {
tableData.length=0;
waitList.length=0;

        res.json({ok: true});


    });


}