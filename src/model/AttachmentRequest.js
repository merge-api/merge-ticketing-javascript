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
 * The AttachmentRequest model module.
 * @module model/AttachmentRequest
 * @version 1.0
 */
class AttachmentRequest {
    /**
     * Constructs a new <code>AttachmentRequest</code>.
     * # The Attachment Object ### Description The &#x60;Attachment&#x60; object is used to represent an attachment for a ticket.  ### Usage Example TODO
     * @alias module:model/AttachmentRequest
     */
    constructor() { 
        
        AttachmentRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttachmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentRequest} obj Optional instance to populate.
     * @return {module:model/AttachmentRequest} The populated <code>AttachmentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttachmentRequest();

            if (data.hasOwnProperty('remote_id')) {
                obj['remote_id'] = ApiClient.convertToType(data['remote_id'], 'String');
            }
            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
            if (data.hasOwnProperty('ticket')) {
                obj['ticket'] = ApiClient.convertToType(data['ticket'], 'String');
            }
            if (data.hasOwnProperty('file_url')) {
                obj['file_url'] = ApiClient.convertToType(data['file_url'], 'String');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
            if (data.hasOwnProperty('uploaded_by')) {
                obj['uploaded_by'] = ApiClient.convertToType(data['uploaded_by'], 'String');
            }
            if (data.hasOwnProperty('remote_created_at')) {
                obj['remote_created_at'] = ApiClient.convertToType(data['remote_created_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */
AttachmentRequest.prototype['remote_id'] = undefined;

/**
 * The attachment's name.
 * @member {String} file_name
 */
AttachmentRequest.prototype['file_name'] = undefined;

/**
 * @member {String} ticket
 */
AttachmentRequest.prototype['ticket'] = undefined;

/**
 * The attachment's url.
 * @member {String} file_url
 */
AttachmentRequest.prototype['file_url'] = undefined;

/**
 * The attachment's file format.
 * @member {String} content_type
 */
AttachmentRequest.prototype['content_type'] = undefined;

/**
 * @member {String} uploaded_by
 */
AttachmentRequest.prototype['uploaded_by'] = undefined;

/**
 * When the third party's attachment was created.
 * @member {Date} remote_created_at
 */
AttachmentRequest.prototype['remote_created_at'] = undefined;






export default AttachmentRequest;
