import Route from '@ember/routing/route';

export default class MissionsRoute extends Route {
  model() {

    let user = this.paramsFor('users.user');
    const missionList = this.store.query('mission', { userId: user.user_id });

    return missionList;
  };

};
