# `inventoryUpdate` Integration

The `inventoryUpdate` integration request may be executed once a return is refunded. Your external service will be responsible to restock the inventory in the inventory management system.


## Structure of the request
```js
{
  version: '1.0',
  type: 'inventoryUpdate',
  payload: {
    request: {
      accountId: 'us-east-1:00000000-0000-0000-0000-000000000000',
      returnId: '00000000-0000-0000-0000-000000000000',
      items: [{
        productId: '00000000-0000-0000-0000-000000000000',
        locationId: '00000000-0000-0000-0000-000000000000',
        quantity: 10,
        location: { /* DomainLocation */ },
        product: { /* DomainProduct */ },
      }],
    }
  }
}
```

## Structure of the response
```js
{
  inventory: {
    items: [{
      productId: '00000000-0000-0000-0000-000000000000',
      locationId: '00000000-0000-0000-0000-000000000000',
      quantityRestocked: 0,
      debugMessages: [], // Optional
    }]
  }
}
```