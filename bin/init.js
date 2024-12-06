// 项目克隆
import { promisify } from 'util'
import ora from 'ora'
import downloadGit from 'download-git-repo'
import shell from 'shelljs'
import chalk from 'chalk'
// download = promisify(download)这样子是不可以的，import导入的是只可读的常量
let download = promisify(downloadGit)
// 日志打印函数
const log = (content) => {
    console.log(chalk.yellow(content))
}

export default async (appName) => {
    log(`创建项目:${appName}`)
    shell.rm('-rf', appName)//-rm是强制删除
    // 打印logo
    const spinner = ora("下载中...").start()
    try {
        await download('direct:https://github.com/namewyf/manager-fe.git#main', appName, { clone: true })
        spinner.succeed(`下载完成`)
        //当使用``模板字符串时，里面的内容不要有制表符
        log(`
下载完成，清执行下面命令启动项目：
================================
cd ${appName}
npm install
npm run dev
================================
            `)
    } catch (error) {
        log(`下载失败`)
        console.log(error)
        spinner.stop();
    }
}