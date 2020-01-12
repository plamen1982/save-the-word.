import DS from 'ember-data';
const { attr, hasMany, Model } = DS;

export default Model.extend({
  wordName: attr('string'),
  description: attr('string'),
  failCount: attr('number'),
  showInTest: attr('boolean'),
  successCount: attr('number'),
  translation: attr('string'),
  synonyms: hasMany('synonym')
});
