# MergeTicketingApi.EndUserDetailsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_user_email_address** | **String** |  | 
**end_user_organization_name** | **String** |  | 
**end_user_origin_id** | **String** |  | 
**categories** | [**[CategoriesEnum]**](CategoriesEnum.md) |  | 
**integration** | **String** | The slug of a specific pre-selected integration for this linking flow token, for examples of slugs see https://www.merge.dev/docs/basics/integration-metadata | [optional] 
**link_expiry_mins** | **Number** | An integer number of minutes between [30, 720] for how long this token is valid. Defaults to 30 | [optional] [default to 30]


