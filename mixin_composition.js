var eating = {
    eat: function (){
        return "I am eating";
    }
};
var sleeping = {
    sleep: function (){
        return "I am sleeping";
    }
};
var talking = {
    talk: function (){
        return "I am talking";
    }
};
//var rahul = Object.assign({},eating,talking,sleeping);
//var robot = Object.assign({},talking);
//var Human = Object.assign({},eating,talking,sleeping);

//var rahul = new Human();
//var robot = new Human();
function mixin(target,...sources){
    Object.assign(target,...sources);
}

mixin(Human.prototype,eating,sleeping,talking);

var rahul = new Human();
var robot = new Human();

