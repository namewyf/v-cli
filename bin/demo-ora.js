const ora = require('ora');

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
    spinner.color = 'yellow';//修改颜色
    spinner.text = 'Loading rainbows';//修改名字
    setTimeout(() => {
        spinner.stop();
    }, 1000);
}, 2000);