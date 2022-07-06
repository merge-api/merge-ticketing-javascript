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

import ApiClient from '../ApiClient';

/**
 * The RemoteResponse model module.
 * @module model/RemoteResponse
 * @version 1.0
 */
class RemoteResponse {
    /**
     * Constructs a new <code>RemoteResponse</code>.
     * # The RemoteResponse Object ### Description The &#x60;RemoteResponse&#x60; object is used to represent information returned from a third-party endpoint.  ### Usage Example View the &#x60;RemoteResponse&#x60; returned from your &#x60;DataPassthrough&#x60;.
     * @alias module:model/RemoteResponse
     * @param method {String} 
     * @param path {String} 
     * @param status {Number} 
     * @param response {Object.<String, Object>} 
     */
    constructor(method, path, status, response) { 
        
        RemoteResponse.initialize(this, method, path, status, response);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, method, path, status, response) { 
        obj['method'] = method;
        obj['path'] = path;
        obj['status'] = status;
        obj['response'] = response;
    }

    /**
     * Constructs a <code>RemoteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoteResponse} obj Optional instance to populate.
     * @return {module:model/RemoteResponse} The populated <code>RemoteResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RemoteResponse();

            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = ApiClient.convertToType(data['response'], {'String': Object});
            }
            if (data.hasOwnProperty('response_headers')) {
                obj['response_headers'] = ApiClient.convertToType(data['response_headers'], {'String': Object});
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * @member {String} method
 */
RemoteResponse.prototype['method'] = undefined;

/**
 * @member {String} path
 */
RemoteResponse.prototype['path'] = undefined;

/**
 * @member {Number} status
 */
RemoteResponse.prototype['status'] = undefined;

/**
 * @member {Object.<String, Object>} response
 */
RemoteResponse.prototype['response'] = undefined;

/**
 * @member {Object.<String, Object>} response_headers
 */
RemoteResponse.prototype['response_headers'] = undefined;

/**
 * @member {Object.<String, Object>} headers
 */
RemoteResponse.prototype['headers'] = undefined;






export default RemoteResponse;
