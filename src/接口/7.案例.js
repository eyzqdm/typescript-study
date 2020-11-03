function http(options) {

    let options = Object.assign({ // 对象合并 用于默认值处理
        method: 'get',
        url: '',
        isAsync: true
    }, options);

    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(options.method, options.url, options.isAsync);

        xhr.onload = function() {
            resolve( JSON.parse(xhr.responseText) );
        }

        xhr.onerror = function() {
            reject({
                code: xhr.response.code,
                message: '出错了'
            });
        }

        xhr.send();
    })
}


http({
    methods: 'get', //methods字段写错了 但不会报错 只有在执行时才会出错
    url: '....',
    isAsync: true
});

http({
    methods: 'post',
    url: '....',
    isAsync: true
});