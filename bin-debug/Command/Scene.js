var GameScene = (function () {
    function GameScene(type, main) {
        //super();
        switch (type) {
            case "MainScene":
                GameScene.map = new doMap();
                main.addChild(GameScene.map);
                GameScene.chara = new Character(main);
                main.addChild(GameScene.chara);
                GameScene.chara.idle();
                main.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                    var startx = Math.floor((GameScene.chara._body.x) / 100);
                    var starty = Math.floor(GameScene.chara._body.y / 100);
                    var endx = Math.floor(e.localX / 100);
                    var endy = Math.floor(e.localY / 100);
                    var path = GameScene.map.astarPath(startx - 1, starty, endx, endy);
                    //console.log(endx);
                    if (path.length > 0) {
                        //chara.move(e.localX, e.localY, path);
                        main.list.addCommand(new WalkCommand(GameScene.chara, e.localX, e.localY, path));
                        main.list.execute();
                    }
                }, this);
                //main.stage.touchEnabled=true;
                /////////////////////////////////////////////////////////////////
                var taskList = new Array();
                taskList[0] = new Task("0", "对话任务", TaskStatus.ACCEPTABLE, "desc", "npc_0", "npc_1", new NPCTalkTaskCondition());
                taskList[1] = new Task("1", "杀十个白玉昆", TaskStatus.UNACCEPTABLE, "desc", "npc_1", "npc_0", new KillMonsterTaskCondition());
                var instance = TaskService.getInstance(); //danli
                var taskPanel = new TaskPanel();
                main.addChild(taskPanel);
                for (var i = 0; i < taskList.length; i++) {
                    TaskService.getInstance().taskList[i] = instance.getTaskByCustomRole(function addTask() {
                        if (taskList[i].status == TaskStatus.UNACCEPTABLE || taskList[i].status == TaskStatus.SUBMITTED) {
                            taskList[i] == null;
                        }
                        console.log(TaskService.getInstance().taskList[1]);
                        return taskList[i];
                    });
                }
                var NPC_0 = new NPC("npc_0", 20, 500, "npc_0_png", main);
                var NPC_1 = new NPC("npc_1", 500, 100, "npc_1_png", main);
                main.addChild(NPC_0);
                main.addChild(NPC_1);
                console.log(TaskService.getInstance().taskList[0]);
                // for(var task of taskList){
                //     console.log(task.name);
                // }
                var killButton = new egret.TextField;
                killButton.x = 300;
                killButton.y = 1000;
                killButton.textColor = 0x000000;
                killButton.text = "KILL MONSTER!!";
                main.addChild(killButton);
                killButton.addEventListener(egret.TouchEvent.TOUCH_TAP, main.onButtonClick, this);
                killButton.touchEnabled = true;
                break;
        }
    }
    var d = __define,c=GameScene,p=c.prototype;
    GameScene.replaceScene = function (scene) {
        GameScene.scene = scene;
    };
    GameScene.getCurrentScene = function () {
        return GameScene.scene;
    };
    return GameScene;
}());
egret.registerClass(GameScene,'GameScene');
//# sourceMappingURL=Scene.js.map