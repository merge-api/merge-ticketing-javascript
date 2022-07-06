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
import DataPassthroughRequest from '../model/DataPassthroughRequest';
import RemoteResponse from '../model/RemoteResponse';

/**
* Passthrough service.
* @module api/PassthroughApi
* @version 1.0
*/
export default class PassthroughApi {

    /**
    * Constructs a new PassthroughApi. 
    * @alias module:api/PassthroughApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the passthroughCreate operation.
     * @callback module:api/PassthroughApi~passthroughCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemoteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pull data from an endpoint not currently supported by Merge.
     * @param {String} x_account_token Token identifying the end user.
     * @param {module:model/DataPassthroughRequest} data_passthrough_request 
     * @param {module:api/PassthroughApi~passthroughCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemoteResponse}
     */
    passthroughCreate(x_account_token, data_passthrough_request, callback) {
      let postBody = data_passthrough_request;
      // verify the required parameter 'x_account_token' is set
      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling passthroughCreate");
      }
      // verify the required parameter 'data_passthrough_request' is set
      if (data_passthrough_request === undefined || data_passthrough_request === null) {
        throw new Error("Missing the required parameter 'data_passthrough_request' when calling passthroughCreate");
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
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = RemoteResponse;
      return this.apiClient.callApi(
        '/passthrough', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
