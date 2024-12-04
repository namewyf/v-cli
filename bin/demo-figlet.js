const { log } = require("console");
let { promisify } = require("util")
let figlet = require("figlet")
let asyncfiglet = promisify(require("figlet"))

//第一种方式：callback调用
figlet("Hello World", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});

async function run() {
    try {
        let data = await asyncfiglet("Vue 3")
        console.log(data);
    } catch (err) {
        console.log(err);
    }

}
run()

