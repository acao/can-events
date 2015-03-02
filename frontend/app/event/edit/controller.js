import Ember from 'ember';

export default Ember.Controller.extend({
  afterModel: function(){
    this.set('title', this.controllerFor('event').get('title'))
  },
  actions: {
    edit: function() {
      this.controllerFor('event').set('isEditing', true);
    },
    saveLocation: function(){

    },

    doneEditing: function() {
      console.log(this.modelFor('event'));
      this.controllerFor('event').set('isEditing', false);
      //this.modelFor('post').save();
    },

    deletePost: function() {
      this.modelFor('event').destroyRecord().then(function() {
        this.transitionTo('events');
      }.bind(this));
    },
  }
});
