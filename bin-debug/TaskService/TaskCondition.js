var NPCTalkTaskCondition = (function () {
    function NPCTalkTaskCondition() {
    }
    var d = __define,c=NPCTalkTaskCondition,p=c.prototype;
    p.onAccept = function (task) {
        task.current++;
        //task.checkStatus();
    };
    p.onSubmit = function (task) {
    };
    p.onChange = function (task) {
    };
    return NPCTalkTaskCondition;
}());
egret.registerClass(NPCTalkTaskCondition,'NPCTalkTaskCondition',["TaskCondition"]);
var KillMonsterTaskCondition = (function (_super) {
    __extends(KillMonsterTaskCondition, _super);
    function KillMonsterTaskCondition() {
        _super.apply(this, arguments);
    }
    var d = __define,c=KillMonsterTaskCondition,p=c.prototype;
    p.onAccept = function (task) {
    };
    p.onSubmit = function (task) {
    };
    p.onChange = function (task) {
    };
    return KillMonsterTaskCondition;
}(SenceService));
egret.registerClass(KillMonsterTaskCondition,'KillMonsterTaskCondition',["TaskCondition"]);
//# sourceMappingURL=TaskCondition.js.map