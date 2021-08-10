//this na arrow function
//pega this do scopo anterior 
this.name = "Valeska";

const age = age => {
    this.name = "Kyam";
    const birthYear = age => {
        const year = 2019 - age;
        console.log(this.name, year);
    };
    birthYear(age);
};
//age(25);

const dev = {
    sayMyName: ()=> {
        this.name = "Enzo";
        //console.log(this.name);
    }
}

dev.sayMyName();
console.log(this.name);
