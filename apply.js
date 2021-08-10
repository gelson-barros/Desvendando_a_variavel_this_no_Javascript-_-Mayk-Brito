// function.call(objecto,this,[arg1, arg2])
//return o this do scope do context que eu enviar

this.name = "Tárcio";

function sayMyName(age){
    this.age = age
    console.log(this.name, this.age);
}

const dev = {
    name: "Dimuini"
}

//sayMyName.apply(this, [24, "Bananas", "Camisa"]);

//console.log(this.age);

function multiply(){
    const args = Array.from(arguments);
    //console.log(args);
    return args.reduce((acc,item) => {
        return acc * item;
    }, 1);
}

//multiply(1,1,3,5)
const total = multiply.apply(this, [2,2,2,3])
console.log(total)