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
    instance = new MergeTicketingApi.TicketsApi();
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

  describe('TicketsApi', function() {
    describe('ticketsCollaboratorsList', function() {
      it('should call ticketsCollaboratorsList successfully', function(done) {
        //uncomment below and update the code to test ticketsCollaboratorsList
        //instance.ticketsCollaboratorsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ticketsCreate', function() {
      it('should call ticketsCreate successfully', function(done) {
        //uncomment below and update the code to test ticketsCreate
        //instance.ticketsCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ticketsList', function() {
      it('should call ticketsList successfully', function(done) {
        //uncomment below and update the code to test ticketsList
        //instance.ticketsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ticketsMetaPostRetrieve', function() {
      it('should call ticketsMetaPostRetrieve successfully', function(done) {
        //uncomment below and update the code to test ticketsMetaPostRetrieve
        //instance.ticketsMetaPostRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ticketsRetrieve', function() {
      it('should call ticketsRetrieve successfully', function(done) {
        //uncomment below and update the code to test ticketsRetrieve
        //instance.ticketsRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
