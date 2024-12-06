import { program } from "commander";
import inquirer from "inquirer";

program.version("1.0.0")
inquirer.prompt([
    {
        name: "userName",
        type: "input",
        message: "你的名字叫什么？"
    },
    {//checkbox用空格去选择
        name: "age",
        type: "checkbox",
        message: "你多大了",
        choices: ["20-25", "26-30", "31-35", "36-40"]
    },
    {//list直接用enter选择
        name: "salary",
        type: "list",
        message: "你的工资是多少？",
        choices: ["1000-2000", "2000-3000", "3000-4000", "4000-5000"]
    }
]).then(answer => {
    console.log("回答内容", answer);
})


program.parse(process.argv)
