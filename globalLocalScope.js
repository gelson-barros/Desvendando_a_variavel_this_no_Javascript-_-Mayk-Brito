//global scope

this.name = "Gelson";

//console.log(this.name);
//console.log(this);

function sayMyname(){
    //local scope
    console.log(this.name);//undefined
}

sayMyname();