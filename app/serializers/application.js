import JSONSerializer from '@ember-data/serializer/json';
import { underscore } from '@ember/string';
import { get } from '@ember/object';

export default JSONSerializer.extend({
  // normalize(typeClass, hash) {
  //   var fields = get(typeClass, 'fields');

  //   fields.forEach(function(type, field) {
  //     var payloadField = underscore(field);
  //     if (field === payloadField) { return; }

  //     hash[field] = hash[payloadField];
  //     delete hash[payloadField];
  //   });

  //   return this._super.apply(this, arguments);
  // }
});