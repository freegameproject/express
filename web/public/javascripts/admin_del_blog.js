$(document).ready(function () {

    $('.btn').click(function(){
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: '/del/'+$(this).attr('id'),
            data: {},
            contentType: false,
            processData: false,
            success: function (d) {
                console.log(d);
                window.location.href=document.location.href.split('del')[0];
            }
        });
    });

    /*
    var vm = new Vue({
        el: '.btn',
        data: {

        },
        // 在 `methods` 对象中定义方法
        methods: {
            del: function (event) {
                alert(event.target.tagName)
            }
        }
    })
    */
});


