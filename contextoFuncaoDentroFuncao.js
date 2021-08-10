//this função dentro de outra
//context function inside a function
//não pega o this global
 this.name = "Valeska";

function age(age){
    this.name = "Joshua";
    function birthYear(age){
        this.name = "Kyam";
        const year = 2019 - age;
        console.log(this.name, year)
    }
    birthYear(age)
    console.log(this.name);//ter  atenção
}

age(25);
console.log(this.name);