import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TableMissionsComponent extends Component {

  @action
  link(id) {
    console.log('link mission')
    this.args.linkMission(id);
  }
}