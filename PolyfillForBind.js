/* implemented polyfill of bind function which we commonly use */

let name = {
  firstName: 'Gourav',
  lastName: 'Manna'
}

let printName = function(hometown, state, country) {
  console.log(this.firstName+' '+this.lastName+' '+hometown+' '+state+' '+country);
}

Function.prototype.myBind = function(...args) {
  obj = this;  // here this refers to the printName
  params = args.slice(1);  // getting the other arguments other than name object
  return function(...args2) {
    obj.apply(args[0], [...params, ...args2]);  // args[0] will be name object
  }
}


let displayName = printName.myBind(name, 'Howrah', 'West Bengal');
displayName('India');