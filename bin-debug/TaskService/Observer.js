var TaskPanel = (function (_super) {
    __extends(TaskPanel, _super);
    function TaskPanel() {
        _super.call(this);
        this.textField = new egret.TextField;
        this.panel = new egret.Shape;
        this.panel.x = 0;
        this.panel.y = 0;
        this.textField.text = "----";
        this.panel.graphics.clear();
        this.panel.graphics.beginFill(0x000000, 0.5);
        this.panel.graphics.drawRect(0, 0, 250, 300);
        this.panel.graphics.endFill();
        this.addChild(this.panel);
        this.addChild(this.textField);
        TaskService.addObserver(this);
    }
    var d = __define,c=TaskPanel,p=c.prototype;
    p.onChange = function (task) {
        for (var i = 0; i < TaskService.getInstance().taskList.length; i++) {
            switch (TaskService.getInstance().taskList[i].status) {
                case TaskStatus.DURING:
                    this.textField.text = task.name + "during";
                    break;
                case TaskStatus.SUBMITTED:
                    this.textField.text = task.name + "finished";
                    console.log("111");
                    break;
            }
        }
    };
    return TaskPanel;
}(egret.DisplayObjectContainer));
egret.registerClass(TaskPanel,'TaskPanel',["Observer"]);
//# sourceMappingURL=Observer.js.map