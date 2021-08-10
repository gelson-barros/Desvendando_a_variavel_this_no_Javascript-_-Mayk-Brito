//bind = ligar
//retorna a função chamada porém, ligada ao context que lhe foi passado
//bound function ou funcao ligada a um contexto

this.name = "Camila";
this.age = 25;

function sayMyName(age) {
    this.age = age;
    console.log(this.name, this.age);
}

const dev = {
    name: "Isabela",
    age: 35,
    sayMyAge: function(){
        console.log(this.age, this.name)
    }
};

//const boundSayMyName =  sayMyName.bind(this);
//boundSayMyName(16);
//sayMyName.bind(dev)(12); /**ou */ //const boundSayMyName1 =  sayMyName.bind(dev);
//boundSayMyName1(16);
//const age = dev.sayMyAge;//quando é chamada o age() traz undefined, é desligado do objecto
//const age = dev.sayMyAge.bind(dev);ligada a um contexto
const age = dev.sayMyAge.bind(this);
age();


