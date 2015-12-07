$(document).ready(function () {
    $('#summernote').summernote({
        height: 300,                 // set editor height
        minHeight: null,             // set minimum height of editor
        maxHeight: null,             // set maximum height of editor
        focus: true, // set focus to editable area after initializing summernote
        airMode: true,
        toolbar: [
            //[groupname, [button list]]

            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough', 'superscript', 'subscript']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
        ],
        airPopover: [
            ['color', ['color']],
            ['font', ['bold', 'underline', 'clear']],
            ['para', ['ul', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link']]//['insert', ['link', 'picture']]
        ]
    });
    $('.add_blog').click(function () {
        var html = $('.note-editable').html();
        $('#addbloging').show();
        $('#add_blog').hide();
        $.post('/edit/'+$('#id').val(), {
            title: $('input[name="title"]').val(),
            text: html
        }, function (d) {
            console.dir(d);
            if(d.state==='ok'){
                window.location.href= d.url;
            }else{
                //错误信息
                alert(d.msg);
            }
        });
    });

    $('#write').click(function () {
        $('#msg').hide();
        $('#add_blog').show();
    });
    $('#addbloging').hide();
    $('#msg').hide();


    $('#summernote').on('summernote.enter', function (customEvent, nativeEvent) {
        console.log('Enter/Return key pressed');
    });
    $('#summernote').on('summernote.image.upload', function (customEvent, files) {
        console.log('image upload:', files);
    });

    function insertImage(imgUrl) {
        $("#summernote").summernote("insertImage", imgUrl, '');
    }

    $('#upimg').on('change', function () {
        var data = new FormData();
        var files = $("#upimg")[0].files;
        if (files) {
            for (i = 0; i < files.length; i++) {
                console.log(files[i]);
                data.append("file_" + i, files[i]);
            }
        }
        $('.admin_add_blog_add_img').text('正在上传中...');
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: '/uploadimg',
            data: data,
            contentType: false,
            processData: false,
            success: function (d) {
                console.log(d);
                for (v in d) {
                    insertImage(document.location.href.split('edit/')[0] + 'upload/' + d[v]);
                    $('#upimg').val('');
                    $('.admin_add_blog_add_img').text('上传图片（支持多文件上传）');
                }
            }
        });
    });
});
