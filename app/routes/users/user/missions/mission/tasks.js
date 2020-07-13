import Route from '@ember/routing/route';

export default class TasksRoute extends Route {
  model() {
    const mission = this.paramsFor('users.user.missions.mission')
    const taskList = this.store.query('task', { missionId: mission.mission_id });
    return taskList;
  };
}
