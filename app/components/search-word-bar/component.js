import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { computed } from '@ember/object';

export default Component.extend({

  store: service(),

  searchedWord: '',
  filteredWords: A(),
  isFilteredArrayHasWords: computed('words.length', function() {
    return this.words.length > 0 ? true : false
  }),
  init() {
    this._super(...arguments);
    this.set('filteredWords', this.get('words'));
  },

  actions: {
    searchForAWord() {
      if(this.get('searchedWord').length === 0) {
        const allWords = this.get('store').peekAll('word');
        return this.set('filteredWords', allWords)
      }
      const filteredWords = this.get('words').filter(word => word.get('wordName').includes(this.get('searchedWord')));
      this.set('filteredWords', filteredWords);
    },
    deleteWord(wordId) {
      this.get('deleteWord')(wordId)
    },
    editWord(wordId) {
      this.get('editWord')(wordId)
    }
  }
});
