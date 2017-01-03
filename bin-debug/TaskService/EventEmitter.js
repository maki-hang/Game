var EventEmitter = (function (_super) {
    __extends(EventEmitter, _super);
    function EventEmitter() {
        _super.apply(this, arguments);
    }
    var d = __define,c=EventEmitter,p=c.prototype;
    p.addObserver = function (observer) {
    };
    p.notify = function (task) {
    };
    return EventEmitter;
}(egret.DisplayObjectContainer));
egret.registerClass(EventEmitter,'EventEmitter');
var TaskService = (function (_super) {
    __extends(TaskService, _super);
    function TaskService() {
        _super.call(this);
        this.observerList = new Array();
        this.taskList = new Array();
    }
    var d = __define,c=TaskService,p=c.prototype;
    //danli
    TaskService.getInstance = function () {
        if (this.instance == null) {
            this.instance = new TaskService();
        }
        return this.instance;
    };
    p.onChange = function (task) {
    };
    p.accept = function (id) {
        if (!id) {
            return ErrorCode.FAILED;
        }
        var task = TaskService.getInstance().taskList[id];
        if (task.id == id) {
            task.status = TaskStatus.DURING;
            TaskService.notify(task);
            return ErrorCode.SUCCESS;
        }
        else {
            return ErrorCode.FAILED;
        }
    };
    p.finish = function (id) {
        if (!id) {
            return ErrorCode.FAILED;
        }
        var task = TaskService.getInstance().taskList[id];
        if (task.id == id) {
            task.status = TaskStatus.SUBMITTED;
            TaskService.notify(task);
            return ErrorCode.SUCCESS;
        }
        else {
            return ErrorCode.FAILED;
        }
    };
    p.getTaskByCustomRole = function (rule) {
        return rule();
    };
    TaskService.notify = function (task) {
        for (var _i = 0, _a = TaskService.getInstance().observerList; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.onChange(task);
        }
        //console.log(TaskService.getInstance().taskList[0].status);
    };
    TaskService.addObserver = function (observer) {
        for (var i = 0; i < TaskService.getInstance().observerList.length; i++) {
            if (observer == TaskService.getInstance().observerList[i])
                return ErrorCode.FAILED;
        }
        TaskService.getInstance().observerList.push(observer);
    };
    TaskService.instance = null;
    return TaskService;
}(EventEmitter));
egret.registerClass(TaskService,'TaskService',["Observer"]);
//# sourceMappingURL=EventEmitter.js.map