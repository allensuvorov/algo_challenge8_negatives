var array = [1, 2, -2, 4, -5];
// t parameter => if t < 0, then return 0, else ":" return t
array = array.map(t => t  < 0 ? 0 : t) 
console.log(array)