var Panel = (function (_super) {
    __extends(Panel, _super);
    function Panel() {
        _super.call(this);
        this.McCree = new Hero("McCree", true);
        this.Soilder76 = new Hero("Soilder76", true);
        this.Tracer = new Hero("Tracer", true);
        this.sword = new Equipments("sword", 50);
        this.armor = new Equipments("armor", 10);
        this.gun = new Equipments("gun", 70);
        this.dog = new Pet("baiyukun");
        this.blueJewel = new Jewel("blueJewel");
        this.level = new egret.TextField;
        this.hp = new egret.TextField;
        this.fightPower = new egret.TextField;
        this.heroInTeam = new egret.TextField;
        this.equipments = new egret.TextField;
        this.jewel = new egret.TextField;
        this.pet = new egret.TextField;
        this.bag1 = new egret.TextField;
        this.bag2 = new egret.TextField;
        this.bag3 = new egret.TextField;
        this.propertyPanel = new egret.Shape;
        this.bagPanel = new egret.Shape;
        this.propertyPanel.x = 0;
        this.propertyPanel.y = 0;
        this.propertyPanel.graphics.beginFill(0x000000, 0.5);
        this.propertyPanel.graphics.drawRect(0, 0, 400, 600);
        this.propertyPanel.graphics.endFill();
        this.addChild(this.propertyPanel);
        this.bagPanel.x = 100;
        this.bagPanel.y = 700;
        this.bagPanel.graphics.beginFill(0x000000, 0.5);
        this.bagPanel.graphics.drawRect(0, 0, 600, 100);
        this.bagPanel.graphics.endFill();
        this.addChild(this.bagPanel);
        //初始化用户状态
        User.user.heroes.push(this.McCree, this.Tracer);
        this.McCree.equipments.push(this.sword);
        this.Soilder76.equipments.push(this.gun);
        this.sword.jewel.push(this.blueJewel);
        User.user.pet = this.dog;
        this.bag1.text = "Soilder76";
        this.bag1.textColor = 0xffffff;
        this.bag1.x = this.bagPanel.x + 10;
        this.bag1.y = this.bagPanel.y + 35;
        //mouse.enable(this.stage);
        //this.bag1.addEventListener(onmouseover)
        this.bag1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBagClick, this);
        this.bag1.touchEnabled = true;
        this.addChild(this.bag1);
        this.bag2.text = "armor";
        this.bag2.textColor = 0xffffff;
        this.bag2.x = this.bagPanel.x + 210;
        this.bag2.y = this.bagPanel.y + 35;
        this.bag2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBagClick, this);
        this.bag2.touchEnabled = true;
        this.addChild(this.bag2);
        this.bag3.text = "";
        this.bag3.textColor = 0xffffff;
        this.bag3.x = this.bagPanel.x + 410;
        this.bag3.y = this.bagPanel.y + 35;
        this.bag3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBagClick, this);
        this.bag3.touchEnabled = true;
        this.addChild(this.bag3);
        this.init();
        this.heroInTeam.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHeroesClick, this);
        this.heroInTeam.touchEnabled = true;
    }
    var d = __define,c=Panel,p=c.prototype;
    p.init = function () {
        var _this = this;
        this.level.text = "等级：" + User.user.level;
        this.addChild(this.level);
        this.fightPower.text = "目前战斗力：" + User.user.getFightPower();
        this.fightPower.y = 30;
        this.addChild(this.fightPower);
        this.heroInTeam.text = "在阵英雄：";
        User.user.heroesInTeam.forEach(function (e) {
            //console.log(e.heroName);
            _this.heroInTeam.text += e.heroName;
        });
        this.heroInTeam.y = 60;
        this.addChild(this.heroInTeam);
        this.equipments.text = "装备：";
        User.user.heroesInTeam.forEach(function (e) {
            e.equipments.forEach(function (elements) {
                _this.equipments.text += elements.equipName;
            });
        });
        this.equipments.y = 90;
        this.addChild(this.equipments);
        this.pet.y = 120;
        this.pet.text = "宠物：" + User.user.pet.petName;
        this.addChild(this.pet);
    };
    p.onBagClick = function (e) {
        console.log(e.target.text);
        if (e.target.text == "Soilder76") {
            User.user.heroes.push(this.Soilder76);
            e.target.text = null;
        }
        else if (e.target.text == "armor") {
            this.McCree.equipments.push(this.armor);
            e.target.text = null;
        }
        else if (e.target.text == "McCree") {
            User.user.heroes.push(this.McCree);
            e.target.text = null;
        }
        else if (e.target.text == "Tracer") {
            User.user.heroes.push(this.Tracer);
            e.target.text = null;
        }
        this.init();
    };
    p.onHeroesClick = function (e) {
        if (this.bag1.text == "") {
            this.bag1.text = User.user.heroes.pop().heroName;
        }
        else if (this.bag2.text == "") {
            this.bag2.text = User.user.heroes.pop().heroName;
        }
        else if (this.bag3.text == "") {
            this.bag3.text = User.user.heroes.pop().heroName;
        }
        else {
            console.warn("full bag");
        }
        this.init();
    };
    p.change = function (changeSth) {
    };
    return Panel;
}(egret.DisplayObjectContainer));
egret.registerClass(Panel,'Panel');
//# sourceMappingURL=Panel.js.map