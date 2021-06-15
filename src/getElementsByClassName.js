// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// i can still type
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var dom = document.body;
  if (className === undefined) {
    return undefined;
  }
  var result = [];
  var lookForClassItem = function (element) {
    if (element.classList && element.classList.contains(className)) {
      result.push(element);
    }
    var childNode = element.childNodes;
    if (childNode) {
      for (var i = 0; i < childNode.length; i++) {
        lookForClassItem(childNode[i]);
      }
    }
  };
  lookForClassItem(dom);
  return result;

};
