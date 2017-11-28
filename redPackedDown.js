(function (window) {
    function redPackDown(options) {
        var _this = this
        if (options) {
            _this.options = {
                container: options.container || '#container',
                timeLong:options.timeLong || 200,
                imgs: options.imgs || '',
                imgWidth: options.imgWidth || '80px',
                height: window.screen.height,
                width: window.screen.width
            }

        } else {
            return false
        }
        console.log(_this.options)
        _this.start()
    }

    redPackDown.prototype = {
        addImg: function () {
            var _this = this;
            if (!_this.options.imgs || _this.options.imgs.length === 0) {
                return
            }
            var container = document.querySelector(_this.options.container)
            var srcIndex = Math.floor(Math.random() * _this.options.imgs.length)
            var imgEle = document.createElement('img');
            imgEle.src = _this.options.imgs[srcIndex]
            imgEle.style.position = "fixed"

            imgEle.style.left = Math.random() * _this.options.width + 'px'
            console.log(imgEle.style.left)
            imgEle.style.top = Math.random() * -200 + 'px'
            imgEle.style.width=_this.options.imgWidth
            container.appendChild(imgEle)
            _this.down(imgEle)

        },
        down: function (el) {
            var _this = this;
            var container = document.querySelector(_this.options.container)
            var top = parseInt(el.style.top)
            var timer = setInterval(function () {
                if (top >= _this.options.height) {
                    container.removeChild(el)
                    clearInterval(timer)
                } else {
                    top=top+2;
                    el.style.top = top+ 'px'
                }
            }, 10);
        },
        start:function () {
            var start=0;
            var _this=this
            var interval=setInterval(function () {
                if(start>_this.options.timeLong){
                    clearInterval(interval)
                }else{
                    start+=10;
                    _this.addImg()
                }
            },200)
        }
    }

    window.RedPackedDown = redPackDown
})(window)