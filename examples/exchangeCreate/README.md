# `exchangeCreate` Integration
The `exchangeCreate` integration request may be executed once a return is refunded.

Return Magic will be responsible of sending a confirmation email to the customer.


## Structure of the request
```js
{
  version: '1.0',
  request: 'exchangeCreate',
  payload: {
    exchangeCreateRequest: {
      // TODO
    }
  }
}
```

## Structure of the response
```js
{
  exchange: {
    // TODO
  }
}
```