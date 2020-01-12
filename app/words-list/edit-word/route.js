import Route from '@ember/routing/route';

export default Route.extend({
  model({ word_id }) {
    return  this.store.peekRecord('word', word_id);
  },
  actions: {
    updateWord(model) {
     this.store.findRecord('word', model.id).then((wordToBeUpdated) => {
      wordToBeUpdated.set('wordName', model.get('wordName'));
      wordToBeUpdated.set('description', model.get('description'));

      wordToBeUpdated.save();
    })
      this.transitionTo('/words-list');
    }
  }
});
