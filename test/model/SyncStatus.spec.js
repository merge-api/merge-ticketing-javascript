/**
 * Merge Ticketing API
 * The unified API for building rich integrations with multiple Ticketing platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MergeTicketingApi);
  }
}(this, function(expect, MergeTicketingApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MergeTicketingApi.SyncStatus();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SyncStatus', function() {
    it('should create an instance of SyncStatus', function() {
      // uncomment below and update the code to test SyncStatus
      //var instane = new MergeTicketingApi.SyncStatus();
      //expect(instance).to.be.a(MergeTicketingApi.SyncStatus);
    });

    it('should have the property model_name (base name: "model_name")', function() {
      // uncomment below and update the code to test the property model_name
      //var instance = new MergeTicketingApi.SyncStatus();
      //expect(instance).to.be();
    });

    it('should have the property model_id (base name: "model_id")', function() {
      // uncomment below and update the code to test the property model_id
      //var instance = new MergeTicketingApi.SyncStatus();
      //expect(instance).to.be();
    });

    it('should have the property last_sync_start (base name: "last_sync_start")', function() {
      // uncomment below and update the code to test the property last_sync_start
      //var instance = new MergeTicketingApi.SyncStatus();
      //expect(instance).to.be();
    });

    it('should have the property next_sync_start (base name: "next_sync_start")', function() {
      // uncomment below and update the code to test the property next_sync_start
      //var instance = new MergeTicketingApi.SyncStatus();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new MergeTicketingApi.SyncStatus();
      //expect(instance).to.be();
    });

    it('should have the property is_initial_sync (base name: "is_initial_sync")', function() {
      // uncomment below and update the code to test the property is_initial_sync
      //var instance = new MergeTicketingApi.SyncStatus();
      //expect(instance).to.be();
    });

  });

}));
