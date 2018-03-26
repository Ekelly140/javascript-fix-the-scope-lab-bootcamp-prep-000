var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = "cat"
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!
 
}

<<<<<<< HEAD
function funkyFunction() {
      return function Funky(){
        return "FUNKY!";
  }
}

var theFunk = funkyFunction()();

=======
var theFunk= function funkyFunction () {
  return function funky() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
theFunk()
>>>>>>> 1f0f3524ae4c1a45c1b9909a61e7971e85f3b069
