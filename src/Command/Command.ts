interface Command {

    execute(callback: Function): void;

    cancel(callback: Function): void;

}

class WalkCommand implements Command {
    private chara:Character;
    private x;
    private y;
    private path:TileNode[];

    constructor(chara:Character,x: number, y: number,path:TileNode[]) {
        this.x = x;
        this.y = y;
        this.chara=chara;
        this.path=path;
        
    }

    execute(callback: Function): void {
        // GameScene.getCurrentScene().moveTo(this.x, this.y, function () {
        //     callback();
        // })
        this.chara.move(this.x, this.y, this.path,function(){
            callback();
        });
    }

    cancel(callback: Function) {
        // GameScene.getCurrentScene().stopMove(function () {
        //     callback();
        // })
        this.chara.stopMove(function(){
            callback();
        })
    }
}

class FightCommand implements Command {
    /**
     * 所有的 Command 都需要有这个标记，应该如何封装处理这个问题呢？
     */
    private _hasBeenCancelled = false;

    execute(callback: Function): void {

        console.log("开始战斗")
        egret.setTimeout(() => {
            if (!this._hasBeenCancelled) {
                console.log("结束战斗")
                callback();
            }
        }, this, 500)
    }

    cancel(callback: Function) {
        console.log("脱离战斗")
        this._hasBeenCancelled = true;
        egret.setTimeout(function () {
            callback();
        }, this, 100)

    }
}

class TalkCommand implements Command {

    _npc:NPC

    constructor(npc:NPC){
        this._npc=npc;
    }

    execute(callback: Function): void {
        //console.log("打开对话框")
        for (var i = 0; i < TaskService.getInstance().taskList.length; i++) {
            switch (TaskService.getInstance().taskList[i].status) {
                case TaskStatus.ACCEPTABLE:
                    if (this._npc.state == false) {
                        var dialogPanel = new DialoguePanel(this._npc._chara);
                        this._npc.addChild(dialogPanel);
                        this._npc.state = true;
                        break;
                    } else if (this._npc.state == true) {
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
            console.log("结束对话")
            callback();
        }, this, 500)
    }

    cancel(callback: Function) {
        console.log("关闭对话框");
    }
}
