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
import RemoteData from './RemoteData';

/**
 * The Comment model module.
 * @module model/Comment
 * @version 1.0
 */
class Comment {
    /**
     * Constructs a new <code>Comment</code>.
     * # The Comment Object ### Description The &#x60;Comment&#x60; object is used to represent a comment on a ticket.  ### Usage Example TODO
     * @alias module:model/Comment
     */
    constructor() { 
        
        Comment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Comment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Comment} obj Optional instance to populate.
     * @return {module:model/Comment} The populated <code>Comment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Comment();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('remote_id')) {
                obj['remote_id'] = ApiClient.convertToType(data['remote_id'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = ApiClient.convertToType(data['contact'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('html_body')) {
                obj['html_body'] = ApiClient.convertToType(data['html_body'], 'String');
            }
            if (data.hasOwnProperty('ticket')) {
                obj['ticket'] = ApiClient.convertToType(data['ticket'], 'String');
            }
            if (data.hasOwnProperty('is_private')) {
                obj['is_private'] = ApiClient.convertToType(data['is_private'], 'Boolean');
            }
            if (data.hasOwnProperty('remote_created_at')) {
                obj['remote_created_at'] = ApiClient.convertToType(data['remote_created_at'], 'Date');
            }
            if (data.hasOwnProperty('remote_data')) {
                obj['remote_data'] = ApiClient.convertToType(data['remote_data'], [RemoteData]);
            }
            if (data.hasOwnProperty('remote_was_deleted')) {
                obj['remote_was_deleted'] = ApiClient.convertToType(data['remote_was_deleted'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Comment.prototype['id'] = undefined;

/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */
Comment.prototype['remote_id'] = undefined;

/**
 * @member {String} user
 */
Comment.prototype['user'] = undefined;

/**
 * @member {String} contact
 */
Comment.prototype['contact'] = undefined;

/**
 * The comment's text body.
 * @member {String} body
 */
Comment.prototype['body'] = undefined;

/**
 * The comment's text body formatted as html.
 * @member {String} html_body
 */
Comment.prototype['html_body'] = undefined;

/**
 * @member {String} ticket
 */
Comment.prototype['ticket'] = undefined;

/**
 * Whether or not the comment is internal.
 * @member {Boolean} is_private
 */
Comment.prototype['is_private'] = undefined;

/**
 * When the third party's comment was created.
 * @member {Date} remote_created_at
 */
Comment.prototype['remote_created_at'] = undefined;

/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */
Comment.prototype['remote_data'] = undefined;

/**
 * @member {Boolean} remote_was_deleted
 */
Comment.prototype['remote_was_deleted'] = undefined;






export default Comment;

