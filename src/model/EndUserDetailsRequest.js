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
import CategoriesEnum from './CategoriesEnum';

/**
 * The EndUserDetailsRequest model module.
 * @module model/EndUserDetailsRequest
 * @version 1.0
 */
class EndUserDetailsRequest {
    /**
     * Constructs a new <code>EndUserDetailsRequest</code>.
     * @alias module:model/EndUserDetailsRequest
     * @param end_user_email_address {String} 
     * @param end_user_organization_name {String} 
     * @param end_user_origin_id {String} 
     * @param categories {Array.<module:model/CategoriesEnum>} 
     */
    constructor(end_user_email_address, end_user_organization_name, end_user_origin_id, categories) { 
        
        EndUserDetailsRequest.initialize(this, end_user_email_address, end_user_organization_name, end_user_origin_id, categories);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, end_user_email_address, end_user_organization_name, end_user_origin_id, categories) { 
        obj['end_user_email_address'] = end_user_email_address;
        obj['end_user_organization_name'] = end_user_organization_name;
        obj['end_user_origin_id'] = end_user_origin_id;
        obj['categories'] = categories;
    }

    /**
     * Constructs a <code>EndUserDetailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EndUserDetailsRequest} obj Optional instance to populate.
     * @return {module:model/EndUserDetailsRequest} The populated <code>EndUserDetailsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EndUserDetailsRequest();

            if (data.hasOwnProperty('end_user_email_address')) {
                obj['end_user_email_address'] = ApiClient.convertToType(data['end_user_email_address'], 'String');
            }
            if (data.hasOwnProperty('end_user_organization_name')) {
                obj['end_user_organization_name'] = ApiClient.convertToType(data['end_user_organization_name'], 'String');
            }
            if (data.hasOwnProperty('end_user_origin_id')) {
                obj['end_user_origin_id'] = ApiClient.convertToType(data['end_user_origin_id'], 'String');
            }
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], [CategoriesEnum]);
            }
            if (data.hasOwnProperty('integration')) {
                obj['integration'] = ApiClient.convertToType(data['integration'], 'String');
            }
            if (data.hasOwnProperty('link_expiry_mins')) {
                obj['link_expiry_mins'] = ApiClient.convertToType(data['link_expiry_mins'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} end_user_email_address
 */
EndUserDetailsRequest.prototype['end_user_email_address'] = undefined;

/**
 * @member {String} end_user_organization_name
 */
EndUserDetailsRequest.prototype['end_user_organization_name'] = undefined;

/**
 * @member {String} end_user_origin_id
 */
EndUserDetailsRequest.prototype['end_user_origin_id'] = undefined;

/**
 * @member {Array.<module:model/CategoriesEnum>} categories
 */
EndUserDetailsRequest.prototype['categories'] = undefined;

/**
 * The slug of a specific pre-selected integration for this linking flow token, for examples of slugs see https://www.merge.dev/docs/basics/integration-metadata
 * @member {String} integration
 */
EndUserDetailsRequest.prototype['integration'] = undefined;

/**
 * An integer number of minutes between [30, 720] for how long this token is valid. Defaults to 30
 * @member {Number} link_expiry_mins
 * @default 30
 */
EndUserDetailsRequest.prototype['link_expiry_mins'] = 30;






export default EndUserDetailsRequest;
