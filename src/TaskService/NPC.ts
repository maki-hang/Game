class NPC extends egret.DisplayObjectContainer implements Observer {
    public _emoji: egret.Bitmap = new egret.Bitmap;
    private _id: string;
    public _chara: egret.Bitmap = new egret.Bitmap;

    state: boolean = false;
    _main: Main;
    constructor(id: string, x: number, y: number, texture: string,main:Main) {
        super();
        this._main = main;
        this._id = id;
        // this.x=x;
        // this.y=y;
        this._chara.x = x;
        this._chara.y = y
        this._chara.texture = RES.getRes(texture);

        this._emoji.x = x;
        this._emoji.y = y - 40;
        this._emoji.scaleX = 2;
        this._emoji.scaleY = 2;
        this._emoji.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNPCClick, this);
        this._chara.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNPCClick, this);
        for (var i = 0; i < TaskService.getInstance().taskList.length; i++) {
            if (this._id == TaskService.getInstance().taskList[i].fromNPCId) {
                this._emoji.texture = RES.getRes("ytanhao_png");
                console.log("emoji")
            }
        }
        this._emoji.touchEnabled = true;
        this._chara.touchEnabled = true;
        console.log("npc");
        this.addChild(this._chara);
        this.addChild(this._emoji);

        TaskService.addObserver(this);


    }

    private onNPCClick(e: egret.TouchEvent) {
        var startx: number = Math.floor((GameScene.chara._body.x) / 100);
        var starty: number = Math.floor(GameScene.chara._body.y / 100);
        var endx: number = Math.floor(e.stageX / 100);
        var endy: number = Math.floor(e.stageY / 100);
        var path: TileNode[] = GameScene.map.astarPath(startx - 1, starty, endx, endy);
        this._main.list.addCommand(new WalkCommand(GameScene.chara, e.localX, e.localY, path));
        //console.log(endx);
        this._main.list.addCommand(new TalkCommand(this));
        this._main.list.execute();

        // for (var i = 0; i < TaskService.getInstance().taskList.length; i++) {
        //     switch (TaskService.getInstance().taskList[i].status) {
        //         case TaskStatus.ACCEPTABLE:
        //             if (this.state == false) {
        //                 var dialogPanel = new DialoguePanel(this._chara);
        //                 this.addChild(dialogPanel);
        //                 this.state = true;
        //                 break;
        //             } else if (this.state == true) {
        //                 break;
        //             }
        //         case TaskStatus.DURING:
        //             this._emoji.texture = RES.getRes("ywenhao_png");
        //             TaskService.getInstance().taskList[i].status = TaskStatus.CAN_SUMBIT;
        //             break;
        //     }
        // }
        // console.log(TaskService.getInstance().taskList[0].status);
        ////////////////////////////////////////////////////////////////放到command里了
    }
    public onChange(task: Task) {
        switch (task.status) {
            case TaskStatus.ACCEPTABLE:
                //useless
                break;
            case TaskStatus.DURING:
                this._emoji.texture = RES.getRes("gwenhao_png");
                break;
            case TaskStatus.CAN_SUMBIT:
                //useless
                break;
            case TaskStatus.SUBMITTED || TaskStatus.UNACCEPTABLE:
                this._emoji.texture = RES.getRes(null);
                break;
        }
        // if (task.status == TaskStatus.ACCEPTABLE) {
        //     this._emoji.texture = RES.getRes("ytanhao_png");
        // }
        // if (task.status == TaskStatus.DURING) {
        //     this._emoji.texture = RES.getRes("gwenhao_png");
        // }
        // if (task.status == TaskStatus.CAN_SUMBIT) {
        //     this._emoji.texture = RES.getRes("ywenhao_png");
        // }
        // if (task.status == TaskStatus.SUBMITTED||task.status == TaskStatus.UNACCEPTABLE) {
        //     this._emoji.texture = RES.getRes(null);
        // }

    }
}