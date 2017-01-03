var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var User = (function () {
    function User() {
        this.cash = 0;
        this.gold = 0;
        this.exp = 0;
        this.level = 0;
        this.totalExp = 0;
        this.heroes = [];
        this.level = 1;
    }
    var d = __define,c=User,p=c.prototype;
    d(p, "heroesInTeam"
        ,function () {
            return this.heroes.filter(function (hero) { return hero.isInTeam; });
        }
    );
    p.getFightPower = function () {
        var result = 0;
        this.heroesInTeam.forEach(function (hero) { return result += hero.getFightPower(); });
        result += this.pet.getFightPower();
        return result + this.level * 3;
        //arr.every     arr.some     arr.map     arr.foreach    arr.filter
        //大数据 map reduce
    };
    User.user = new User();
    return User;
}());
egret.registerClass(User,'User');
var Hero = (function () {
    function Hero(heroName, isInTeam) {
        this.isInTeam = false;
        this.equipments = [];
        //maxHp=100;//
        this.hp = 50;
        this.level = 1;
        this.quality = 2.8;
        this.heroName = heroName;
        this.isInTeam = isInTeam;
    }
    var d = __define,c=Hero,p=c.prototype;
    d(p, "maxHp"
        ,function () {
            return this.level * 100 * this.quality;
        }
    );
    d(p, "attack"
        //attack:number=100;//游戏树枝都是高级数值 大多数    高级数值 基础数值
        ,function () {
            var result = 0;
            this.equipments.forEach(function (e) { return result += e.attack; });
            return result;
        }
    );
    d(p, "fightPower"
        ,function () {
            return this.getFightPower();
        }
    );
    p.getFightPower = function () {
        return this.maxHp * 1.5 + this.attack * 1.8; //取整 前后端统一
    };
    __decorate([
        Cache
    ], p, "maxHp", null);
    return Hero;
}());
egret.registerClass(Hero,'Hero');
var Equipments = (function () {
    function Equipments(name, atk) {
        this.jewel = [];
        this.atk = 0;
        this.equipName = name;
        this.atk = atk;
    }
    var d = __define,c=Equipments,p=c.prototype;
    d(p, "attack"
        ,function () {
            var jewelResult = 0;
            for (var i = 0; i < this.jewel.length; i++) {
                jewelResult += this.jewel[i].attack;
            }
            return this.atk + jewelResult;
        }
    );
    return Equipments;
}());
egret.registerClass(Equipments,'Equipments');
var Jewel = (function () {
    function Jewel(name) {
        this.jewelName = name;
    }
    var d = __define,c=Jewel,p=c.prototype;
    d(p, "attack"
        ,function () {
            return 10;
        }
    );
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
var Pet = (function () {
    function Pet(name) {
        this.petName = name;
    }
    var d = __define,c=Pet,p=c.prototype;
    p.getFightPower = function () {
        // if(name==this.petName[0]){
        //     return 10;
        // }
        // if(name==this.petName[1]){
        //     return 15;
        // }
        return 20;
    };
    return Pet;
}());
egret.registerClass(Pet,'Pet');
//# sourceMappingURL=User.js.map