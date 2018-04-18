# `giftcardCreate` Integration
The `giftcardCreate` request will be executed once a return is refunded for all returns that need a giftcard. Your external service will be responsible of creating a giftcard or issuing store credit and return any relevant information to Return Magic.

Once a giftcard is created, Return Magic will be responsible to notify the customer.


## Structure of the request
```js
{
  version: '1.0',
  type: 'giftcardCreate',
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