///////////////////全局变量 start///////////////////////
// 域名
var domain='http://localhost:8080';

// 对象形式
var obj = {
            "domain":"http://google.com",
            "domain2":"http://baidu.com"
        };
///////////////////全局变量 end/////////////////////////
///////////////////全局方法 start///////////////////////

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

///////////////////全局方法 end///////////////////////

///////////////////全局组件 start/////////////////////
//水平线
Vue.component('my-hr',{
    template:`<hr class="my-hr">`
});
//侧边栏
var vm=new Vue({
    el:'#aside',
    components:{
        'my-aside':{
            template:
            `<div>
                <div class="profile">
                    <img class="avatar" src="../uploads/avatar.jpg">
                    <h3 class="name">布头儿</h3>
                </div>
                <ul class="nav">
                    <!--<li>-->
                        <!--<a href="index.html"><i class="fa fa-dashboard"></i>仪表盘</a>-->
                    <!--</li>-->
                    <li class="active">
                        <a href="#menu-posts" data-toggle="collapse">
                            <i class="fa fa-thumb-tack"></i>文章<i class="fa fa-angle-right"></i>
                        </a>
                        <ul id="menu-posts" class="collapse in">
                            <li><a href="articleList.html">所有文章</a></li>
                            <li class="active"><a href="articleAdd.html">写文章</a></li>
                            <li><a href="articleType.html">文章分类</a></li>
                        </ul>
                    </li>
                    <!--<li>-->
                        <!--<a href="comments.html"><i class="fa fa-comments"></i>评论</a>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<a href="users.html"><i class="fa fa-users"></i>用户</a>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<a href="#menu-settings" class="collapsed" data-toggle="collapse">-->
                            <!--<i class="fa fa-cogs"></i>设置<i class="fa fa-angle-right"></i>-->
                        <!--</a>-->
                        <!--<ul id="menu-settings" class="collapse">-->
                            <!--<li><a href="nav-menus.html">导航菜单</a></li>-->
                            <!--<li><a href="slides.html">图片轮播</a></li>-->
                            <!--<li><a href="settings.html">网站设置</a></li>-->
                        <!--</ul>-->
                    <!--</li>-->
                </ul>
            </div>`
        }
    }
});
//侧边栏

///////////////////全局组件 end///////////////////////

