//context inside a function
//-não pega o this global, mas se não estiver no modo estrito, sim
//'use strict' --> //modo estrito
//no node nao pega o name, mas no browser ele pega o name
this.name = "Cáio";

function sayMyName(){
    console.log(this.name);
}

sayMyName();