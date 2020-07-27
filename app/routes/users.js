import Route from '@ember/routing/route';

export default class UsersRoute extends Route {

  model() {
    return this.store.findAll('user');
  };

  setupController(controller) {
    console.log('controller users', controller.store);
  }
}
