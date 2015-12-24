$(document).ready(function(){
    $(document).attr('title','圣诞帽头像生成器');
    var loop=false;
    var width=$(document).width();
    var height=width;
    var bgimg=new Image();
    mzimg=new Image();
    mzimg.src='/images/demo/1.png';
    mz={
      x:0,
      y:0,
      w:0,
      h:0
    }
    mzimg=new Image();
    $('canvas').css('width',width+'px');
    $('canvas').css('height',width+'px');
    $('canvas').attr('width',width);
    $('canvas').attr('height',height);
    //
    canvas = document.getElementById('canvas');
    c = canvas.getContext('2d');
    //

    //
    $('#upload').on('change',function(){
      var img = new Image();
      var files = event.target.files || event.dataTransfer.files;
      var file = files[0];
      console.log(file);
      if (file) {
        var reader = new FileReader();
        reader.onload = function () {
          img.src = this.result;
          img.onload = function () {
            //
            loop=true;
            bgimg=this;
            //
          }
        }
        reader.readAsDataURL(file);
      }
    });
    //
    $('.mz').on("touchstart", function(){
      $(mzimg).attr('src',$(this).attr('src'));
      mz.w=100;
      mz.h=mz.w;
      mz.x=width/2;
      mz.y=height/2;
    })

    $('canvas').on('touchmove',function(){
      event.preventDefault();
      var touch = event.touches[0]; //获取第一个触点
      var x = Number(touch.pageX); //页面触点X坐标
      var y = Number(touch.pageY); //页面触点Y坐标
      wh=$('.single-slider').val();
      mz.x=x;
      mz.y=y;
      console.log(x);
    });

    $('.zd').on("touchstart", function(){
      mz.w+=1;
      mz.h+=1;
    })
    $('.sx').on("touchstart", function(){
      mz.w-=1;
      mz.h-=1;
    })
    //
    $('.single-slider').css('width',width*0.6+'px');
    $('.single-slider').jRange({
    		from: 0,
    		to: 100,
    		step: 1,
    		scale: [0,50,100],
    		format: '%s',
    		width: width*0.8,
    		showLabels: true,
    		showScale: true
    });

    //
    $('.save').on("touchstart", function(){
      var img64base = canvas.toDataURL();
      $('#face').attr('src',img64base);
      $('.save_pan').show();
      $('.make_pan').hide();
      $(document).attr('title','让你的头像添加一个圣诞帽');
    })
    $('.restart').on("touchstart", function(){
      $('.save_pan').hide();
      $('.make_pan').show();
    })

    //
    setInterval(function(){
      if(loop){
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.drawImage(bgimg,0, 0,width,height);
        wh=width*$('.single-slider').val()/100;
        c.drawImage(mzimg,mz.x-wh/2,mz.y-wh/2,wh,wh);
      }
    },100);

    //
  }
);
