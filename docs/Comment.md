# MergeTicketingApi.Comment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**remote_id** | **String** | The third-party API ID of the matching object. | [optional] 
**user** | **String** |  | [optional] 
**contact** | **String** |  | [optional] 
**body** | **String** | The comment&#39;s text body. | [optional] 
**html_body** | **String** | The comment&#39;s text body formatted as html. | [optional] 
**ticket** | **String** |  | [optional] 
**is_private** | **Boolean** | Whether or not the comment is internal. | [optional] 
**remote_created_at** | **Date** | When the third party&#39;s comment was created. | [optional] 
**remote_data** | [**[RemoteData]**](RemoteData.md) |  | [optional] [readonly] 
**remote_was_deleted** | **Boolean** |  | [optional] [readonly] 


