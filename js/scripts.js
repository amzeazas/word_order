var wordCount = function(text) {
  var newArray = text.toLowerCase().replace(/[^\w\s]/g, "").split(" ");
  var result = {};
  var highest = 0;
  var words = [];
  var output = "";

  newArray.forEach(function(word) {
    if (result.hasOwnProperty(word)) {
      //add 1 to it's value
      result[word] += 1;
      if (result[word] > highest) {
        highest = result[word];
      }
    } else {
      //create object and value of 1
      result[word] = 1;
      words.push(word);
    }
  });

  for (var count = highest; count > 0; count--) {
    words.forEach(function(word) {
      if (result[word] === count) {
        if (output == "") {
          output = word;
        } else {
          output = output + ", " + word;
        }
      }
    });
  }

  return output;
};
//
// var wordCount = function(text) {
//   //normalizes input
//   var text = downCase(text);
//
//   return text;
// };
