window.onload = function()
{
    if(Kernal.isLogin()){
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });
    // TODO: 在此为 top-right 元素设置监听器
    // document.getElementById('top-right') ...
    document.getElementById('top-right').addEventListener('click', function() {
        clickLogin();
    });

    document.addEventListener('keydown', function(event)
    {
        if(event.keyCode == 13)
        {
            // search();
            jump();
        }
    })

}

function jump()
{
    var inp = document.getElementsByTagName('input');

    if(inp[0].value.length === 0)
    {
        alert('请输入搜索内容');
    }
    else
    {   
        // window.location.href='https://www.baidu.com/s?ie=UTF-8&wd=' + inp[0].value;
        window.open('https://www.baidu.com/s?ie=UTF-8&wd=' + inp[0].value);
        // alert(inp[0].value);
    }
}

function search() {
    // TODO: 搜索触发后的行为
    var inp = document.getElementsByTagName('input');

    if(inp[0].value.length === 0)
    {
        alert('请输入搜索内容');
    }
    else
    {   
        alert(inp[0].value);
    }
    // console.log('');
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug，另外注意图片路径是否正确
    // var username = Kernal.getUserName();
    // var content = '<div id="user">\
    //                     <span id="user-img">\
    //                         <img src="img/user.jpg" />\
    //                     </span>\
    //                     <span id="name">' + username + '</span>\
    //                 </div>';
    // document.getElementById('top-right').innerHTML = content;

    var username = Kernal.getUserName();
    var content = '<div id="user">\
                        <span id="user-img">\
                            <img src="img/user.jpg" />\
                        </span>\
                        <span id="name">' + '</span>\
                    </div>';
    // var top_right = document.getElementById('top-right');
    // top_right.innerHTML = content;
    document.getElementById('top-right').innerHTML = content;
    var span = document.querySelector('#name');
    span.textContent = username;
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}