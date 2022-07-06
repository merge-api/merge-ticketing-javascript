# MergeTicketingApi.AccountDetailsApi

All URIs are relative to *https://api.merge.dev/api/ticketing/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountDetailsRetrieve**](AccountDetailsApi.md#accountDetailsRetrieve) | **GET** /account-details | 



## accountDetailsRetrieve

> AccountDetails accountDetailsRetrieve(x_account_token)



Get details for a linked account.

### Example

```javascript
import MergeTicketingApi from 'merge_ticketing_api';
let defaultClient = MergeTicketingApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeTicketingApi.AccountDetailsApi();
let x_account_token = "x_account_token_example"; // String | Token identifying the end user.
apiInstance.accountDetailsRetrieve(x_account_token, (error, data, response) => {
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

### Return type

[**AccountDetails**](AccountDetails.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

