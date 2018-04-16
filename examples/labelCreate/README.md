# `labelCreate` Integration
The `labelCreate` integration request may be executed once a return is approved.

Return Magic will be responsible of sending a confirmation email to the customer.


## Structure of the request
```js
{
  version: '1.0',
  request: 'labelCreate',
  payload: {
    labelCreateRequest: {
      // TODO
    }
  }
}
```

## Structure of the response
```js
{
  label: {
    // TODO
  }
}
```