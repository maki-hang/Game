var SenceService = (function (_super) {
    __extends(SenceService, _super);
    function SenceService() {
        _super.apply(this, arguments);
    }
    var d = __define,c=SenceService,p=c.prototype;
    p.notify = function () {
    };
    return SenceService;
}(EventEmitter));
egret.registerClass(SenceService,'SenceService');
var MockKillMonsterButton = (function (_super) {
    __extends(MockKillMonsterButton, _super);
    function MockKillMonsterButton() {
        _super.apply(this, arguments);
    }
    var d = __define,c=MockKillMonsterButton,p=c.prototype;
    p.onButtonClick = function (e) {
    };
    return MockKillMonsterButton;
}(SenceService));
egret.registerClass(MockKillMonsterButton,'MockKillMonsterButton');
//# sourceMappingURL=SceneService.js.map