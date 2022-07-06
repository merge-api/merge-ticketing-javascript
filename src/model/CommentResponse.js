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
import Comment from './Comment';
import DebugModeLog from './DebugModeLog';
import ErrorValidationProblem from './ErrorValidationProblem';
import WarningValidationProblem from './WarningValidationProblem';

/**
 * The CommentResponse model module.
 * @module model/CommentResponse
 * @version 1.0
 */
class CommentResponse {
    /**
     * Constructs a new <code>CommentResponse</code>.
     * @alias module:model/CommentResponse
     * @param model {module:model/Comment} 
     * @param warnings {Array.<module:model/WarningValidationProblem>} 
     * @param errors {Array.<module:model/ErrorValidationProblem>} 
     */
    constructor(model, warnings, errors) { 
        
        CommentResponse.initialize(this, model, warnings, errors);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, model, warnings, errors) { 
        obj['model'] = model;
        obj['warnings'] = warnings;
        obj['errors'] = errors;
    }

    /**
     * Constructs a <code>CommentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommentResponse} obj Optional instance to populate.
     * @return {module:model/CommentResponse} The populated <code>CommentResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommentResponse();

            if (data.hasOwnProperty('model')) {
                obj['model'] = Comment.constructFromObject(data['model']);
            }
            if (data.hasOwnProperty('warnings')) {
                obj['warnings'] = ApiClient.convertToType(data['warnings'], [WarningValidationProblem]);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [ErrorValidationProblem]);
            }
            if (data.hasOwnProperty('logs')) {
                obj['logs'] = ApiClient.convertToType(data['logs'], [DebugModeLog]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Comment} model
 */
CommentResponse.prototype['model'] = undefined;

/**
 * @member {Array.<module:model/WarningValidationProblem>} warnings
 */
CommentResponse.prototype['warnings'] = undefined;

/**
 * @member {Array.<module:model/ErrorValidationProblem>} errors
 */
CommentResponse.prototype['errors'] = undefined;

/**
 * @member {Array.<module:model/DebugModeLog>} logs
 */
CommentResponse.prototype['logs'] = undefined;






export default CommentResponse;

