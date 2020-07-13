import Route from '@ember/routing/route';

export default class UsersUserIndexRoute extends Route {
  model(params) {
    console.log('params', params);
    // return this.store.findRecord('user', params.user_id);
    // console.log(this.store.query('user', { filter: { id: params.user_id } }));

    // return this.store.query('user', { filter: { id: params.user_id } })
    return this.modelFor('users.user')
  }
};
