var map = [];

var obj_map = [1, 2, 3, 4, 5, 6, 7, 8, 0];
var at_map = [11, 12, 13, 21, 22, 23, 31, 32, 33];

var s=0;
function start() {

    s=0;

    var random_at_map = at_map.sort(function (x, y) {
        return Math.random() > 0.5 ? -1 : 1
    });

    var random_obj_map = obj_map.sort(function (x, y) {
        return Math.random() > 0.5 ? -1 : 1
    });



    map[11] = random_obj_map[0];
    map[12] = random_obj_map[1];
    map[13] = random_obj_map[2];

    map[21] = random_obj_map[3];
    map[22] = random_obj_map[4];
    map[23] = random_obj_map[5];

    map[31] = random_obj_map[6];
    map[32] = random_obj_map[7];
    map[33] = random_obj_map[8];





    if (random_obj_map[0] != 0) {
        document.querySelector('#obj_'+map[11]).innerHTML = '<img src="/images/h5/pintu_0'+random_obj_map[0]+'.png" width="100%" height="100%" />';
        document.querySelector('#obj_'+map[11]).setAttribute('at','map_11');
    }
    if (random_obj_map[1] != 0) {
        document.querySelector('#obj_'+map[12]).innerHTML = '<img src="/images/h5/pintu_0'+random_obj_map[1]+'.png" width="100%" height="100%" />';
        document.querySelector('#obj_'+map[12]).setAttribute('at','map_12');

    }
    if (random_obj_map[2] != 0) {
        document.querySelector('#obj_'+map[13]).innerHTML = '<img src="/images/h5/pintu_0'+random_obj_map[2]+'.png" width="100%" height="100%" />';
        document.querySelector('#obj_'+map[13]).setAttribute('at','map_13');

    }
    if (random_obj_map[3] != 0) {
        document.querySelector('#obj_'+map[21]).innerHTML = '<img src="/images/h5/pintu_0'+random_obj_map[3]+'.png" width="100%" height="100%" />';
        document.querySelector('#obj_'+map[21]).setAttribute('at','map_21');

    }
    if (random_obj_map[4] != 0) {
        document.querySelector('#obj_'+map[22]).innerHTML = '<img src="/images/h5/pintu_0'+random_obj_map[4]+'.png" width="100%" height="100%" />';
        document.querySelector('#obj_'+map[22]).setAttribute('at','map_22');

    }
    if (random_obj_map[5] != 0) {
        document.querySelector('#obj_'+map[23]).innerHTML = '<img src="/images/h5/pintu_0'+random_obj_map[5]+'.png" width="100%" height="100%" />';
        document.querySelector('#obj_'+map[23]).setAttribute('at','map_23');

    }
    if (random_obj_map[6] != 0) {
        document.querySelector('#obj_'+map[31]).innerHTML = '<img src="/images/h5/pintu_0'+random_obj_map[6]+'.png" width="100%" height="100%" />';
        document.querySelector('#obj_'+map[31]).setAttribute('at','map_31');

    }
    if (random_obj_map[7] != 0) {
        document.querySelector('#obj_'+map[32]).innerHTML = '<img src="/images/h5/pintu_0'+random_obj_map[7]+'.png" width="100%" height="100%" />';
        document.querySelector('#obj_'+map[32]).setAttribute('at','map_32');

    }
    if (random_obj_map[8] != 0) {
        document.querySelector('#obj_'+map[33]).innerHTML = '<img src="/images/h5/pintu_0'+random_obj_map[8]+'.png" width="100%" height="100%" />';
        document.querySelector('#obj_'+map[33]).setAttribute('at','map_33');

    }

    setInterval(function () {
      s+=1;
    }, 1000);
}


