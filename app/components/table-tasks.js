import Component from '@glimmer/component';
import {action} from '@ember/object';

export default class TableTasks extends Component {
  @action
  link(id) {
    console.log('link args', this.args);
    this.args.linkTasks(id);
  }
}

