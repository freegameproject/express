$(document).ready(function() {
    $('.summernote').summernote({
        height: 300,                 // set editor height

        minHeight: null,             // set minimum height of editor
        maxHeight: null,             // set maximum height of editor

        focus: true                // set focus to editable area after initializing summernote
    });
    $('.add_blog').click(function(){
        var html=$('.note-editable').html();
        $.post('/add_blog',{
            title:$('input[name="title"]').val(),
            text:html
        },function(d){
            console.dir(d);
            alert("已发布");
            $('input[name="title"]').val("");
            $('.note-editable').html("");
        });
    });
});
