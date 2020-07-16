import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UsersUserMissionsMissionTasksIndexController extends Controller {
  task = {
    "id": null,
    "title": '',
    "status": '',
    "result": null,
    "time": null,
    "missionId": ''
  }
  isShowModal = false;

  @action
  submit() {
    this.task.missionId = this.get('missionId');
    const payload = this.store.createRecord('task', this.task);
    console.log(payload);

    payload.save();
  }

  @action
  showModal() {
    this.toggleProperty('isShowModal')
  }
}
