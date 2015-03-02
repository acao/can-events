import DS from 'ember-data';

export default DS.Model.extend({
  rev:        DS.attr('string'),
  event:      DS.belongsTo('event'),
  name:       DS.attr('string'),
  lat:        DS.attr('number'), //computed?
  lon:        DS.attr('number'), //computed? stored on submit? other geoms?
  address1:   DS.attr('string'),
  address2:   DS.attr('string'),
  zip:        DS.attr('number'),
  city:       DS.attr('string'),
  state:      DS.attr('string'),
  directions: DS.attr('string'), //make this computed?
  website:    DS.attr('string'),
  phone:      DS.attr('string')
});

//geojson object as transform? geojson couch view?
