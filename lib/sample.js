define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(sample);

  /**
   * Module function
   */

  function sample() {
    this.defaultAttrs({

    });

    this.after('initialize', function () {

    });
  }

});
