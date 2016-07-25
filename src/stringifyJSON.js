// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
/*START SOLUTION*/


/*END SOLUTION*/
var stringifyJSON = function(obj) {
  // your code goes here
  /*START SOLUTION*/
  var type = typeof obj;
  var string = '';
  if (type === 'function' || type === 'undefined') {
    return '';
  }
  if (type === 'string') {
    return '"' + obj + '"';
  }
  if (type === 'number' || type === 'boolean') {
    return String(obj);
  }
  if (type === 'object') {
    if (obj === null) {
      return 'null';
    }
    if (Array.isArray(obj)) {
      string += '[';
      string += obj.map(function(element) {
        return stringifyJSON(element);
      });
      string += ']';
    } else {
      string += '{';
      for (var key in obj) {
        if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
          var keys = Object.keys(obj);
          if (key === keys[keys.length - 1]) {
            string += '"' + String(key) + '":' + stringifyJSON(obj[key]);
          } else {
            string += '"' + String(key) + '":' + stringifyJSON(obj[key]) + ',';
          }
        }
      }
      string += '}';
    }
    return string;
  }
  /*END SOLUTION*/
};
