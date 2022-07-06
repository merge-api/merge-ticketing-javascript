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
import Account from '../model/Account';
import PaginatedAccountList from '../model/PaginatedAccountList';

/**
* Accounts service.
* @module api/AccountsApi
* @version 1.0
*/
export default class AccountsApi {

    /**
    * Constructs a new AccountsApi. 
    * @alias module:api/AccountsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the accountsList operation.
     * @callback module:api/AccountsApi~accountsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedAccountList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of `Account` objects.
     * @param {String} x_account_token Token identifying the end user.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.created_after If provided, will only return objects created after this datetime.
     * @param {Date} opts.created_before If provided, will only return objects created before this datetime.
     * @param {String} opts.cursor The pagination cursor value.
     * @param {Boolean} opts.include_deleted_data Whether to include data that was marked as deleted by third party webhooks.
     * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {Date} opts.modified_after If provided, will only return objects modified after this datetime.
     * @param {Date} opts.modified_before If provided, will only return objects modified before this datetime.
     * @param {Number} opts.page_size Number of results to return per page.
     * @param {String} opts.remote_id The API provider's ID for the given object.
     * @param {module:api/AccountsApi~accountsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedAccountList}
     */
    accountsList(x_account_token, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'x_account_token' is set
      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling accountsList");
      }

      let pathParams = {
      };
      let queryParams = {
        'created_after': opts['created_after'],
        'created_before': opts['created_before'],
        'cursor': opts['cursor'],
        'include_deleted_data': opts['include_deleted_data'],
        'include_remote_data': opts['include_remote_data'],
        'modified_after': opts['modified_after'],
        'modified_before': opts['modified_before'],
        'page_size': opts['page_size'],
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
      let returnType = PaginatedAccountList;
      return this.apiClient.callApi(
        '/accounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the accountsRetrieve operation.
     * @callback module:api/AccountsApi~accountsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Account} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an `Account` object with the given `id`.
     * @param {String} x_account_token Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:api/AccountsApi~accountsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Account}
     */
    accountsRetrieve(x_account_token, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'x_account_token' is set
      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling accountsRetrieve");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling accountsRetrieve");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'include_remote_data': opts['include_remote_data']
      };
      let headerParams = {
        'X-Account-Token': x_account_token
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Account;
      return this.apiClient.callApi(
        '/accounts/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
