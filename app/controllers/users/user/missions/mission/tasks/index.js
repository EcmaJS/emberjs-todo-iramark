import Controller from '@ember/controller';
import { action } from '@ember/object';
import DS from 'ember-data';

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
  createTaskPromise;

  @action
  submit() {
    this.task.missionId = this.get('missionId');
    const payload = this.store.createRecord('task', this.task);
    console.log(payload);

    let promise = payload.save().then(() => {
      this.send('showModal');
    }).catch((err) => {
      alert(`Task not create:  ${err}`);
    });

    const promiseObject = DS.PromiseObject.create({
      promise: promise
    });

    this.set('createTaskPromise', promiseObject)
  }

  @action
  showModal() {
    this.toggleProperty('isShowModal')
  }
}
