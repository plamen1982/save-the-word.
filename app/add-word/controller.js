import Controller from '@ember/controller';

export default Controller.extend({
  wordName: '',
  wordDescription: '',
  isSynonymClicked: false,
  synonymName: '',
  synonymDescription: '',
  error: null,
  actionsForSynonym: 'Show synonym form',
  init() {
    this._super(...arguments);
    this.error = {
      message: ''
    }
  },
  actions: {
    showSynonymForm() {
      this.toggleProperty('isSynonymClicked');
      if(this.isSynonymClicked) {
        this.set('actionsForSynonym', 'Hide synonym form');
      } else {
        this.set('actionsForSynonym', 'Show synonym form');
        this.set('synonymName', '');
        this.set('synonymDescription', '');
      }
    },
    saveWord() {
      if(this.wordName) {
        const newWord = this.store.createRecord('word', {
          wordName: this.wordName,
          description: this.wordDescription,
        });
        newWord.save().then(() =>{
          this.transitionToRoute('/words-list')
        })
          .catch(e => {
          console.log(e.errors);
        });

        this.set('synonymName', '');
        this.set('synonymDescription', '');
        this.set('wordName', '');
        this.set('wordDescription', '');
      } else {
        this.set('error.message', 'name of the word required')
      }
    },
    createSynonym() {
      console.log('save synonym');
      this.set('synonymName', '');
      this.set('synonymDescription', '');
    },
  },
  resetFields(field) {

  }
});
