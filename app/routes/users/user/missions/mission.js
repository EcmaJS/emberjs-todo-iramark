import Route from '@ember/routing/route';

export default class MissionsMissionRoute extends Route {
  model(params) {
    console.log('params', params);
    return this.store.findRecord('mission', params.mission_id)
  }
}
