import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  rev: DS.attr('string'),
  created: DS.attr('date'),
  isEditing: DS.attr('boolean'),

  startDate: DS.attr('date'),
  endDate: DS.attr('date'),

  description: DS.attr('string'),
  repeats: DS.hasMany('event/rrule'),
  authors: DS.hasMany('person'),
  // types: DS.hasMany('eventType'),
  // tags: DS.hasMany('tag'),
  locations: DS.hasMany('event/location'),
  // organisatins: DS.hasMany('organization'),
  // attachments: DS.hasMany('attachment', {async: true})

});
