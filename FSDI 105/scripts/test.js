var userName="Gary";
let fName="Samanth";
const TAXES=0.10;


function  hello() {
    console.log(fName);
}

let dog={
    name: "scooby",
    age:60,
    owner: "Shaggy"
}
console.log(dog);

let cat={
    name:"Garfield",
    age:60,
    owner:"JOn Arbuckle"
}
console.log(cat);

//object constructor 
function Animal(name,age,owner){
    this.name=name;
    this.age=age;
    this.owner=owner

}

    let dog1= new Animal( "Copper",60,"Cletus");

    let dog2= new Animal("Dante",5,"Miguel");

    let cat1 = new Animal("Nemo",15,"Darla")

    function User(email,password){
        this.email=email;
        this.password=password;
    }

    let oscar = new User('oscar@gmail.com',"pass123");

    console.log(oscar.password);

    let products=['product1','product2','product3','product4']

    for(let i=0; i<products.length; i++){
        console.log(products[i]);
    }

    let ages=[12,15,46,89,54];
    let total=0;
    for(let i=0; i<ages.length; i++){

        total=total+ages[i];
        console.log(total);
    }