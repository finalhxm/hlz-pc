///////////////////全局变量/////////////////////////
// 域名
var domain='http://localhost:8080';

// 对象形式
var obj = {
            "domain":"http://google.com",
            "domain2":"http://baidu.com"
        };

///////////////////全局方法/////////////////////////

//上传单张照片
function upload(event) {
    //闭包  这里只为使用 resolve,reject这两个函数
    var inner = function (resolve, reject) {
        let imgData = 'image/gif, image/jpeg, image/png, image/jpg';
        let img1 = event.target.files[0];
        let type = img1.type;//文件的类型，判断是否是图片
        let size = img1.size;//文件的大小，判断图片的大小
        if (imgData.indexOf(type) == -1) {
            alert('请选择我们支持的图片格式！');
            return false;
        }
        if (size > 3145728) {
            alert('请选择3M以内的图片！');
            return false;
        }
        let form = new FormData();
        form.append('file', img1, img1.name);
        var uploadUrl = domain + '/file/upload';
        axios.post(uploadUrl, form, {
            headers: {'Content-Type': 'multipart/form-data'}
        }).then(response => {
            let url = response.data.data;
            resolve(url);
        }).catch(error => {
            alert('上传图片出错！');
            reject('timeout i seconds.');
        })
    };
    return inner;
}


