//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      
// "this" is used to reference the object that calls it (owns/belongs to) it. By using 'this'
// we can call on methods and properties of the object scope.
// Also, by using "this" we limit (specify) the exact scope and don/t have to worry about any global variables that we may or may not be aware of.
// "This" is defined when it is invoked, not when it is declared (defined).
      
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
// 1 By default, 'this' refers to the global object.
// 2 When a function is called as a property on a parent object, 'this' refers to the parent object inside that function.
// 3 When a function is called with the new operator, 'this' refers to the newly created object inside that function.
// 4 When a function is called using call or apply, 'this' refers to the first argument passed to call or apply. If the first argument is null or not an object, this refers to the global object.

  // 3) What is the difference between call and apply?

      //Answer
// calls require that the function/'s parameters be listed explicity, while apply allows for an array to be passed as a parameter.

  // 4) What does .bind do?

      //Answer
// it binds (or links) a function to an object, which can be run at some future time with the keyword "this" and still have the intended focus object.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
  username: "Jax",
  email: "jaxtel4219@gmail.com",
  getUsername: function(){
    return this.username;
  }
};
user.getUsername();

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here


var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {
    this.move += 10;
  };
}


prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).


//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here

var x = getYear.bind(prius)();
console.log(x);

//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

// setTimeout(getUsername), 5000);  //commented out to show original vs. fix
setTimeout(getUsername.binder(user), 5000);



//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here
// undefined, due to the focus being on the Window object (user has not yet been associated with the function).

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
// see above.

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
