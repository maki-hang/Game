interface Observer{

    onChange(task:Task);
    
}

class TaskPanel extends egret.DisplayObjectContainer implements Observer {
    public textField = new egret.TextField;
    private panel: egret.Shape = new egret.Shape;

    constructor() {
        super();
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

    public onChange(task: Task) {
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
    }
}