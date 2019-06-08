function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function choice(arr) {
  let randomInx = Math.floor(Math.random() * arr.length);
  return arr[randomInx];
}

export { getRandomColor, choice };

// function get_random_color() {
//     function c() {
//       var hex = Math.floor(Math.random()*256).toString(16);
//       return ("0"+String(hex)).substr(-2); // pad with zero
//     }
//     return "#"+c()+c()+c();
//   }
