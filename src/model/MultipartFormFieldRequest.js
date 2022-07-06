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
import EncodingEnum from './EncodingEnum';

/**
 * The MultipartFormFieldRequest model module.
 * @module model/MultipartFormFieldRequest
 * @version 1.0
 */
class MultipartFormFieldRequest {
    /**
     * Constructs a new <code>MultipartFormFieldRequest</code>.
     * # The MultipartFormField Object ### Description The &#x60;MultipartFormField&#x60; object is used to represent fields in an HTTP request using &#x60;multipart/form-data&#x60;.  ### Usage Example Create a &#x60;MultipartFormField&#x60; to define a multipart form entry.
     * @alias module:model/MultipartFormFieldRequest
     * @param name {String} The name of the form field
     * @param data {String} The data for the form field.
     */
    constructor(name, data) { 
        
        MultipartFormFieldRequest.initialize(this, name, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, data) { 
        obj['name'] = name;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>MultipartFormFieldRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultipartFormFieldRequest} obj Optional instance to populate.
     * @return {module:model/MultipartFormFieldRequest} The populated <code>MultipartFormFieldRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultipartFormFieldRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('encoding')) {
                obj['encoding'] = ApiClient.convertToType(data['encoding'], EncodingEnum);
            }
            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the form field
 * @member {String} name
 */
MultipartFormFieldRequest.prototype['name'] = undefined;

/**
 * The data for the form field.
 * @member {String} data
 */
MultipartFormFieldRequest.prototype['data'] = undefined;

/**
 * The encoding of the value of `data`. Defaults to `RAW` if not defined.
 * @member {module:model/EncodingEnum} encoding
 */
MultipartFormFieldRequest.prototype['encoding'] = undefined;

/**
 * The file name of the form field, if the field is for a file.
 * @member {String} file_name
 */
MultipartFormFieldRequest.prototype['file_name'] = undefined;

/**
 * The MIME type of the file, if the field is for a file.
 * @member {String} content_type
 */
MultipartFormFieldRequest.prototype['content_type'] = undefined;






export default MultipartFormFieldRequest;

