import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('words', {path: '/' });
  this.route('add-word');
  this.route('words-list', function() {
    this.route('edit-word', { path: '/:word_id' });
  });
});

export default Router;
