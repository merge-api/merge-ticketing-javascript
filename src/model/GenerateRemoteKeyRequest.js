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
 * The GenerateRemoteKeyRequest model module.
 * @module model/GenerateRemoteKeyRequest
 * @version 1.0
 */
class GenerateRemoteKeyRequest {
    /**
     * Constructs a new <code>GenerateRemoteKeyRequest</code>.
     * # The GenerateRemoteKey Object ### Description The &#x60;GenerateRemoteKey&#x60; object is used to represent a request for a new remote key.  ### Usage Example Post a &#x60;GenerateRemoteKey&#x60; to create a new remote key.
     * @alias module:model/GenerateRemoteKeyRequest
     * @param name {String} 
     */
    constructor(name) { 
        
        GenerateRemoteKeyRequest.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GenerateRemoteKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateRemoteKeyRequest} obj Optional instance to populate.
     * @return {module:model/GenerateRemoteKeyRequest} The populated <code>GenerateRemoteKeyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenerateRemoteKeyRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
GenerateRemoteKeyRequest.prototype['name'] = undefined;






export default GenerateRemoteKeyRequest;

