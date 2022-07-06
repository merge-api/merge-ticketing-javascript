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
import LinkedAccountStatus from './LinkedAccountStatus';

/**
 * The MetaResponse model module.
 * @module model/MetaResponse
 * @version 1.0
 */
class MetaResponse {
    /**
     * Constructs a new <code>MetaResponse</code>.
     * @alias module:model/MetaResponse
     * @param request_schema {Object.<String, Object>} 
     * @param has_conditional_params {Boolean} 
     * @param has_required_linked_account_params {Boolean} 
     */
    constructor(request_schema, has_conditional_params, has_required_linked_account_params) { 
        
        MetaResponse.initialize(this, request_schema, has_conditional_params, has_required_linked_account_params);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, request_schema, has_conditional_params, has_required_linked_account_params) { 
        obj['request_schema'] = request_schema;
        obj['has_conditional_params'] = has_conditional_params;
        obj['has_required_linked_account_params'] = has_required_linked_account_params;
    }

    /**
     * Constructs a <code>MetaResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaResponse} obj Optional instance to populate.
     * @return {module:model/MetaResponse} The populated <code>MetaResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaResponse();

            if (data.hasOwnProperty('request_schema')) {
                obj['request_schema'] = ApiClient.convertToType(data['request_schema'], {'String': Object});
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = LinkedAccountStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('has_conditional_params')) {
                obj['has_conditional_params'] = ApiClient.convertToType(data['has_conditional_params'], 'Boolean');
            }
            if (data.hasOwnProperty('has_required_linked_account_params')) {
                obj['has_required_linked_account_params'] = ApiClient.convertToType(data['has_required_linked_account_params'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, Object>} request_schema
 */
MetaResponse.prototype['request_schema'] = undefined;

/**
 * @member {module:model/LinkedAccountStatus} status
 */
MetaResponse.prototype['status'] = undefined;

/**
 * @member {Boolean} has_conditional_params
 */
MetaResponse.prototype['has_conditional_params'] = undefined;

/**
 * @member {Boolean} has_required_linked_account_params
 */
MetaResponse.prototype['has_required_linked_account_params'] = undefined;






export default MetaResponse;
