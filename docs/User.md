# MergeTicketingApi.User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**remote_id** | **String** | The third-party API ID of the matching object. | [optional] 
**name** | **String** | The user&#39;s name. | [optional] 
**email_address** | **String** | The user&#39;s email address. | [optional] 
**is_active** | **Boolean** | Whether or not the user is active. | [optional] 
**teams** | **[String]** |  | [optional] 
**remote_data** | [**[RemoteData]**](RemoteData.md) |  | [optional] [readonly] 
**remote_was_deleted** | **Boolean** | Indicates whether or not this object has been deleted by third party webhooks. | [optional] [readonly] 


