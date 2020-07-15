import Route from '@ember/routing/route';

export default class UsersUserMissionsIndexRoute extends Route {

  userId = ''
  model() {
    this.set('userId', this.paramsFor('users.user'))
    return this.modelFor('users.user.missions');
  }
  setupController(controller) {
    let id = this.get('userId').user_id
    controller.set('userId', id)
  }

}
