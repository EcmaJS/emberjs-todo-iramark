import Route from '@ember/routing/route';
import axios from 'axios';

export default class MissionsRoute extends Route {

  model() {

    const user = this.paramsFor('users.user')
    console.log("user:", user)

    const missionList = this.store.query('mission', {userId: user.user_id});

    return missionList;
  };

};
