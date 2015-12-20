var time=11;
var v=0;
var loop=false;
$('#canvas').hide();
function gameover(){
  $("#gameover").show();
  $('#canvas').hide();
  $(document).attr('title',"我10秒数了"+v+"张美元，平均数一张美元才用"+(10/v).toFixed(2)+"秒！");
  $("#clicknum").text(v);
  $("#clicks").text((v/10).toFixed(2));
  $("#sclick").text((10/v).toFixed(2));
}

function restart(){
  $("#gameover").hide();
  $("#gamestart").hide();
  $("#canvas").show();
  v=0;
  time=11;
  loop=true;
  $("#v").text(v);
}

$(document).ready(function(){
  $('.dollar').on('touchstart',function(){
    v+=1;
    $('#v').text(v);
    $(this).animate({top:"-100px",opacity:0},'300','swing',function(){
      $(this).hide();
    });

  });
  setInterval(function(){
      if(loop){
          time--;
          $("#time").html("剩余时间 <b>"+time+"</b> 秒");
          if(time<3){
              $("#time").css('color',"#f00");
          }else{
              $("#time").css('color',"blue");
          }
          if(time==0){
              loop=false;
              gameover();
          }
      }
  },1000);
});
