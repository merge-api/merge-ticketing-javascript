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
    instance = new MergeTicketingApi.RemoteResponse();
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

  describe('RemoteResponse', function() {
    it('should create an instance of RemoteResponse', function() {
      // uncomment below and update the code to test RemoteResponse
      //var instane = new MergeTicketingApi.RemoteResponse();
      //expect(instance).to.be.a(MergeTicketingApi.RemoteResponse);
    });

    it('should have the property method (base name: "method")', function() {
      // uncomment below and update the code to test the property method
      //var instance = new MergeTicketingApi.RemoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instance = new MergeTicketingApi.RemoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new MergeTicketingApi.RemoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property response (base name: "response")', function() {
      // uncomment below and update the code to test the property response
      //var instance = new MergeTicketingApi.RemoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property response_headers (base name: "response_headers")', function() {
      // uncomment below and update the code to test the property response_headers
      //var instance = new MergeTicketingApi.RemoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property headers (base name: "headers")', function() {
      // uncomment below and update the code to test the property headers
      //var instance = new MergeTicketingApi.RemoteResponse();
      //expect(instance).to.be();
    });

  });

}));
