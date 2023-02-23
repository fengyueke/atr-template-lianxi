$(function() {
    $.get("http://www.liulongbin.top:3006/api/news",
        function(res) {
            if (res.status != 200) {
                alert('获取评论列表失败');
            }
            $.each(res.data, function(i, ele) {
                res.data[i].tags = res.data[i].tags.split(',');
            });
            var data = template('tpl-list', res);
            $('#news-list').html(data);
            console.log(res.data);
        }
    );
    // 处理时间格式

    template.defaults.imports.dataFormat = function(data) {
        var date = new Date(data);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = addZore(m);
        var d = date.getDay();
        d = addZore(d);
        var h = date.getHours();
        h = addZore(h);
        var mm = date.getMilliseconds();
        mm = addZore(mm);
        var s = date.getSeconds();
        s = addZore(s);
        return y + '-' + m + '-' + d + ' ' + h + ':' + mm + ':' + s;
    }

    function addZore(n) {
        return n >= 10 ? n : '0' + n;
    }
})