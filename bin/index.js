// 开发后台脚手架，快速生成标准后台架构

let { program } = require("commander")
let { promisify } = require("util")
let asyncfiglet = promisify(require("figlet"))
let chalk = require("chalk")
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
    })


printLogo()
program.parse(process.argv)

