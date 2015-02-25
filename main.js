var App = (function(){

  // Below is basically an instance variable
  // But we can't define it's value since this is self invoking
  // and the dom element doesn't exist yet probably.
  var $commentBox;

  var init = function() {
    _setupEvents();
    // loadArticles();
    // loadComments();
  };

  // This is where event handlers go
  var _setupEvents = function() {
    console.log('Events setup');
    $commentBox = $('#newCommentBox');
    $commentBox.on('change', _submitComment);
  };

  var _submitComment = function(event) {
    // If we were using a form or a href, we would prevent default
    // Put this first
    // event.preventDefault();

    // 'this' will be the comment input box
    // If we were using a form, we would pull out values here too
    console.log(this);
    var commentValue = this.value;

    // This ajax is triggered when we change the box
    // not on page load
    $.ajax({
      url: '/comments',
      type: 'POST',
      data: {comment: commentValue}, // They have DATA to send to server
    })
    .done(function() {
      // Render comment to page here as well
      console.log("success");
    }).fail(function() {
      console.log("Failure");
    });

    // If its a form, return false
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
  // App.loadComments();
});
