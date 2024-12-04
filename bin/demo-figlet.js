let figlet = require("figlet")

//第一种方式：callback调用
figlet("Hello World", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});


