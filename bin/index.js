// 开发后台脚手架，快速生成标准后台架构

import { program } from "commander"
import { promisify } from "util"
import figlet from "figlet"
import chalk from "chalk"
import inquirer from "inquirer"
//记得这里要加.js
import init from "./init.js"
let asyncfiglet = promisify(figlet)
// 日志打印函数
const log = (content) => {
    console.log(chalk.yellow(content))
}

program.version("1.0.0")

program.option("-n --name <type>", "output name")
// 打印logo
async function printLogo() {
    let data = await asyncfiglet("v-cli")
    log(data)
}

program.command("create <app-name>")
    .description("创建一个新项目")
    .action(async (name) => {
        await printLogo()
        log("准备创建项目……")
        let answer = await inquirer.prompt([
            {
                name: "language",
                type: "list",
                message: "请选择语言版本",
                choices: ["JavaScript", "TypeScript"]
            }
        ])
        if (answer.language === "JavaScript") {
            // 下载框架
            log("您选择了JavaScript版本，即将进入下载模式")
            init(name)
        } else {
            log("TypeScript")
        }
    })

program.parse(process.argv)

