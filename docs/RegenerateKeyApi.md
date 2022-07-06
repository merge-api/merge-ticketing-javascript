# MergeTicketingApi.RegenerateKeyApi

All URIs are relative to *https://api.merge.dev/api/ticketing/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**regenerateKeyCreate**](RegenerateKeyApi.md#regenerateKeyCreate) | **POST** /regenerate-key | 



## regenerateKeyCreate

> RemoteKey regenerateKeyCreate(remote_key_for_regeneration_request)



Exchange remote keys.

### Example

```javascript
import MergeTicketingApi from 'merge_ticketing_api';
let defaultClient = MergeTicketingApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeTicketingApi.RegenerateKeyApi();
let remote_key_for_regeneration_request = new MergeTicketingApi.RemoteKeyForRegenerationRequest(); // RemoteKeyForRegenerationRequest | 
apiInstance.regenerateKeyCreate(remote_key_for_regeneration_request, (error, data, response) => {
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
 **remote_key_for_regeneration_request** | [**RemoteKeyForRegenerationRequest**](RemoteKeyForRegenerationRequest.md)|  | 

### Return type

[**RemoteKey**](RemoteKey.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

