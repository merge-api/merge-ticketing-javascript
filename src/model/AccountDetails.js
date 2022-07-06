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
import CategoryEnum from './CategoryEnum';

/**
 * The AccountDetails model module.
 * @module model/AccountDetails
 * @version 1.0
 */
class AccountDetails {
    /**
     * Constructs a new <code>AccountDetails</code>.
     * @alias module:model/AccountDetails
     */
    constructor() { 
        
        AccountDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountDetails} obj Optional instance to populate.
     * @return {module:model/AccountDetails} The populated <code>AccountDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountDetails();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('integration')) {
                obj['integration'] = ApiClient.convertToType(data['integration'], 'String');
            }
            if (data.hasOwnProperty('integration_slug')) {
                obj['integration_slug'] = ApiClient.convertToType(data['integration_slug'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], CategoryEnum);
            }
            if (data.hasOwnProperty('end_user_origin_id')) {
                obj['end_user_origin_id'] = ApiClient.convertToType(data['end_user_origin_id'], 'String');
            }
            if (data.hasOwnProperty('end_user_organization_name')) {
                obj['end_user_organization_name'] = ApiClient.convertToType(data['end_user_organization_name'], 'String');
            }
            if (data.hasOwnProperty('end_user_email_address')) {
                obj['end_user_email_address'] = ApiClient.convertToType(data['end_user_email_address'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('webhook_listener_url')) {
                obj['webhook_listener_url'] = ApiClient.convertToType(data['webhook_listener_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
AccountDetails.prototype['id'] = undefined;

/**
 * @member {String} integration
 */
AccountDetails.prototype['integration'] = undefined;

/**
 * @member {String} integration_slug
 */
AccountDetails.prototype['integration_slug'] = undefined;

/**
 * @member {module:model/CategoryEnum} category
 */
AccountDetails.prototype['category'] = undefined;

/**
 * @member {String} end_user_origin_id
 */
AccountDetails.prototype['end_user_origin_id'] = undefined;

/**
 * @member {String} end_user_organization_name
 */
AccountDetails.prototype['end_user_organization_name'] = undefined;

/**
 * @member {String} end_user_email_address
 */
AccountDetails.prototype['end_user_email_address'] = undefined;

/**
 * @member {String} status
 */
AccountDetails.prototype['status'] = undefined;

/**
 * @member {String} webhook_listener_url
 */
AccountDetails.prototype['webhook_listener_url'] = undefined;






export default AccountDetails;

