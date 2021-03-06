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
import AttachmentRequest from './AttachmentRequest';

/**
 * The TicketingAttachmentEndpointRequest model module.
 * @module model/TicketingAttachmentEndpointRequest
 * @version 1.0
 */
class TicketingAttachmentEndpointRequest {
    /**
     * Constructs a new <code>TicketingAttachmentEndpointRequest</code>.
     * @alias module:model/TicketingAttachmentEndpointRequest
     * @param model {module:model/AttachmentRequest} 
     */
    constructor(model) { 
        
        TicketingAttachmentEndpointRequest.initialize(this, model);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, model) { 
        obj['model'] = model;
    }

    /**
     * Constructs a <code>TicketingAttachmentEndpointRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TicketingAttachmentEndpointRequest} obj Optional instance to populate.
     * @return {module:model/TicketingAttachmentEndpointRequest} The populated <code>TicketingAttachmentEndpointRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TicketingAttachmentEndpointRequest();

            if (data.hasOwnProperty('model')) {
                obj['model'] = AttachmentRequest.constructFromObject(data['model']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/AttachmentRequest} model
 */
TicketingAttachmentEndpointRequest.prototype['model'] = undefined;






export default TicketingAttachmentEndpointRequest;

