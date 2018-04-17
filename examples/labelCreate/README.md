# `labelCreate` Integration
The `labelCreate` integration will be executed, once the return is approved, if a return label is needed.

Return Magic will be responsible of sending a confirmation email to the customer with the label attached.


## Structure of the request
```js
{
  version: '1.0',
  type: 'labelCreate',
  payload: {
    request: {
      accountId: 'us-east-1:00000000-0000-0000-0000-000000000000',
      returnId: '00000000-0000-0000-0000-000000000000',
      addressCustomer: {},
      addressWarehouse: {},
      isTestLabel: true, // Optional, is it a test or a regular shipment?
      packageDimensions: {
        weightGram: 100,
        lengthCm: 10,
        widthCm: 10,
        heightCm: 10,
      },
      items: [{
        id: '00000000-0000-0000-0000-000000000000',
        name: 'Test Product - Blue - XL', // Optional
        quantity: 2,
        sku: 'SKU-1234', // Optional
        hsCode: 'HS.1006.30', // Optional
      }],
      metadata: {}, // Optional
    }
  }
}
```

## Structure of the response
```js
{
  label: {
    fileUrl: 'https://labels.mycie.com/0000000000000000.png',
    price: {
      value: 9.99,
      currency: 'USD',
    }, // Optional
    tracking: {
      number: '0000 0000 0000 0000', // Optional
      link: 'https://www.canadapost.ca/trackweb/fr#/details/0000000000000000', // Optional
    },
    carrier: {
      key: 'canadapost', // Optional
      id: '00000000-0000-0000-0000-000000000000', // Optional
    },
    service: {
      key: 'canadapost-xpresspost', // Optional
      id: '00000000-0000-0000-0000-000000000000', // Optional
    },
    metadata: {}, // Optional
    debug: [], // Optional
    deeplink: '', // Optional, used to create a link between the merchant dashboard and external services
  }
}
```