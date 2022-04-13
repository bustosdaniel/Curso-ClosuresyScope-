const fruits = () => {
  if (true) {
    var fruits1 = 'apple';
    var fruits2 = 'banano';
    var fruits3 = 'kiwi';
  }
  console.log(fruits1);
  console.log(fruits2);
  console.log(fruits3);
}

fruits();

var x = 1; 
{
  var x = 2;
  console.log(x);
}
console.log(x);

const anotherFunction = () => {
  for(var i = 0; i < 10; i++) {
		setTimeout(function() {
			console.log(i);
		}, 1000);
	};
	
	console.log('El valor final de "i" es: ' + i);
}

anotherFunction();