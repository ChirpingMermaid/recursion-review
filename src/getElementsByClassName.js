// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  // your code here
  var results = [];
  element = element || document.body;
  if (element.classList && element.classList.contains(className)) {
    results.push(element);
  } 

  if (element.childNodes) {
    _.each(element.childNodes, function(node) {
      results = results.concat(getElementsByClassName(className, node));
    });
  }
  return results;
};