function left() {
    check();
}
function right() {
    check();
}
function up() {

    var from = 0;
    var to = 0;
    var obj = '';


    if (map[11] == 0) {
        from = 21;
        to = 11;
    }

    else if (map[12] == 0) {
        from = 22;
        to = 12;
    }

    else if (map[13] == 0) {
        from = 23;
        to = 13;
    }

    else if (map[21] == 0) {
        from = 31;
        to = 21;
    }

    else if (map[22] == 0) {
        from = 32;
        to = 22;
    }

    else if (map[23] == 0) {
        from = 33;
        to = 23;
    }

    move(from, to);


    check();
}
function down() {

    var from = 0;
    var to = 0;
    var obj = '';


    if (map[31] == 0) {
        from = 21;
        to = 31;
    }

    else if (map[32] == 0) {
        from = 22;
        to = 32;
    }

    else if (map[33] == 0) {
        from = 23;
        to = 33;
    }

    else if (map[21] == 0) {
        from = 11;
        to = 21;
    }

    else if (map[22] == 0) {
        from = 12;
        to = 22;
    }

    else if (map[23] == 0) {
        from = 13;
        to = 23;
    }

    move(from, to);

    check();
}

function left() {
    var from = 0;
    var to = 0;
    var obj = '';


    if (map[11] == 0) {
        from = 12;
        to = 11;
    }

    else if (map[12] == 0) {
        from = 13;
        to = 12;
    }

    else if (map[21] == 0) {
        from = 22;
        to = 21;
    }

    else if (map[22] == 0) {
        from = 23;
        to = 22;
    }

    else if (map[31] == 0) {
        from = 32;
        to = 31;
    }

    else if (map[32] == 0) {
        from = 33;
        to = 32;
    }

    move(from, to);
    check();
}

function right() {

    var from = 0;
    var to = 0;
    var obj = '';


    if (map[12] == 0) {
        from = 11;
        to = 12;
    }

    else if (map[13] == 0) {
        from = 12;
        to = 13;
    }

    else if (map[22] == 0) {
        from = 21;
        to = 22;
    }

    else if (map[23] == 0) {
        from = 22;
        to = 23;
    }

    else if (map[32] == 0) {
        from = 31;
        to = 32;
    }

    else if (map[33] == 0) {
        from = 32;
        to = 33;
    }

    move(from, to);
    check();
}

function move(from, to) {
    if (to != 0 && from!=0) {
        var obj=document.querySelector('.obj[at=map_' + from + ']');
        map[to] = parseInt(obj.getAttribute('id').replace('obj_', ''));
        obj.setAttribute('at', 'map_' + to);
        map[from] = 0;
    }
}

function check() {

    if (map[11] === 1 && map[12] === 2 && map[13] === 3 && map[21] === 4 && map[22] === 5 && map[23] === 6 && map[31] === 7 && map[32] === 8 && map[33] === 0) {

        setTimeout(function(){
            success();
        },350);

    } else {
        unsuccess();
    }
}

function success() {
    console.log('ok');
    document.title='我用'+s+'秒完成了这个拼图！你也来试试吧！'
    alert('恭喜你！你赢了，分享到朋友圈吧。');

}

function unsuccess() {
    //console.log('no');
}


document.addEventListener('touchstart', function () {
    event.preventDefault();
    var touch = event.touches[0]; //获取第一个触点
    start_x = Number(touch.pageX); //页面触点X坐标
    start_y = Number(touch.pageY); //页面触点Y坐标
});
document.addEventListener('touchmove', function () {
    event.preventDefault();
    var touch = event.touches[0]; //获取第一个触点
    end_x = Number(touch.pageX); //页面触点X坐标
    end_y = Number(touch.pageY); //页面触点Y坐标
});


document.addEventListener('touchend', function () {
    event.preventDefault();

    var zy = start_x - end_x;//左右
    var sx = start_y - end_y;//上下

    if (Math.abs(zy) > Math.abs(sx)) {
        //zy
        if (zy > 0) {
            left();
        }
        if (zy < 0) {
            right();
        }

    }

    if (Math.abs(zy) < Math.abs(sx)) {
        //sx
        if (sx > 0) {
            up();
        }
        if (sx < 0) {
            down();
        }
    }


});


start();
