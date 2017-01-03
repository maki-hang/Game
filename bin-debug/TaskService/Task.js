var Task = (function (_super) {
    __extends(Task, _super);
    function Task(id, name, status, desc, fromNpcId, toNpcId, condition) {
        _super.call(this);
        this._current = 0;
        this._total = 0;
        this._id = id;
        this._name = name;
        this._status = status;
        this._desc = desc;
        this.fromNPCId = fromNpcId;
        this.toNPCId = toNpcId;
        this._condition = condition;
    }
    var d = __define,c=Task,p=c.prototype;
    d(p, "id"
        ,function () {
            return this._id;
        }
    );
    d(p, "name"
        ,function () {
            return this._name;
        }
    );
    d(p, "status"
        ,function () {
            return this._status;
        }
        ,function (status) {
            this._status = status;
        }
    );
    d(p, "desc"
        ,function () {
            return this._desc;
        }
    );
    d(p, "current"
        ,function () {
            return this._current;
        }
    );
    p.checkStatus = function () {
        if (this.current > this._total) {
        }
        if (this._status == TaskStatus.DURING && this.current >= this._total) {
            this._status = TaskStatus.CAN_SUMBIT;
        }
    };
    return Task;
}(EventEmitter));
egret.registerClass(Task,'Task',["TaskConditionContext"]);
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["UNACCEPTABLE"] = 0] = "UNACCEPTABLE";
    TaskStatus[TaskStatus["ACCEPTABLE"] = 1] = "ACCEPTABLE";
    TaskStatus[TaskStatus["DURING"] = 2] = "DURING";
    TaskStatus[TaskStatus["CAN_SUMBIT"] = 3] = "CAN_SUMBIT";
    TaskStatus[TaskStatus["SUBMITTED"] = 4] = "SUBMITTED";
})(TaskStatus || (TaskStatus = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["SUCCESS"] = 0] = "SUCCESS";
    ErrorCode[ErrorCode["FAILED"] = 1] = "FAILED";
})(ErrorCode || (ErrorCode = {}));
//# sourceMappingURL=Task.js.map