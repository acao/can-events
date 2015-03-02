import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  rev: DS.attr('string'),
  authors: DS.hasMany('person')
});
