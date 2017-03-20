import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
   redirect: function () {
    this.transitionTo('authors');
  },
  location: config.locationType,
  rootURL: config.rootURL
}); 

Router.map(function() {
this.route('authors', function () {
    this.route('item', { path: '/:author_id' });
    this.route('edit',{ path: '/:author_id/edit' });
    this.route('add');
  });

});

export default Router;
