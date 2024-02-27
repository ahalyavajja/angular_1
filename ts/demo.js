"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myfun = void 0;
var days;
(function (days) {
    days[days["sunday"] = 0] = "sunday";
    days[days["monday"] = 1] = "monday";
    days[days["tuesday"] = 2] = "tuesday";
})(days || (days = {}));
console.log(days);
console.log(days[days.sunday]);
console.log(days.monday);
function dummy() {
    throw Error;
}
var emp = /** @class */ (function () {
    function emp(n, s, e) {
        this.name = n;
        this.salary = s;
        this.email = e;
    }
    return emp;
}());
var xyz = new emp("aloo", 35000, 'aha@gmail.com');
var obj = {
    name: 'ahalya',
    email: 'xyz@gmail.com',
    salary: 35000
};
var b = 5;
function sum1(x, y) {
    console.log(typeof x, typeof y);
}
sum1(2, 3);
sum1("hi", "raj");
var myfun;
(function (myfun) {
    function sum1(a) {
        return a++;
    }
})(myfun || (exports.myfun = myfun = {}));
console.log(myfun);
