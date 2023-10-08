// Function that takes a callback function as an argument and calls it
function receivesAFunction(callback) {
    
    callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function");
    }
    return namedFunction;
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    // Define and return an anonymous function
    return function() {
      console.log("This is an anonymous function");
    };
  }
  
  