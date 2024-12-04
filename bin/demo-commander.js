const { program } = require('commander');
program.version('1.0.0');

program.option('-n ', "输出名称")
// 添加一个 -t 或 --type 选项，需要一个参数值
program.option("-t --type <type>", "项目类型")
// 获取所有选项的值
const options = program.opts();
console.log("opts=>", options);

program.command("create <app-name>")
    .description("创建一个新项目")
    .action((name) => {
        console.log(`创建项目:${name}`);
    })

// 解析命令行参数
program.parse(process.argv);