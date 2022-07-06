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
import AccountToken from '../model/AccountToken';

/**
* AccountToken service.
* @module api/AccountTokenApi
* @version 1.0
*/
export default class AccountTokenApi {

    /**
    * Constructs a new AccountTokenApi. 
    * @alias module:api/AccountTokenApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the accountTokenRetrieve operation.
     * @callback module:api/AccountTokenApi~accountTokenRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the account token for the end user with the provided public token.
     * @param {String} public_token 
     * @param {module:api/AccountTokenApi~accountTokenRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountToken}
     */
    accountTokenRetrieve(public_token, callback) {
      let postBody = null;
      // verify the required parameter 'public_token' is set
      if (public_token === undefined || public_token === null) {
        throw new Error("Missing the required parameter 'public_token' when calling accountTokenRetrieve");
      }

      let pathParams = {
        'public_token': public_token
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AccountToken;
      return this.apiClient.callApi(
        '/account-token/{public_token}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
