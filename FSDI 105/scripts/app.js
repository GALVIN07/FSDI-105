function User(email, password, first, last, age, address, phone, payment, color){
    /*-- create a form with mail, password, first name, last name, age, address, phone number, payment, color-->*/
    this.email=email;
    this.password=password;
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.address=address;
    this.phoneNumber=phone;
    this.payment=payment;
    this.color=color;

}

function register(){
    let email=$("#txtEmail").val();
    let password=$("#txtPassword").val();
    let firstName=$("#txtFirst").val();
    let lastName=$("#txtLast").val();
    let age=$("#txtAge").val();
    let address=$("#txtAddress").val();
    let phoneNumber=$("#txtPhone").val();
    let payment=$("#selPayment").val();
    let color=$("#txtColor").val();
    

    let user = new User(email,password,firstName,lastName,age,address,phoneNumber,payment,color);
    
    console.log(user);
}
function init(){
    console.log("User registration system")
}

window.onload = init;