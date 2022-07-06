# MergeTicketingApi.TicketRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remote_id** | **String** | The third-party API ID of the matching object. | [optional] 
**name** | **String** | The ticket&#39;s name. | [optional] 
**assignees** | **[String]** |  | [optional] 
**due_date** | **Date** | The ticket&#39;s due date. | [optional] 
**status** | [**TicketStatusEnum**](TicketStatusEnum.md) | The current status of the ticket. | [optional] 
**description** | **String** | The ticket&#39;s description. | [optional] 
**project** | **String** |  | [optional] 
**ticket_type** | **String** | The ticket&#39;s type. | [optional] 
**account** | **String** |  | [optional] 
**contact** | **String** |  | [optional] 
**parent_ticket** | **String** |  | [optional] 
**attachments** | **[String]** |  | [optional] 
**tags** | **[String]** |  | [optional] 
**remote_created_at** | **Date** | When the third party&#39;s ticket was created. | [optional] 
**remote_updated_at** | **Date** | When the third party&#39;s ticket was updated. | [optional] 


