# Return Magic - Integration Requests Guide
This guide is intended for merchant that wants to customize the Return Magic business logic. You will find important informations about the terms used by Return Magic and the lifecycle of a return. If you have any questions, please contact us at support@returnmagic.com.
Before reading this guide, you should make sure to have a basic understanding of the Return Magic platform and the different state of a return (the lifecycle of a return). For more information about this, contact us and we will be happy to guide you!


## How to Extend the Platform With Your Own Code
Ready for some dark magic?! Return Magic offers a powerful tool to extend the platform and customize it. The following section will give you an overview of the integration process, and guide you thought each of the steps needed to extends Return Magic... and become a true wizard!

### Integration Requests
Return Magic can call external services to customize the way the platform is processing returns. We currently offer 17 different integration points that you can customize (we call them Integration Requests). For each Integration Request, you can decide to pick the default behavior, pick one of our native integration (issuing gift card via Shopify, for example, is natively supported by Return Magic for merchant using Shopify), or write your own code to fully customize the behavior. If you choose to write your own code, we can call your HTTPS web service or AWS Lambda function when we need to execute the logic (issue a gift card, for example).
List of all supported Integration Requests

| Integration Request |  | Definition |
| ------------- | ------------- |------------- |
| `syncOrders` | [Docs](examples/syncOrders) | Return Magic needs to pull or receive the order information from the merchant’s platform. We can proactively receive all the data from the platform, or we can pull the data from the merchant’s API when we need the data of a specific order.
| `syncCustomers` | [Docs](examples/syncCustomers) | Return Magic can pull or receive the customer information from the merchant’s platform. We can proactively receive all the data from the platform, or we can pull the data from the merchant’s API when we need the data of a specific order.
| `syncProducts` | [Docs](examples/syncProducts) | Return Magic can pull or receive the product information from the merchant’s platform. We can proactively receive all the data from the platform, or we can pull the data from the merchant’s API when we need the data of a specific order.
| `labelCreate` | [Docs](examples/labelCreate) | Creates a shipping label
| `labelRefund` | [Docs](examples/labelRefund) | Requests a refund for a shipping label
| `labelTrack` | [Docs](examples/labelTrack) | Updates the location and estimated time of arrival  of a label 
| `transactionCalculateGiftcard` | [Docs](examples/transactionCalculateGiftcard) | Calculate the Totals for a gift card transaction
| `transactionCalculateRefund` | [Docs](examples/transactionCalculateRefund) | Calculate the Totals for a refund transaction
| `transactionCalculateExchange` | [Docs](examples/transactionCalculateExchange) | Calculate the Totals for an exchange transaction
| `transactionCalculateOffline` | [Docs](examples/transactionCalculateOffline) | Calculate the Totals for  an offline transaction
| `transactionExecuteGiftcard` | [Docs](examples/transactionExecuteGiftcard) | To mark a return as refunded, creates a gift card transaction
| `transactionExecuteRefund` | [Docs](examples/transactionExecuteRefund) | To mark a return as refunded, creates  a refund transaction
| `transactionExecuteExchange` | [Docs](examples/transactionExecuteExchange) | To mark a return as refunded, creates an exchange transaction
| `transactionExecuteOffline` | [Docs](examples/transactionExecuteOffline) | To mark a return as refunded, creates an offline transaction
| `giftcardCreate` | [Docs](examples/giftcardCreate) | Once a return is refunded, it may be necessary to issue a gift card. Please note that a gift card may be needed even if the refund method is not gift card. For example, some merchant will decide to send a gift to a customer via the gift card if they decide to pick a specific policy (customer could receive a $5 bonus refund, if they come to the store for their refund). In that case, the platform will issue a refund on the original payment method and a gift card.
| `exchangeCreate` | [Docs](examples/exchangeCreate) | Once a return is refunded, it may be necessary to create an exchange. It’s up to the developer to decide if the “Exchange” is a draft order, a cart, or a regular order.
| `inventoryUpdate` | [Docs](examples/inventoryUpdate) | Once a return is refunded, an inventory update may be required, depending on the settings of the stores, the settings of the return policy and the input of the user.




### Lifecycle of an Integration Request
Let’s take an example: ACME Inc. uses Return Magic with Shopify, but uses its own Gift Card system. By using the default integration between Return Magic and Shopify, at the moment of the refund, Return Magic would create a Shopify Gift Card, which is not the desired behavior. Instead, the engineering team at ACME Inc. will create a function that receive a giftcardCreate Integration Request. This function is basic: it generates a new gift card, and return the gift card code. Everytime Return Magic needs to generate a Gift Card for that particular account, the platform will create a new giftcardCreate Integration Request, send it to the external service, and wait for a response. Once the response is received, Return Magic will continue with the regular flow.

### Technical consideration to keep in mind
There is a few technical consideration to keep in mind when you are developing custom service:
- The requests will timeout after 3.5 seconds if you don’t return a response.
- All  HTTP responses should return a 200 code, or we will assume that the request failed.
- All responses will be validate. If, for any reason, the validation fails, we will assume that the request failed. For more details about those validations, please contact us.
- If there is any exception (for example, invalid response format, or time out of the request), Return Magic will NOT retry the request. An exception will be created and an email will be sent to the main account owner. In the dashboard, the users will also be notify of the exception.

## Executing Integration Request using an HTTP web service
Return Magic can call your HTTP web service to execute the Integration Request. You will need to create a web service that can receive an Integration Request (via a POST request), process them, and return a valid response. Please note that those requests will timeout after 3.5 seconds, and that we assume that your service will return a 200 status code, or we will assume that the request failed. Once your web service is ready, you can contact us and provide us with the list of URL the platform should contact, with the associated Integration Request, so that we can update the configuration of your account.

## Executing Integration Request using an AWS Lambda function
Return Magic can also execute an AWS Lambda functions to execute the Integration Requests. You can find examples of Lambda functions on the Return Magic github account. In the following pages, we will create a Lambda function to customize the bla bla Integration Request, but the flow would be exactly the same for all others Integration Request.

### About Lambda functions
From the AWS website: “AWS Lambda is a compute service that lets you run code without provisioning or managing servers. AWS Lambda executes your code only when needed and scales automatically, from a few requests per day to thousands per second. You pay only for the compute time you consume - there is no charge when your code is not running”. You can read more about AWS Lambda functions here. To learn more about AWS Lambda pricing, visit the Pricing section on the AWS website. Free tier is offer from AWS to all account, that should give you access to 1M requests and 400k GB-second for free, each month. This is usually enough for a mi-size merchant to use this service for free with Return Magic.

### To create a Lambda function to execute an Integration Request:
We are working on a tutorial to help you create your AWS Account and set up your Lambda functions. Meanwhile, please contact us for more information.


## How to choose between an HTTP service and a Lambda Service?
As a general guideline, Return Magic recommends of using Lambda function to run your custom code. It should be easier to get up and running, and you won’t have to manage any infrastructure. Also, the Lambda service will be, by default, extremely secure and scalable. 


## Support
For any questions, please contact us at support@returnmagic.com

## API Changes and Announcements
To subscribe to the API changes and other relevant announcements, please subscribe to this page.


