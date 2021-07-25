function PersonParent(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

PersonParent.prototype.message = function(){
  return `Hello I am ${this.firstName} ${this.lastName}`;
}

function CustomerChild(firstName,lastName, phone, country) {
  PersonParent.call(this, firstName, lastName);
  this.phone = phone;
  this.country = country;
}

// To inherit the prototype method
CustomerChild.prototype = Object.create(PersonParent.prototype);

// constructor is lost when prototype is assigned to new object
CustomerChild.prototype.constructor = CustomerChild; 
