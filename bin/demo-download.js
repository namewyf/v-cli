let download = require('download-git-repo')
//这里Demo是
download('direct:https://github.com/namewyf/namewyf.git#main', 'Demo1', { clone: true }, function (err) {
    console.log(err ? err : 'Success')
})