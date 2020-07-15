import Route from '@ember/routing/route';

export default class UsersUserIndexRoute extends Route {
  model(params) {
    return this.modelFor('users.user')
  }
};
