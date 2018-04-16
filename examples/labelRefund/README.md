# `labelRefund` Integration
The `labelRefund` integration request may be executed once a return is received.


## Structure of the request
```js
{
  version: '1.0',
  request: 'labelRefund',
  payload: {
    labelRefundRequest: {
      // TODO
    }
  }
}
```

## Structure of the response
```js
{
  labelRefundRequested: true
}
```