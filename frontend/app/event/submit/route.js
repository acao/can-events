import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {};
  },
  actions: {
    edit: function() {
      this.controllerFor('event').set('isEditing', true);
    },

    doneEditing: function() {
      this.controllerFor('event').set('isEditing', false);
      this.modelFor('event').save();
    },

    deletePost: function() {
      this.modelFor('event').destroyRecord().then(function() {
        this.transitionToRoute('event.index');
      }.bind(this));
    },
  }

});
