function mkproto(child,parent){
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function Mobile(model){
    this.model = model;

}

function Mobile1(model,color){
    Mobile.call(this,model);
    this.color = color;
}

let tasin = new Mobile1('S21 Ultra','black');

mkproto(Mobile1,Mobile);

document.write(tasin.model);
document.write("<br>" + tasin.color);
