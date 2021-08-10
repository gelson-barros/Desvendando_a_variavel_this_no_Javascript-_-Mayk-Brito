//tenho necessidade de chamar o cara de fora para dentro da funcão

// function.call(objecto,this, arg1, arg2)
//call do inglês chamar
//return o this do scope do context que eu enviar

this.name = "Tárcio";

function sayMyName(age) {
    this.age = age;
    console.log(this.name, this.age);
}

const dev = {
    name: "Dimuini",
};

sayMyName.aply(this, 24)
sayMyName.appaly(dev, 23)
//console.log(dev.age)
console.log(dev);
//console.log(this.age);
console.log(this);