import Controller from '@ember/controller';
import { action } from '@ember/object';
import DS from 'ember-data';

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
  createMissionPromise;

  @action
  submit() {
    this.mission.userId = this.get('userId');
    const payload = this.store.createRecord('mission', this.mission);
    console.log(payload);
    let promise = payload.save().then(() => {
      this.send('showModal');
    }).catch((err) => {
      alert(`Mission not create:  ${err}`);
    });

    const promiseObject = DS.PromiseObject.create({
      promise: promise
    });

    this.set('createMissionPromise', promiseObject)
  }

  @action
  showModal() {
    this.toggleProperty('isShowModal')
  }
}
