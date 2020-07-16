import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UsersUserMissionsIndexController extends Controller {
  // this.get('user')
  mission = {
    "id": null,
    "title": '',
    "status": '',
    "result": null,
    "time": null,
    "userId": ''
  }

  isShowModal = false;

  @action
  submit() {
    this.mission.userId = this.get('userId');
    const payload = this.store.createRecord('mission', this.mission);
    console.log(payload);
    payload.save();
  }

  @action
  showModal() {
    this.toggleProperty('isShowModal')
  }
}
