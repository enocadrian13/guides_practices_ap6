var TaskView = Backbone.View.extend({
  tagName: 'li',
  className: 'task-item',
  template: _.template('<%= title %> – <button class="toggle">Toggle</button>'),
  events: { 'click .toggle': 'toggleCompleted' },
  initialize: function(){ this.listenTo(this.model, 'change', this.render); },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.toggleClass('completed', this.model.get('completed'));
    return this;
  },
  toggleCompleted: function(){ this.model.toggle(); }
});