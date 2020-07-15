import Route from '@ember/routing/route';

export default class UsersUserMissionsMissionTasksIndexRoute extends Route {
  missionId = ''
  model() {
    this.set('missionId', this.paramsFor('users.user.missions.mission'))
    return this.modelFor('users.user.missions.mission.tasks');
  }
  setupController(controller) {
    let id = this.get('missionId').mission_id
    controller.set('missionId', id)
  }
}
