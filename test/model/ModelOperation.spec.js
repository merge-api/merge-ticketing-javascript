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
    instance = new MergeTicketingApi.ModelOperation();
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

  describe('ModelOperation', function() {
    it('should create an instance of ModelOperation', function() {
      // uncomment below and update the code to test ModelOperation
      //var instane = new MergeTicketingApi.ModelOperation();
      //expect(instance).to.be.a(MergeTicketingApi.ModelOperation);
    });

    it('should have the property model_name (base name: "model_name")', function() {
      // uncomment below and update the code to test the property model_name
      //var instance = new MergeTicketingApi.ModelOperation();
      //expect(instance).to.be();
    });

    it('should have the property available_operations (base name: "available_operations")', function() {
      // uncomment below and update the code to test the property available_operations
      //var instance = new MergeTicketingApi.ModelOperation();
      //expect(instance).to.be();
    });

    it('should have the property required_post_parameters (base name: "required_post_parameters")', function() {
      // uncomment below and update the code to test the property required_post_parameters
      //var instance = new MergeTicketingApi.ModelOperation();
      //expect(instance).to.be();
    });

    it('should have the property supported_fields (base name: "supported_fields")', function() {
      // uncomment below and update the code to test the property supported_fields
      //var instance = new MergeTicketingApi.ModelOperation();
      //expect(instance).to.be();
    });

  });

}));
