import Controller from '@ember/controller';

export default Controller.extend({
  // wordName: this.store.get('wordName'),
  actions: {
    deleteWord(wordId) {
    this.store.findRecord('word', wordId)
      .then(((word) => {
        word.deleteRecord();
        word.save();
      }));
    },
    editWord(wordId) {
      this.transitionToRoute(`/words-list/${wordId}`);
    },
  },

});
