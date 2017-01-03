var Cache = function (target, propertyName, desc) {
    var getter = desc.get;
    console.log(getter);
    desc.get = function () {
        return getter.apply(this);
    };
    return desc;
};
//# sourceMappingURL=Cache.js.map