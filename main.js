var App = (function(){

  // Below is basically an instance variable
  // But we can't define it's value since this is self invoking
  // and the dom element doesn't exist yet probably.
  var $button1;

  var init = function() {
    _setupEvents();
    loadArticles();
    loadComments();
  };

  var counter = 0;

  var fadeMe = function() {

  };

  // This is where event handlers go
  var _setupEvents = function() {
    $button1 = $('#button1');
    $button1.on('click', fadeMe);
  };

  var increment = function() {
    return counter++;
  }
  var loadArticles = function() {
    // Make Ajax request
    $.ajax({
      url: 'http://locahost:3000/articles.json',
      type: 'GET',
      dataType: 'json'
    })
    .done(_renderArticles)
    .fail(_failure);
  };

  var _renderArticles = function(data) {
    // Do dom manipulation
  };

  var _failure = function(err) { console.log(err);}

  var loadComments = function() {
    // Make Ajax request
  };


  // You can return as much as you'd like
  // but returning a minimal set of functionality is probably best
  // As much as you need to make testing of functionality possible
  return {init: init, loadComments: loadComments }
})();

$(document).ready(function() {
  App.init();
  App.loadComments();
});
