var time=11;
var v=0;
var loop=false;
$('#canvas').hide();
function gameover(){
  $("#gameover").show();
  $('#canvas').hide();
  document.title="我20秒数了"+v+"张美元，平均数一张美元才用"+(21/v).toFixed(2)+"秒！";
  $("#clicknum").text(v);
  $("#clicks").text((v/21).toFixed(2));
  $("#sclick").text((21/v).toFixed(2));
}

function restart(){
  $("#gameover").hide();
  $("#gamestart").hide();
  $("#canvas").show();
  v=0;
  time=11;
  loop=true;
  //var left=parseInt((document.body.scrollWidth-280)/2);
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
