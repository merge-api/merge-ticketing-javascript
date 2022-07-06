# MergeTicketingApi.GenerateKeyApi

All URIs are relative to *https://api.merge.dev/api/ticketing/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateKeyCreate**](GenerateKeyApi.md#generateKeyCreate) | **POST** /generate-key | 



## generateKeyCreate

> RemoteKey generateKeyCreate(generate_remote_key_request)



Create a remote key.

### Example

```javascript
import MergeTicketingApi from 'merge_ticketing_api';
let defaultClient = MergeTicketingApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeTicketingApi.GenerateKeyApi();
let generate_remote_key_request = new MergeTicketingApi.GenerateRemoteKeyRequest(); // GenerateRemoteKeyRequest | 
apiInstance.generateKeyCreate(generate_remote_key_request, (error, data, response) => {
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
 **generate_remote_key_request** | [**GenerateRemoteKeyRequest**](GenerateRemoteKeyRequest.md)|  | 

### Return type

[**RemoteKey**](RemoteKey.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

