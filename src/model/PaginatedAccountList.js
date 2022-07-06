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
import Account from './Account';

/**
 * The PaginatedAccountList model module.
 * @module model/PaginatedAccountList
 * @version 1.0
 */
class PaginatedAccountList {
    /**
     * Constructs a new <code>PaginatedAccountList</code>.
     * @alias module:model/PaginatedAccountList
     */
    constructor() { 
        
        PaginatedAccountList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginatedAccountList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedAccountList} obj Optional instance to populate.
     * @return {module:model/PaginatedAccountList} The populated <code>PaginatedAccountList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginatedAccountList();

            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Account]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} next
 */
PaginatedAccountList.prototype['next'] = undefined;

/**
 * @member {String} previous
 */
PaginatedAccountList.prototype['previous'] = undefined;

/**
 * @member {Array.<module:model/Account>} results
 */
PaginatedAccountList.prototype['results'] = undefined;






export default PaginatedAccountList;
