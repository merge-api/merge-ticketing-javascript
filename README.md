# merge_ticketing_api

MergeTicketingApi - JavaScript client for merge_ticketing_api
The unified API for building rich integrations with multiple Ticketing platforms.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0
- Package version: 1.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://www.merge.dev/](https://www.merge.dev/)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install merge_ticketing_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your merge_ticketing_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/merge-api/merge-ticketing-javascript
then install it via:

```shell
    npm install merge-api/merge-ticketing-javascript --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var MergeTicketingApi = require('merge_ticketing_api');

var defaultClient = MergeTicketingApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
var tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix['Authorization'] = "Token"

var api = new MergeTicketingApi.AccountDetailsApi()
var x_account_token = "x_account_token_example"; // {String} Token identifying the end user.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountDetailsRetrieve(x_account_token, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.merge.dev/api/ticketing/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MergeTicketingApi.AccountDetailsApi* | [**accountDetailsRetrieve**](docs/AccountDetailsApi.md#accountDetailsRetrieve) | **GET** /account-details | 
*MergeTicketingApi.AccountTokenApi* | [**accountTokenRetrieve**](docs/AccountTokenApi.md#accountTokenRetrieve) | **GET** /account-token/{public_token} | 
*MergeTicketingApi.AccountsApi* | [**accountsList**](docs/AccountsApi.md#accountsList) | **GET** /accounts | 
*MergeTicketingApi.AccountsApi* | [**accountsRetrieve**](docs/AccountsApi.md#accountsRetrieve) | **GET** /accounts/{id} | 
*MergeTicketingApi.AttachmentsApi* | [**attachmentsCreate**](docs/AttachmentsApi.md#attachmentsCreate) | **POST** /attachments | 
*MergeTicketingApi.AttachmentsApi* | [**attachmentsList**](docs/AttachmentsApi.md#attachmentsList) | **GET** /attachments | 
*MergeTicketingApi.AttachmentsApi* | [**attachmentsMetaPostRetrieve**](docs/AttachmentsApi.md#attachmentsMetaPostRetrieve) | **GET** /attachments/meta/post | 
*MergeTicketingApi.AttachmentsApi* | [**attachmentsRetrieve**](docs/AttachmentsApi.md#attachmentsRetrieve) | **GET** /attachments/{id} | 
*MergeTicketingApi.AvailableActionsApi* | [**availableActionsRetrieve**](docs/AvailableActionsApi.md#availableActionsRetrieve) | **GET** /available-actions | 
*MergeTicketingApi.CommentsApi* | [**commentsCreate**](docs/CommentsApi.md#commentsCreate) | **POST** /comments | 
*MergeTicketingApi.CommentsApi* | [**commentsList**](docs/CommentsApi.md#commentsList) | **GET** /comments | 
*MergeTicketingApi.CommentsApi* | [**commentsMetaPostRetrieve**](docs/CommentsApi.md#commentsMetaPostRetrieve) | **GET** /comments/meta/post | 
*MergeTicketingApi.CommentsApi* | [**commentsRetrieve**](docs/CommentsApi.md#commentsRetrieve) | **GET** /comments/{id} | 
*MergeTicketingApi.ContactsApi* | [**contactsList**](docs/ContactsApi.md#contactsList) | **GET** /contacts | 
*MergeTicketingApi.ContactsApi* | [**contactsRetrieve**](docs/ContactsApi.md#contactsRetrieve) | **GET** /contacts/{id} | 
*MergeTicketingApi.DeleteAccountApi* | [**deleteAccountCreate**](docs/DeleteAccountApi.md#deleteAccountCreate) | **POST** /delete-account | 
*MergeTicketingApi.ForceResyncApi* | [**syncStatusResyncCreate**](docs/ForceResyncApi.md#syncStatusResyncCreate) | **POST** /sync-status/resync | 
*MergeTicketingApi.GenerateKeyApi* | [**generateKeyCreate**](docs/GenerateKeyApi.md#generateKeyCreate) | **POST** /generate-key | 
*MergeTicketingApi.IssuesApi* | [**issuesList**](docs/IssuesApi.md#issuesList) | **GET** /issues | 
*MergeTicketingApi.IssuesApi* | [**issuesRetrieve**](docs/IssuesApi.md#issuesRetrieve) | **GET** /issues/{id} | 
*MergeTicketingApi.LinkTokenApi* | [**linkTokenCreate**](docs/LinkTokenApi.md#linkTokenCreate) | **POST** /link-token | 
*MergeTicketingApi.LinkedAccountsApi* | [**linkedAccountsList**](docs/LinkedAccountsApi.md#linkedAccountsList) | **GET** /linked-accounts | 
*MergeTicketingApi.PassthroughApi* | [**passthroughCreate**](docs/PassthroughApi.md#passthroughCreate) | **POST** /passthrough | 
*MergeTicketingApi.ProjectsApi* | [**projectsList**](docs/ProjectsApi.md#projectsList) | **GET** /projects | 
*MergeTicketingApi.ProjectsApi* | [**projectsRetrieve**](docs/ProjectsApi.md#projectsRetrieve) | **GET** /projects/{id} | 
*MergeTicketingApi.ProjectsApi* | [**projectsUsersList**](docs/ProjectsApi.md#projectsUsersList) | **GET** /projects/{id}/users | 
*MergeTicketingApi.RegenerateKeyApi* | [**regenerateKeyCreate**](docs/RegenerateKeyApi.md#regenerateKeyCreate) | **POST** /regenerate-key | 
*MergeTicketingApi.SyncStatusApi* | [**syncStatusList**](docs/SyncStatusApi.md#syncStatusList) | **GET** /sync-status | 
*MergeTicketingApi.TagsApi* | [**tagsList**](docs/TagsApi.md#tagsList) | **GET** /tags | 
*MergeTicketingApi.TagsApi* | [**tagsRetrieve**](docs/TagsApi.md#tagsRetrieve) | **GET** /tags/{id} | 
*MergeTicketingApi.TeamsApi* | [**teamsList**](docs/TeamsApi.md#teamsList) | **GET** /teams | 
*MergeTicketingApi.TeamsApi* | [**teamsRetrieve**](docs/TeamsApi.md#teamsRetrieve) | **GET** /teams/{id} | 
*MergeTicketingApi.TicketsApi* | [**ticketsCollaboratorsList**](docs/TicketsApi.md#ticketsCollaboratorsList) | **GET** /tickets/{id}/collaborators | 
*MergeTicketingApi.TicketsApi* | [**ticketsCreate**](docs/TicketsApi.md#ticketsCreate) | **POST** /tickets | 
*MergeTicketingApi.TicketsApi* | [**ticketsList**](docs/TicketsApi.md#ticketsList) | **GET** /tickets | 
*MergeTicketingApi.TicketsApi* | [**ticketsMetaPostRetrieve**](docs/TicketsApi.md#ticketsMetaPostRetrieve) | **GET** /tickets/meta/post | 
*MergeTicketingApi.TicketsApi* | [**ticketsRetrieve**](docs/TicketsApi.md#ticketsRetrieve) | **GET** /tickets/{id} | 
*MergeTicketingApi.UsersApi* | [**usersList**](docs/UsersApi.md#usersList) | **GET** /users | 
*MergeTicketingApi.UsersApi* | [**usersRetrieve**](docs/UsersApi.md#usersRetrieve) | **GET** /users/{id} | 
*MergeTicketingApi.WebhookReceiversApi* | [**webhookReceiversCreate**](docs/WebhookReceiversApi.md#webhookReceiversCreate) | **POST** /webhook-receivers | 
*MergeTicketingApi.WebhookReceiversApi* | [**webhookReceiversList**](docs/WebhookReceiversApi.md#webhookReceiversList) | **GET** /webhook-receivers | 


## Documentation for Models

 - [MergeTicketingApi.Account](docs/Account.md)
 - [MergeTicketingApi.AccountDetails](docs/AccountDetails.md)
 - [MergeTicketingApi.AccountDetailsAndActions](docs/AccountDetailsAndActions.md)
 - [MergeTicketingApi.AccountDetailsAndActionsIntegration](docs/AccountDetailsAndActionsIntegration.md)
 - [MergeTicketingApi.AccountDetailsAndActionsStatusEnum](docs/AccountDetailsAndActionsStatusEnum.md)
 - [MergeTicketingApi.AccountIntegration](docs/AccountIntegration.md)
 - [MergeTicketingApi.AccountToken](docs/AccountToken.md)
 - [MergeTicketingApi.Attachment](docs/Attachment.md)
 - [MergeTicketingApi.AttachmentRequest](docs/AttachmentRequest.md)
 - [MergeTicketingApi.AvailableActions](docs/AvailableActions.md)
 - [MergeTicketingApi.CategoriesEnum](docs/CategoriesEnum.md)
 - [MergeTicketingApi.CategoryEnum](docs/CategoryEnum.md)
 - [MergeTicketingApi.Comment](docs/Comment.md)
 - [MergeTicketingApi.CommentEndpointRequest](docs/CommentEndpointRequest.md)
 - [MergeTicketingApi.CommentRequest](docs/CommentRequest.md)
 - [MergeTicketingApi.CommentResponse](docs/CommentResponse.md)
 - [MergeTicketingApi.Contact](docs/Contact.md)
 - [MergeTicketingApi.DataPassthroughRequest](docs/DataPassthroughRequest.md)
 - [MergeTicketingApi.DebugModeLog](docs/DebugModeLog.md)
 - [MergeTicketingApi.DebugModelLogSummary](docs/DebugModelLogSummary.md)
 - [MergeTicketingApi.EncodingEnum](docs/EncodingEnum.md)
 - [MergeTicketingApi.EndUserDetailsRequest](docs/EndUserDetailsRequest.md)
 - [MergeTicketingApi.ErrorValidationProblem](docs/ErrorValidationProblem.md)
 - [MergeTicketingApi.GenerateRemoteKeyRequest](docs/GenerateRemoteKeyRequest.md)
 - [MergeTicketingApi.Issue](docs/Issue.md)
 - [MergeTicketingApi.IssueStatusEnum](docs/IssueStatusEnum.md)
 - [MergeTicketingApi.LinkToken](docs/LinkToken.md)
 - [MergeTicketingApi.LinkedAccountStatus](docs/LinkedAccountStatus.md)
 - [MergeTicketingApi.MetaResponse](docs/MetaResponse.md)
 - [MergeTicketingApi.MethodEnum](docs/MethodEnum.md)
 - [MergeTicketingApi.ModelOperation](docs/ModelOperation.md)
 - [MergeTicketingApi.MultipartFormFieldRequest](docs/MultipartFormFieldRequest.md)
 - [MergeTicketingApi.PaginatedAccountDetailsAndActionsList](docs/PaginatedAccountDetailsAndActionsList.md)
 - [MergeTicketingApi.PaginatedAccountList](docs/PaginatedAccountList.md)
 - [MergeTicketingApi.PaginatedAttachmentList](docs/PaginatedAttachmentList.md)
 - [MergeTicketingApi.PaginatedCommentList](docs/PaginatedCommentList.md)
 - [MergeTicketingApi.PaginatedContactList](docs/PaginatedContactList.md)
 - [MergeTicketingApi.PaginatedIssueList](docs/PaginatedIssueList.md)
 - [MergeTicketingApi.PaginatedProjectList](docs/PaginatedProjectList.md)
 - [MergeTicketingApi.PaginatedSyncStatusList](docs/PaginatedSyncStatusList.md)
 - [MergeTicketingApi.PaginatedTagList](docs/PaginatedTagList.md)
 - [MergeTicketingApi.PaginatedTeamList](docs/PaginatedTeamList.md)
 - [MergeTicketingApi.PaginatedTicketList](docs/PaginatedTicketList.md)
 - [MergeTicketingApi.PaginatedUserList](docs/PaginatedUserList.md)
 - [MergeTicketingApi.Project](docs/Project.md)
 - [MergeTicketingApi.RemoteData](docs/RemoteData.md)
 - [MergeTicketingApi.RemoteKey](docs/RemoteKey.md)
 - [MergeTicketingApi.RemoteKeyForRegenerationRequest](docs/RemoteKeyForRegenerationRequest.md)
 - [MergeTicketingApi.RemoteResponse](docs/RemoteResponse.md)
 - [MergeTicketingApi.RequestFormatEnum](docs/RequestFormatEnum.md)
 - [MergeTicketingApi.SyncStatus](docs/SyncStatus.md)
 - [MergeTicketingApi.SyncStatusStatusEnum](docs/SyncStatusStatusEnum.md)
 - [MergeTicketingApi.Tag](docs/Tag.md)
 - [MergeTicketingApi.Team](docs/Team.md)
 - [MergeTicketingApi.Ticket](docs/Ticket.md)
 - [MergeTicketingApi.TicketEndpointRequest](docs/TicketEndpointRequest.md)
 - [MergeTicketingApi.TicketRequest](docs/TicketRequest.md)
 - [MergeTicketingApi.TicketResponse](docs/TicketResponse.md)
 - [MergeTicketingApi.TicketStatusEnum](docs/TicketStatusEnum.md)
 - [MergeTicketingApi.TicketingAttachmentEndpointRequest](docs/TicketingAttachmentEndpointRequest.md)
 - [MergeTicketingApi.TicketingAttachmentResponse](docs/TicketingAttachmentResponse.md)
 - [MergeTicketingApi.User](docs/User.md)
 - [MergeTicketingApi.ValidationProblemSource](docs/ValidationProblemSource.md)
 - [MergeTicketingApi.WarningValidationProblem](docs/WarningValidationProblem.md)
 - [MergeTicketingApi.WebhookReceiver](docs/WebhookReceiver.md)
 - [MergeTicketingApi.WebhookReceiverRequest](docs/WebhookReceiverRequest.md)


## Documentation for Authorization



### tokenAuth


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

