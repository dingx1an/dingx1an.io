;(function () {
    var position = "absolute";
    var foodarr = [];

    function Food(options) {
        options = options || {};
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.color = options.color || 'lightgreen';
        this.width = options.width || 20;
        this.height = options.height || 20;
    }
    Food.prototype.render = function (map) {
        //每次渲染先删除之前的食物
        remove();
        var div = document.createElement('div');
        map.appendChild(div)
        //渲染后添加到数组里
        foodarr.push(div);
        //设置食物盒子样式
        this.x = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
        this.y = Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height;
        div.style.position = position;
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
        div.style.background = "0 0 url(images/food.png) no-repeat";
        div.style.backgroundSize = "contain";
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
    }

    //删除食物函数
    function remove() {
        // 遍历数组 数组里存放的是每一个食物div 从后遍历
        for (i = foodarr.length - 1; i >= 0; i--) {
            //先删除当前的div
            foodarr[i].parentNode.removeChild(foodarr[i]);
            //再删除数组中的元素
            foodarr.splice(i, 1);
        }

    }
    window.Food = Food;
})()



//测试代码
// var food = new Food();
// var map = document.querySelector('#map')
// food.render(map);