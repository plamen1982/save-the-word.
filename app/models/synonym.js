import DS from 'ember-data';
const { attr, hasMany, Model } = DS;

export default Model.extend({
  wordName: attr('string'),
  description: attr('string'),
  dictionaries: hasMany('word')
});
