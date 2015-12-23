(function($) {
    $.fn.mario = function() {

      var color=[
        [
          [],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#f00'],['#f00'],['#f00'],['#f00'],['#f00'],['#ccc'],['#ccc'],['#ccc']
        ],
        [
          [],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc']
        ],[
          [],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc']
        ],[
          [],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc']
        ],[
          [],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc']
        ],[
          [],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc']
        ],[
          [],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc']
        ],[
          [],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc']
        ],[
          [],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc']
        ],[
          [],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc']
        ],[
          [],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc']
        ],[
          [],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc']
        ],[
          [],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc']
        ],[
          [],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc']
        ],[
          [],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc']
        ],[
          [],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc'],['#ccc']
        ],
      ]

      $(this).css('width','120px');
      $(this).css('height','160px');
      for(var i=1;i<17;i++){
        for(var ii=1;ii<13;ii++){
          var block=$('<div>');
          block.css('width','10px');
          block.css('height','10px');
          block.css('background',color[i][ii]);
          block.attr('class','mario_block').attr('y',i).attr('x',ii).css('float','left').appendTo($(this));
        }
      }
    }
})(jQuery);
