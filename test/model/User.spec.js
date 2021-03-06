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
    instance = new MergeTicketingApi.User();
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

  describe('User', function() {
    it('should create an instance of User', function() {
      // uncomment below and update the code to test User
      //var instane = new MergeTicketingApi.User();
      //expect(instance).to.be.a(MergeTicketingApi.User);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new MergeTicketingApi.User();
      //expect(instance).to.be();
    });

    it('should have the property remote_id (base name: "remote_id")', function() {
      // uncomment below and update the code to test the property remote_id
      //var instance = new MergeTicketingApi.User();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new MergeTicketingApi.User();
      //expect(instance).to.be();
    });

    it('should have the property email_address (base name: "email_address")', function() {
      // uncomment below and update the code to test the property email_address
      //var instance = new MergeTicketingApi.User();
      //expect(instance).to.be();
    });

    it('should have the property is_active (base name: "is_active")', function() {
      // uncomment below and update the code to test the property is_active
      //var instance = new MergeTicketingApi.User();
      //expect(instance).to.be();
    });

    it('should have the property teams (base name: "teams")', function() {
      // uncomment below and update the code to test the property teams
      //var instance = new MergeTicketingApi.User();
      //expect(instance).to.be();
    });

    it('should have the property remote_data (base name: "remote_data")', function() {
      // uncomment below and update the code to test the property remote_data
      //var instance = new MergeTicketingApi.User();
      //expect(instance).to.be();
    });

    it('should have the property remote_was_deleted (base name: "remote_was_deleted")', function() {
      // uncomment below and update the code to test the property remote_was_deleted
      //var instance = new MergeTicketingApi.User();
      //expect(instance).to.be();
    });

  });

}));
