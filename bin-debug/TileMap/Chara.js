var Character = (function (_super) {
    __extends(Character, _super);
    function Character(main) {
        _super.call(this);
        this._idleState = new CharacterIdleState(this);
        this._moveState = new CharacterMoveState(this);
        this._main = main;
        this._body = new egret.Bitmap;
        this._body.texture = RES.getRes("chara1_png");
        this._main.addChild(this._body);
        this._body.width = 100;
        this._body.height = 100;
        this._body.anchorOffsetX = this._body.width * 1;
        console.log("anchorx :" + this._body.anchorOffsetX);
        this._body.anchorOffsetY = this._body.height * 0;
        this._stateMachine = new StateMachine();
        this._body.x = this._main.stage.stageWidth * 0.1;
        this._body.y = this._main.stage.stageHeight * 0.9;
        console.log(this._body.x);
        this._ifidle = true;
        this._ifmove = false;
    }
    var d = __define,c=Character,p=c.prototype;
    p.stopMove = function (callback) {
        this.idle(); //not complete
        callback();
    };
    p.move = function (targetX, targetY, path, callback) {
        //中止缓动动画，达到实现运动中更换目标点的目的
        egret.Tween.removeTweens(this._body);
        //触发状态机
        this._stateMachine.setState(this._moveState);
        //如果状态机将_ifwalk变量调整为true,则进入运动状态
        if (this._ifmove) {
            console.log("move");
            if (targetX > this._body.x) {
                this._body.skewY = 0;
            }
            else {
            }
            this.startMove();
            //用Timer来实现固定间隔顺序读取路径数组中的点并移动
            var interval = 500;
            var timer = new egret.Timer(interval, path.length - 1);
            timer.addEventListener(egret.TimerEvent.TIMER, function (e) {
                egret.Tween.get(this._body).to({ x: (path[timer.currentCount].x + 1) * 100, y: (path[timer.currentCount].y) * 100 }, 500);
                console.log("target:" + path[timer.currentCount - 1].x + " , " + path[timer.currentCount - 1].y);
            }, this);
            timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function (e) {
                this.idle();
                callback(); ////////////////////////////
            }, this);
            timer.start();
            console.log(path.length);
        }
    };
    p.idle = function () {
        this._stateMachine.setState(this._idleState);
        //如果状态机将_ifidle变量调整为true,则进入停止状态
        if (this._ifidle) {
            console.log("idle");
            this.startidle();
        }
    };
    //播放运动动画
    p.startMove = function () {
        var _this = this;
        var list = ["chara1_png", "chara2_png", "chara3_png", "chara4_png", "chara5_png",
            "chara6_png", "chara7_png", "chara8_png", "chara9_png", "chara10_png", "chara11_png",
            "chara12_png", "chara13_png", "chara14_png", "chara15_png", "chara16_png", "chara17_png",
            "chara18_png", "chara19_png", "chara20_png", "chara21_png", "chara22_png", "chara23_png",
            "chara24_png", "chara25_png", "chara26_png"];
        var count = -1;
        //this._body.texture = RES.getRes("3_png");
        //循环执行
        egret.Ticker.getInstance().register(function () {
            if (_this._ifmove) {
                count = count + 0.5;
                if (count >= list.length) {
                    count = 0;
                }
                _this._body.texture = RES.getRes(list[Math.floor(count)]);
            }
        }, this);
    };
    p.startidle = function () {
        this._body.texture = RES.getRes("chara1_png");
    };
    return Character;
}(egret.DisplayObjectContainer));
egret.registerClass(Character,'Character');
//# sourceMappingURL=Chara.js.map