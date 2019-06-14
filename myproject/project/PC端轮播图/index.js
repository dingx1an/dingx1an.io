window.addEventListener('load', function () {
    var focus = document.querySelector('.focus');
    var arrowl = document.querySelector('.arrow-l');
    var arrowr = document.querySelector('.arrow-r');
    var ul = document.querySelector('ul');
    var imglis = ul.children;
    var ol = document.querySelector('ol');
    var focusWidth = focus.offsetWidth;

    //显示隐藏功能
    focus.addEventListener('mouseenter', function () {
        arrowl.style.display = 'block';
        arrowr.style.display = 'block';
        clearInterval(timer);
    })
    focus.addEventListener('mouseleave', function () {
        arrowl.style.display = 'none';
        arrowr.style.display = 'none';
        timer = setInterval(function () {
            arrowr.click();
        }, 1500)
    })

    //动态生成圆圈
    for (i = 0; i < imglis.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        //点击圆圈切换图片和圆圈样式
        li.addEventListener('click', function () {
            //排他思想设置小圆圈颜色
            for (i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';

            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul, -index * focusWidth);
        })
    }
    ol.children[0].className = 'current';

    //右按钮功能
    var num = 0;
    var circle = 0;
    var flag = true;
    var lastli = imglis[0].cloneNode(true);
    ul.appendChild(lastli);

    arrowr.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });

            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            for (i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';

        }

    })
    //左按钮功能
    arrowl.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                ul.style.left = -focusWidth * (ul.children.length - 1) + 'px';
                num = ul.children.length - 1;
            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            for (i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';

        }

    })
    //自动轮播定时器
    var timer = setInterval(function () {
        arrowr.click();
    }, 1500)


})