// 开发后台脚手架，快速生成标准后台架构

let { program } = require("commander")
let { promisify } = require("util")
let asyncfiglet = promisify(require("figlet"))

program.version("1.0.0")

program.option("-n --name <type>", "output name")
async function printLogo() {
    let data = await asyncfiglet("v-cli")
    console.log(data)
}
printLogo()
program.parse(process.argv)

