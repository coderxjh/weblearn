const fs = require('fs');
let p = new Promise((resolve, reject) => {
    fs.readFile('./resource/content.txt', (err, data) => {
        //如果出错 则抛出错误
        if (err) reject(err);
        resolve(data);
    });
});
p.then(value => {
    console.log(value.toString());
}, reason => {
    console.log(reason);
});