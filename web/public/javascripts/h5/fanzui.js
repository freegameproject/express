$(document).ready(function(){
  var msg=[
    '我是良民，我早就金盆洗手不进行国际偷渡的犯罪行为了',
    '我是贱民，放着良民不当，非要想进行国际偷渡的犯罪行为，真是吃了屎了。',
    '我是罪民，我一直进行国际偷渡的犯罪行为，从未停止。',
    '我是良民，我从未进行过国际偷渡的犯罪行为。'
  ];
  $('.a').click(function(){
    $('.btn').hide();
    $('.pic').attr('class','pic hide');
    $('#liangmin').attr('class','pic');
    $('.msg').text(msg[0]);
    $(document).attr('title',msg[0]);
  });
  $('.b').click(function(){
    $('.btn').hide();
    $('.pic').attr('class','pic hide');
    $('#jianmin').attr('class','pic');
    $('.msg').text(msg[1]);
    $(document).attr('title',msg[1]);
  });
  $('.c').click(function(){
    $('.btn').hide();
    $('.pic').attr('class','pic hide');
    $('#zuimin').attr('class','pic');
    $('.msg').text(msg[2]);
    $(document).attr('title',msg[2]);
  });
  $('.d').click(function(){
    $('.btn').hide();
    $('.pic').attr('class','pic hide');
    $('#liangmin').attr('class','pic');
    $('.msg').text(msg[3]);
    $(document).attr('title',msg[3]);
  });
});
