;
(function () {
    var position = "absolute";
    var snakearr = [];

    function Snake(options) {
        options = options || {};
        //蛇节的大小
        this.width = options.width || 20;
        this.height = options.height || 20;
        //蛇移动方向
        this.direction = options.direction || 'right'
        //蛇身体的参数
        this.body = [{
            x: 3,
            y: 2,
            bg: '0 0 url(images/head2.png) no-repeat',
        }, {
            x: 2,
            y: 2,
            bg: '0 0 url(images/body.png) no-repeat',
        }, {
            x: 1,
            y: 2,
            bg: '0 0 url(images/body.png) no-repeat',
        }]
    }

    //渲染方法
    Snake.prototype.render = function (map) {
        remove();
        // 把每一个蛇节渲染到地图上
        for (var i = 0, len = this.body.length; i < len; i++) {
            // 获取蛇节参数
            var object = this.body[i];
            // 创建当前蛇节
            var div = document.createElement('div');
            map.appendChild(div);
            //记录当前蛇节
            snakearr.push(div);
            // 设置样式
            div.style.position = position;
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.left = object.x * this.width + 'px';
            div.style.top = object.y * this.height + 'px';
            div.style.background = object.bg;
            div.style.backgroundSize = 'contain';
        }
    }
    //移动方法
    var score = 0;
    var span = document.querySelector('span');
    span.innerHTML = score;
    Snake.prototype.move = function (food, map) {

        //蛇节移动到上一个蛇节的位置
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //蛇头根据方向移动
        switch (this.direction) {
            case 'right':
                this.body[0].x += 1;
                break;
            case 'left':
                this.body[0].x -= 1;
                break;
            case 'top':
                this.body[0].y -= 1;
                break;
            case 'bottom':
                this.body[0].y += 1;
                break;

        }

        //蛇吃到食物的处理
        if (this.body[0].x * this.width === food.x && this.body[0].y * this.width === food.y) {
            food.render(map);
            score += 1;
            span.innerHTML = score;
            var last = {
                x: this.body[this.body.length - 1].x,
                y: this.body[this.body.length - 1].y,
                bg: this.body[this.body.length - 1].bg
            }

           this.body.push({
               x: last.x,
               y: last.y,
               bg: last.bg
           })

        }
    }
    //删除原来的蛇方法
    function remove() {
        for (i = snakearr.length - 1; i >= 0; i--) {
            snakearr[i].parentNode.removeChild(snakearr[i]);
            snakearr.splice(i, 1);
        }
    }
    // 暴露构造函数给外部
    window.Snake = Snake;
})()
//测试代码
// var snake = new Snake();
// var map = document.querySelector('#map')
// snake.render(map);