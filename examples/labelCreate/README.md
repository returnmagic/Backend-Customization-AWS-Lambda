# `giftcardCreate` Integration
The `giftcardCreate` integration request may be executed once a return is refunded. It will
typically create a new gift card (or creates store credits, for example), and return it to Return Magic.

Return Magic will be responsible of sending a confirmation email to the customer.


## Structure of the request
```js
{
  version: '1.0',
  request: 'giftcardCreate',
  payload: {
    giftcardCreateRequest: {
      // TODO
    }
  }
}
```

## Structure of the response
```js
{
  giftcard: {
    // TODO
  }
}
```