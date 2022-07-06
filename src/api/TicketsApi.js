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


import ApiClient from "../ApiClient";
import MetaResponse from '../model/MetaResponse';
import PaginatedTicketList from '../model/PaginatedTicketList';
import PaginatedUserList from '../model/PaginatedUserList';
import Ticket from '../model/Ticket';
import TicketEndpointRequest from '../model/TicketEndpointRequest';
import TicketResponse from '../model/TicketResponse';

/**
* Tickets service.
* @module api/TicketsApi
* @version 1.0
*/
export default class TicketsApi {

    /**
    * Constructs a new TicketsApi. 
    * @alias module:api/TicketsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ticketsCollaboratorsList operation.
     * @callback module:api/TicketsApi~ticketsCollaboratorsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedUserList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a `User` object with the given `id`.
     * @param {String} x_account_token Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor The pagination cursor value.
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {Number} opts.page_size Number of results to return per page.
     * @param {module:api/TicketsApi~ticketsCollaboratorsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedUserList}
     */
    ticketsCollaboratorsList(x_account_token, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'x_account_token' is set
      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling ticketsCollaboratorsList");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling ticketsCollaboratorsList");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'cursor': opts['cursor'],
        'expand': opts['expand'],
        'include_remote_data': opts['include_remote_data'],
        'page_size': opts['page_size']
      };
      let headerParams = {
        'X-Account-Token': x_account_token
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedUserList;
      return this.apiClient.callApi(
        '/tickets/{id}/collaborators', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ticketsCreate operation.
     * @callback module:api/TicketsApi~ticketsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TicketResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a `Ticket` object with the given values.
     * @param {String} x_account_token Token identifying the end user.
     * @param {module:model/TicketEndpointRequest} ticket_endpoint_request 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.is_debug_mode Whether to include debug fields (such as log file links) in the response.
     * @param {Boolean} opts.run_async Whether or not third-party updates should be run asynchronously.
     * @param {module:api/TicketsApi~ticketsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TicketResponse}
     */
    ticketsCreate(x_account_token, ticket_endpoint_request, opts, callback) {
      opts = opts || {};
      let postBody = ticket_endpoint_request;
      // verify the required parameter 'x_account_token' is set
      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling ticketsCreate");
      }
      // verify the required parameter 'ticket_endpoint_request' is set
      if (ticket_endpoint_request === undefined || ticket_endpoint_request === null) {
        throw new Error("Missing the required parameter 'ticket_endpoint_request' when calling ticketsCreate");
      }

      let pathParams = {
      };
      let queryParams = {
        'is_debug_mode': opts['is_debug_mode'],
        'run_async': opts['run_async']
      };
      let headerParams = {
        'X-Account-Token': x_account_token
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = TicketResponse;
      return this.apiClient.callApi(
        '/tickets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ticketsList operation.
     * @callback module:api/TicketsApi~ticketsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedTicketList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of `Ticket` objects.
     * @param {String} x_account_token Token identifying the end user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.account_id If provided, will only return tickets for this account.
     * @param {Date} opts.created_after If provided, will only return objects created after this datetime.
     * @param {Date} opts.created_before If provided, will only return objects created before this datetime.
     * @param {String} opts.cursor The pagination cursor value.
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.include_deleted_data Whether to include data that was marked as deleted by third party webhooks.
     * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {Date} opts.modified_after If provided, will only return objects modified after this datetime.
     * @param {Date} opts.modified_before If provided, will only return objects modified before this datetime.
     * @param {Number} opts.page_size Number of results to return per page.
     * @param {String} opts.project_id If provided, will only return tickets for this project.
     * @param {module:model/String} opts.remote_fields Which fields should be returned in non-normalized form.
     * @param {String} opts.remote_id The API provider's ID for the given object.
     * @param {module:api/TicketsApi~ticketsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedTicketList}
     */
    ticketsList(x_account_token, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'x_account_token' is set
      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling ticketsList");
      }

      let pathParams = {
      };
      let queryParams = {
        'account_id': opts['account_id'],
        'created_after': opts['created_after'],
        'created_before': opts['created_before'],
        'cursor': opts['cursor'],
        'expand': opts['expand'],
        'include_deleted_data': opts['include_deleted_data'],
        'include_remote_data': opts['include_remote_data'],
        'modified_after': opts['modified_after'],
        'modified_before': opts['modified_before'],
        'page_size': opts['page_size'],
        'project_id': opts['project_id'],
        'remote_fields': opts['remote_fields'],
        'remote_id': opts['remote_id']
      };
      let headerParams = {
        'X-Account-Token': x_account_token
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedTicketList;
      return this.apiClient.callApi(
        '/tickets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ticketsMetaPostRetrieve operation.
     * @callback module:api/TicketsApi~ticketsMetaPostRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns metadata for `Ticket` POSTs.
     * @param {String} x_account_token Token identifying the end user.
     * @param {module:api/TicketsApi~ticketsMetaPostRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetaResponse}
     */
    ticketsMetaPostRetrieve(x_account_token, callback) {
      let postBody = null;
      // verify the required parameter 'x_account_token' is set
      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling ticketsMetaPostRetrieve");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Account-Token': x_account_token
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MetaResponse;
      return this.apiClient.callApi(
        '/tickets/meta/post', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ticketsRetrieve operation.
     * @callback module:api/TicketsApi~ticketsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Ticket} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a `Ticket` object with the given `id`.
     * @param {String} x_account_token Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:model/String} opts.remote_fields Which fields should be returned in non-normalized form.
     * @param {module:api/TicketsApi~ticketsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Ticket}
     */
    ticketsRetrieve(x_account_token, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'x_account_token' is set
      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling ticketsRetrieve");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling ticketsRetrieve");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'expand': opts['expand'],
        'include_remote_data': opts['include_remote_data'],
        'remote_fields': opts['remote_fields']
      };
      let headerParams = {
        'X-Account-Token': x_account_token
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Ticket;
      return this.apiClient.callApi(
        '/tickets/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}