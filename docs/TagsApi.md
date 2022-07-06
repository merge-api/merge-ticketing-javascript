# MergeTicketingApi.TagsApi

All URIs are relative to *https://api.merge.dev/api/ticketing/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tagsList**](TagsApi.md#tagsList) | **GET** /tags | 
[**tagsRetrieve**](TagsApi.md#tagsRetrieve) | **GET** /tags/{id} | 



## tagsList

> PaginatedTagList tagsList(x_account_token, opts)



Returns a list of &#x60;Tag&#x60; objects.

### Example

```javascript
import MergeTicketingApi from 'merge_ticketing_api';
let defaultClient = MergeTicketingApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeTicketingApi.TagsApi();
let x_account_token = "x_account_token_example"; // String | Token identifying the end user.
let opts = {
  'created_after': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects created after this datetime.
  'created_before': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects created before this datetime.
  'cursor': cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw, // String | The pagination cursor value.
  'include_deleted_data': true, // Boolean | Whether to include data that was marked as deleted by third party webhooks.
  'include_remote_data': true, // Boolean | Whether to include the original data Merge fetched from the third-party to produce these models.
  'modified_after': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects modified after this datetime.
  'modified_before': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects modified before this datetime.
  'page_size': 56, // Number | Number of results to return per page.
  'remote_id': "remote_id_example" // String | The API provider's ID for the given object.
};
apiInstance.tagsList(x_account_token, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_account_token** | **String**| Token identifying the end user. | 
 **created_after** | **Date**| If provided, will only return objects created after this datetime. | [optional] 
 **created_before** | **Date**| If provided, will only return objects created before this datetime. | [optional] 
 **cursor** | **String**| The pagination cursor value. | [optional] 
 **include_deleted_data** | **Boolean**| Whether to include data that was marked as deleted by third party webhooks. | [optional] 
 **include_remote_data** | **Boolean**| Whether to include the original data Merge fetched from the third-party to produce these models. | [optional] 
 **modified_after** | **Date**| If provided, will only return objects modified after this datetime. | [optional] 
 **modified_before** | **Date**| If provided, will only return objects modified before this datetime. | [optional] 
 **page_size** | **Number**| Number of results to return per page. | [optional] 
 **remote_id** | **String**| The API provider&#39;s ID for the given object. | [optional] 

### Return type

[**PaginatedTagList**](PaginatedTagList.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tagsRetrieve

> Tag tagsRetrieve(x_account_token, id, opts)



Returns a &#x60;Tag&#x60; object with the given &#x60;id&#x60;.

### Example

```javascript
import MergeTicketingApi from 'merge_ticketing_api';
let defaultClient = MergeTicketingApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeTicketingApi.TagsApi();
let x_account_token = "x_account_token_example"; // String | Token identifying the end user.
let id = null; // String | 
let opts = {
  'include_remote_data': true // Boolean | Whether to include the original data Merge fetched from the third-party to produce these models.
};
apiInstance.tagsRetrieve(x_account_token, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_account_token** | **String**| Token identifying the end user. | 
 **id** | [**String**](.md)|  | 
 **include_remote_data** | **Boolean**| Whether to include the original data Merge fetched from the third-party to produce these models. | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

