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
import User from './User';

/**
 * The PaginatedUserList model module.
 * @module model/PaginatedUserList
 * @version 1.0
 */
class PaginatedUserList {
    /**
     * Constructs a new <code>PaginatedUserList</code>.
     * @alias module:model/PaginatedUserList
     */
    constructor() { 
        
        PaginatedUserList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginatedUserList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedUserList} obj Optional instance to populate.
     * @return {module:model/PaginatedUserList} The populated <code>PaginatedUserList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginatedUserList();

            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [User]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} next
 */
PaginatedUserList.prototype['next'] = undefined;

/**
 * @member {String} previous
 */
PaginatedUserList.prototype['previous'] = undefined;

/**
 * @member {Array.<module:model/User>} results
 */
PaginatedUserList.prototype['results'] = undefined;






export default PaginatedUserList;
