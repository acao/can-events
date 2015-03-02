import Ember from 'ember';

export default Ember.View.extend({
  show: function() {
    this.$('.timepicker').timepicker();
    if (this.$("input.isMultiday").is(':checked')){
      console.log('whoo');
      this.$('.end-date').prop('disabled', false);
    }
    this.$('.end-date').prop('disabled', true);
  }.on('didInsertElement'),

});
