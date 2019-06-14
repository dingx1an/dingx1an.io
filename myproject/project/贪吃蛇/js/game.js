;
(function () {
    var that;

    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }
    Game.prototype.start = function () {
        this.food.render(this.map);
        moveSnake(this.food, this.map);
        bindKey();

    }
    window.Game = Game;

    //2.绑定键盘事件
    function bindKey() {
        document.addEventListener('keydown', function (e) {
            switch (e.keyCode) {
                case 37:
                    that.snake.direction = 'left';
                    break;
                case 38:
                    that.snake.direction = 'top';
                    break;
                case 39:
                    that.snake.direction = 'right';
                    break;
                case 40:
                    that.snake.direction = 'bottom';
                    break;
            }
        })
    }

    //1.移动蛇的私有函数
    var btn = document.querySelector('button');

    function moveSnake(food, map) {
        var timer = setInterval(function () {

            that.snake.move(food, map);
            that.snake.render(that.map);
            //判断是否越界
            var headX = that.snake.body[0]
            if (that.snake.body[0].x < 0 || that.snake.body[0].x >= that.map.offsetWidth / that.snake.width) {
                clearInterval(timer);
                alert("你因撞墙而死o(╥﹏╥)o");
                btn.style.display = 'block';

            }
            if (that.snake.body[0].y < 0 || that.snake.body[0].y >= that.map.offsetHeight / that.snake.height) {
                clearInterval(timer);
                alert("你因撞墙而死o(╥﹏╥)o");
                btn.style.display = 'block';
            }
            //判断是否撞到自己
            for (i = that.snake.body.length - 1; i >= 1; i--) {
                var body = that.snake.body;
                if (body[i].x == that.snake.body[0].x && body[i].y == that.snake.body[0].y) {
                    clearInterval(timer);
                    alert("你因为咬到自己而死o(╥﹏╥)o");
                    btn.style.display = 'block';
                }
            }
        }, 100)

    }
    btn.addEventListener('click', function () {
        var game = new Game(map);
        game.start();
        btn.style.display = 'none';
    })
})()

//测试代码
var map = document.querySelector('#map');
var game = new Game(map);

game.start();