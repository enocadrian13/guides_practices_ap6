$(function(){
  var task = new Task({ title: 'Do homework' });
  var view = new TaskView({ model: task, el: '#app' });
  view.render();
});