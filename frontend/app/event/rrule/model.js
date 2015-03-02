import DS from 'ember-data';

export default DS.Model.extend({
  rev:        DS.attr('string'),
  freq:       DS.attr('string'), // required
  count:      DS.attr('number'),
  interval:   DS.attr('number'),
  until:      DS.attr('date'),
  bymonth:    DS.attr('boolean'),
  wkst:       DS.attr('string'),
  byday:      DS.attr('string') //wants to be an array of strings
});
