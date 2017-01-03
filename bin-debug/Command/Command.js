var WalkCommand = (function () {
    function WalkCommand(chara, x, y, path) {
        this.x = x;
        this.y = y;
        this.chara = chara;
        this.path = path;
    }
    var d = __define,c=WalkCommand,p=c.prototype;
    p.execute = function (callback) {
        // GameScene.getCurrentScene().moveTo(this.x, this.y, function () {
        //     callback();
        // })
        this.chara.move(this.x, this.y, this.path, function () {
            callback();
        });
    };
    p.cancel = function (callback) {
        // GameScene.getCurrentScene().stopMove(function () {
        //     callback();
        // })
        this.chara.stopMove(function () {
            callback();
        });
    };
    return WalkCommand;
}());
egret.registerClass(WalkCommand,'WalkCommand',["Command"]);
var FightCommand = (function () {
    function FightCommand() {
        /**
         * 所有的 Command 都需要有这个标记，应该如何封装处理这个问题呢？
         */
        this._hasBeenCancelled = false;
    }
    var d = __define,c=FightCommand,p=c.prototype;
    p.execute = function (callback) {
        var _this = this;
        console.log("开始战斗");
        egret.setTimeout(function () {
            if (!_this._hasBeenCancelled) {
                console.log("结束战斗");
                callback();
            }
        }, this, 500);
    };
    p.cancel = function (callback) {
        console.log("脱离战斗");
        this._hasBeenCancelled = true;
        egret.setTimeout(function () {
            callback();
        }, this, 100);
    };
    return FightCommand;
}());
egret.registerClass(FightCommand,'FightCommand',["Command"]);
var TalkCommand = (function () {
    function TalkCommand(npc) {
        this._npc = npc;
    }
    var d = __define,c=TalkCommand,p=c.prototype;
    p.execute = function (callback) {
        //console.log("打开对话框")
        for (var i = 0; i < TaskService.getInstance().taskList.length; i++) {
            switch (TaskService.getInstance().taskList[i].status) {
                case TaskStatus.ACCEPTABLE:
                    if (this._npc.state == false) {
                        var dialogPanel = new DialoguePanel(this._npc._chara);
                        this._npc.addChild(dialogPanel);
                        this._npc.state = true;
                        break;
                    }
                    else if (this._npc.state == true) {
                        break;
                    }
                case TaskStatus.DURING:
                    this._npc._emoji.texture = RES.getRes("ywenhao_png");
                    TaskService.getInstance().taskList[i].status = TaskStatus.CAN_SUMBIT;
                    break;
            }
        }
        console.log(TaskService.getInstance().taskList[0].status);
        egret.setTimeout(function () {
            console.log("结束对话");
            callback();
        }, this, 500);
    };
    p.cancel = function (callback) {
        console.log("关闭对话框");
    };
    return TalkCommand;
}());
egret.registerClass(TalkCommand,'TalkCommand',["Command"]);
//# sourceMappingURL=Command.js.map