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
 * The LinkToken model module.
 * @module model/LinkToken
 * @version 1.0
 */
class LinkToken {
    /**
     * Constructs a new <code>LinkToken</code>.
     * @alias module:model/LinkToken
     * @param link_token {String} 
     * @param integration_name {String} 
     */
    constructor(link_token, integration_name) { 
        
        LinkToken.initialize(this, link_token, integration_name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, link_token, integration_name) { 
        obj['link_token'] = link_token;
        obj['integration_name'] = integration_name;
    }

    /**
     * Constructs a <code>LinkToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkToken} obj Optional instance to populate.
     * @return {module:model/LinkToken} The populated <code>LinkToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkToken();

            if (data.hasOwnProperty('link_token')) {
                obj['link_token'] = ApiClient.convertToType(data['link_token'], 'String');
            }
            if (data.hasOwnProperty('integration_name')) {
                obj['integration_name'] = ApiClient.convertToType(data['integration_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} link_token
 */
LinkToken.prototype['link_token'] = undefined;

/**
 * @member {String} integration_name
 */
LinkToken.prototype['integration_name'] = undefined;






export default LinkToken;
