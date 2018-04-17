# `giftcardCreate` Integration
The `giftcardCreate` request will be executed, once a return is refunded, if a gift card is needed. It will
typically creates a new gift card, but some services will simply issue store credit to the customers.

Return Magic will be responsible of sending a confirmation email to the customer.


## Structure of the request
```js
{
  version: '1.0',
  request: 'giftcardCreate',
  payload: {
    request: {
      accountId: 'us-east-1:00000000-0000-0000-0000-000000000000',
      returnId: '00000000-0000-0000-0000-000000000000',
      balance: {
        value: 9.99,
        currency: 'USD',
      },
      metadata: {}, // Optional, this metadata is coming from the transactionExecute request
    }
  }
}
```

## Structure of the response
```js
{
  giftcard: {
    amount: {
      value: 9.99,
      currency: 'USD',
    },
    code: 'ABCD XXXX XXXX XXXX',
    metadata: {}, // Optional
  }
}
```