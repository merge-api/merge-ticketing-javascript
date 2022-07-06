# MergeTicketingApi.Contact

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**remote_id** | **String** | The third-party API ID of the matching object. | [optional] 
**name** | **String** | The contact&#39;s name. | [optional] 
**email_address** | **String** | The contact&#39;s email address. | [optional] 
**phone_number** | **String** | The contact&#39;s phone number. | [optional] 
**details** | **String** | The contact&#39;s details. | [optional] 
**account** | **String** | The contact&#39;s account. | [optional] 
**remote_data** | [**[RemoteData]**](RemoteData.md) |  | [optional] [readonly] 
**remote_was_deleted** | **Boolean** | Indicates whether or not this object has been deleted by third party webhooks. | [optional] [readonly] 


