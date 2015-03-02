import Ember from 'ember';

export default Ember.Controller.extend({
  model: function() {
    return {};
  },
  actions: {
    submitEvent: function() {
      // Get the todo title set by the "New Todo" text field
      var title = this.get('title');
      var description = this.get('description');
      var startDate = this.get('startDate');
      var endDate = this.get('endDate');
      var created = Date.now();

      // Create the new Todo model
      var event = this.store.createRecord('event', {
        title: title,
        startDate: startDate,
        endDate: endDate,
        description: description,
        isPublished: false,
        isAssigned: false,
        isArchived: false,
        created: created
      });

      // Clear the "New Todo" text field
      this.set('title', '');
      this.set('content', '');
      // Save the new model
      event.save();
    }
  }

});
