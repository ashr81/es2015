"use strict"

class User{
  constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
  }
  static userCount(){
    console.log("Registered users count is 50.");
  }
  register(){
    console.log(this.username+" is registered user.")
  }
}

let bob = new User('bob', 'bob@bob.com', '******');
bob.register();
User.userCount();

class Member extends User{
  constructor(username, email, password, memberPackage){
    super(username, email, password);
    this.package = memberPackage;
  }

  getPackage(){
    console.log(this.username+' is subscribed to '+this.package+' package')
  }
}

let mike = new Member('mike','mike@mike.com', '****', 'standard')
mike.getPackage();
mike.register();
Member.userCount();
