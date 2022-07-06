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
    instance = new MergeTicketingApi.AccountDetailsAndActions();
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

  describe('AccountDetailsAndActions', function() {
    it('should create an instance of AccountDetailsAndActions', function() {
      // uncomment below and update the code to test AccountDetailsAndActions
      //var instane = new MergeTicketingApi.AccountDetailsAndActions();
      //expect(instance).to.be.a(MergeTicketingApi.AccountDetailsAndActions);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new MergeTicketingApi.AccountDetailsAndActions();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instance = new MergeTicketingApi.AccountDetailsAndActions();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new MergeTicketingApi.AccountDetailsAndActions();
      //expect(instance).to.be();
    });

    it('should have the property status_detail (base name: "status_detail")', function() {
      // uncomment below and update the code to test the property status_detail
      //var instance = new MergeTicketingApi.AccountDetailsAndActions();
      //expect(instance).to.be();
    });

    it('should have the property end_user_origin_id (base name: "end_user_origin_id")', function() {
      // uncomment below and update the code to test the property end_user_origin_id
      //var instance = new MergeTicketingApi.AccountDetailsAndActions();
      //expect(instance).to.be();
    });

    it('should have the property end_user_organization_name (base name: "end_user_organization_name")', function() {
      // uncomment below and update the code to test the property end_user_organization_name
      //var instance = new MergeTicketingApi.AccountDetailsAndActions();
      //expect(instance).to.be();
    });

    it('should have the property end_user_email_address (base name: "end_user_email_address")', function() {
      // uncomment below and update the code to test the property end_user_email_address
      //var instance = new MergeTicketingApi.AccountDetailsAndActions();
      //expect(instance).to.be();
    });

    it('should have the property webhook_listener_url (base name: "webhook_listener_url")', function() {
      // uncomment below and update the code to test the property webhook_listener_url
      //var instance = new MergeTicketingApi.AccountDetailsAndActions();
      //expect(instance).to.be();
    });

    it('should have the property integration (base name: "integration")', function() {
      // uncomment below and update the code to test the property integration
      //var instance = new MergeTicketingApi.AccountDetailsAndActions();
      //expect(instance).to.be();
    });

  });

}));