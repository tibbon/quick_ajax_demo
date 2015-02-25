var App = (function(){
  var init = function() {
    _loadArticles();
    _loadComments();
  };

  var counter = 0;

  var increment = function() {
    return counter++;
  }
  var _loadArticles = function() {
    // Make Ajax request
  };

  var _loadComments = function() {
    // Make Ajax request
  };

  return {init: init, increment: increment }
})();

$(document).ready(function() {
  App.init();
});
