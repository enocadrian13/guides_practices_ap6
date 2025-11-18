var Task = Backbone.Model.extend({
  defaults: { title: '', completed: false },
  validate: function(attrs) {
    if (!attrs.title) return 'Title cannot be empty.';
  },
  toggle: function() { this.set({ completed: !this.get('completed') }); }
});