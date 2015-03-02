import Ember from 'ember';

export default Ember.TextField.extend({
  show: function() {
    this.$('.timepicker').timepicker();
  }.on('didInsertElement')
});
