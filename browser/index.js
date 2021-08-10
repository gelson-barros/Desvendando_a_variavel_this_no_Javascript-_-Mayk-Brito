'use strict'

this.name = "Gélia";

function sayMyName(){
    console.log(this.name);
}

const user = {
    name: "Gelson",
    sayMyName: function() {
        console.log(this.name);
    }
};

user.sayMyName();

//console.log(window.name);