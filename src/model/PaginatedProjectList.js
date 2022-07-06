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
import Project from './Project';

/**
 * The PaginatedProjectList model module.
 * @module model/PaginatedProjectList
 * @version 1.0
 */
class PaginatedProjectList {
    /**
     * Constructs a new <code>PaginatedProjectList</code>.
     * @alias module:model/PaginatedProjectList
     */
    constructor() { 
        
        PaginatedProjectList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginatedProjectList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedProjectList} obj Optional instance to populate.
     * @return {module:model/PaginatedProjectList} The populated <code>PaginatedProjectList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginatedProjectList();

            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Project]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} next
 */
PaginatedProjectList.prototype['next'] = undefined;

/**
 * @member {String} previous
 */
PaginatedProjectList.prototype['previous'] = undefined;

/**
 * @member {Array.<module:model/Project>} results
 */
PaginatedProjectList.prototype['results'] = undefined;






export default PaginatedProjectList;
