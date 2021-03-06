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
    instance = new MergeTicketingApi.CommentRequest();
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

  describe('CommentRequest', function() {
    it('should create an instance of CommentRequest', function() {
      // uncomment below and update the code to test CommentRequest
      //var instane = new MergeTicketingApi.CommentRequest();
      //expect(instance).to.be.a(MergeTicketingApi.CommentRequest);
    });

    it('should have the property remote_id (base name: "remote_id")', function() {
      // uncomment below and update the code to test the property remote_id
      //var instance = new MergeTicketingApi.CommentRequest();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new MergeTicketingApi.CommentRequest();
      //expect(instance).to.be();
    });

    it('should have the property contact (base name: "contact")', function() {
      // uncomment below and update the code to test the property contact
      //var instance = new MergeTicketingApi.CommentRequest();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instance = new MergeTicketingApi.CommentRequest();
      //expect(instance).to.be();
    });

    it('should have the property html_body (base name: "html_body")', function() {
      // uncomment below and update the code to test the property html_body
      //var instance = new MergeTicketingApi.CommentRequest();
      //expect(instance).to.be();
    });

    it('should have the property ticket (base name: "ticket")', function() {
      // uncomment below and update the code to test the property ticket
      //var instance = new MergeTicketingApi.CommentRequest();
      //expect(instance).to.be();
    });

    it('should have the property is_private (base name: "is_private")', function() {
      // uncomment below and update the code to test the property is_private
      //var instance = new MergeTicketingApi.CommentRequest();
      //expect(instance).to.be();
    });

    it('should have the property remote_created_at (base name: "remote_created_at")', function() {
      // uncomment below and update the code to test the property remote_created_at
      //var instance = new MergeTicketingApi.CommentRequest();
      //expect(instance).to.be();
    });

  });

}));
