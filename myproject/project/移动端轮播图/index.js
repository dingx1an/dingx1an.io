window.addEventListener('load', function () {
    var focus = document.querySelector('.focus');
    var ul = document.querySelector('ul');
    var ol = document.querySelector('ol');
    var focusWidth = focus.offsetWidth;

    //1.自动播放功能
    var index = 0;
    var timer = setInterval(function () {
        index++;
        var x = -index * focusWidth;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + x + 'px)';
    }, 1500);
    //无缝滚动，判断条件在每次播放完成之后再检测，需要使用transitionend事件
    ul.addEventListener('transitionend', function () {
        //播放到最后一张或再往后时跳到图1
        if (index >= 3) {
            index = 0;
            //无过渡的跳到第一张，因此先去掉过渡
            ul.style.transition = 'none';
            //直接跳到第一张
            var x = -index * focusWidth;
            ul.style.transform = 'translateX(' + x + 'px)';

        }
        //如果拖动到最左边的图3(索引是负数),跳到索引是2的图3位置
        //---目前不会出现索引负数，等下面添加了手指滑动事件才有可能出现
        if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            var x = -index * focusWidth;
            ul.style.transform = 'translateX(' + x + 'px)';
        }



        // 2.小圆点跟随变化功能
        // 也要写在transitionend里面，因为是每次滚动完一张小圆点发生变化
        // 选出带current类名的圆点，去掉类名
        ol.querySelector('.current').classList.remove('current');
        //滚动到的那一张（即index）的小圆圈加上类名  
        //小圆圈索引是0-2 index在这里的取值也被限制为0-2
        ol.children[index].classList.add('current');
        //可以加上过渡效果更美观，在css里设置
    });

    //3.手指滑动功能
    var startX = 0; //手指初始坐标
    var moveX = 0; //手指移动距离
    var flag = false; //判断手指是否移动的变量
    ul.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX;
        //手指触摸停止定时器
        clearInterval(timer);
    });
    ul.addEventListener('touchmove', function (e) {
        moveX = e.targetTouches[0].pageX - startX;

        //移动ul:  ul原来位置+移动距离
        var x = -index * focusWidth + moveX;
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + x + 'px)';

        //手指移动过，设flag为true
        flag = true;

    });
    //判断滑动完播放哪一张图片
    ul.addEventListener('touchend', function (e) {
        //用户有可能只是单击后松手，也会触发touchend事件，但是此时没有移动，判断moveX没有意义，所以设置flag判断用户是否移动了手指，如果移动了再判断moveX
        if (flag) {
            //移动超过50像素，就切换图片
            if (Math.abs(moveX) > 50) {
                // 右划播放上一张，左滑播放下一张
                if (moveX > 0) {
                    index--;
                } else if (moveX < 0) {
                    index++;
                }
                //判断完后移动距离
                var x = -index * focusWidth;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + x + 'px)';
            } else {
                //不超过50像素，回弹到原来位置
                var x = -index * focusWidth;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + x + 'px)';
            }

        }
        //手指离开重新开始定时器，先清除，保证只有一个定时器
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            var x = -index * focusWidth;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + x + 'px)';
        }, 1500);

    })


})