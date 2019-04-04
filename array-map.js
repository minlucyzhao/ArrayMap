var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

//map() method creates new array
var result = input.map(function(row) {
  var z = Math.sqrt(Math.pow(row.x, 2) + Math.pow(row.y, 2));
  return z;
});

// test cases: should return true
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);