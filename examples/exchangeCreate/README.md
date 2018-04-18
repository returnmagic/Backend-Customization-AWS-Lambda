# `exchangeCreate` Integration (Private Alpha)

*This integration request is not public yet. We are testing the new exchange flow with a few merchants and will update this page as soon as we have more details. If you are interested in this new flow, please contact us at support@returnmagic.com to request early access.*

The `exchangeCreate` integration will be executed once a return is refunded for all returns of type exchange. Your external service will be responsible for creating a new order or a draft order and return any relevant information to Return Magic.

Once an exchange is created, Return Magic will be responsible to notify the customer.


## Structure of the request
```js
{
  version: '1.0',
  type: 'exchangeCreate',
  payload: {
    exchangeCreateRequest: {
      // Structure to be announced
    }
  }
}
```

## Structure of the response
```js
{
  exchange: {
    // Structure to be announced
  }
}
```