// context inside a method
//não pega o this global, somente do objecto pode ser com ou sem modo estrito
'use strict'
this.name = "Rafael";

const crianca = {
    name: "Cleiton",
    sayMyName: function(){
        console.log(this.name)//Cleiton
    }
}

crianca.sayMyName();