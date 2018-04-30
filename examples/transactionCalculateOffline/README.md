# `transactionCalculateRefund` Integration

# Structure of the request
```js
{
  version: '1.0',
  type: 'transactionCalculateRefund',
  payload: {
    accountId: string,
    returnId: string,
    items: object,
    transactionType: string,
  }
}
```

| attribute (opt. = optional)  | type  | description  |
|---|---|---|
| `accountId`  | string  | id of Return Magic account  |
| `returnId`  | string  | id of return  |
| `items`  | object  | list of items to calculate the refund. see items structure below  |
| `transactionType`  | string  | type of transaction (in this case, it must be 'offline')  |

## Structure of items
```js
{
  ITEM_ID: {
    id: string,
    code: string,
    qty: number,
  }
}
```

| attribute (opt. = optional)  | type  | description  |
|---|---|---|
| `id`  | string  | item ID in Return Magic  |
| `code`  | string  | return reason code  |
| `qty`  | number  | quantity of said item  |

# Structure of the response
```js
{
  transactionType: string,
  transactionValue: string,

  items: object[],

  totals: object[],

  actions: object,

  metadata: object,
}
```

| attribute (opt. = optional)  | type  | description  |
|---|---|---|
| `transactionType`  | string  | type of transaction (in this case, it must be 'offline')  |
| `transactionValue`  | string  | value of transaction  |
| `items`  | object[]  | list of items and the details of their refund amount. see below for items structure  |
| `totals`  | object  | list of totals (ie: Subtotal, Total, etc). see below for totals structure  |
| `actions` (opt.)  | object  | list of posst actions after the transaction has been created. see below for actions structure  |
| `metadata` (opt.)  | object  | an object that can have anything. use it if you'd like us to save some additional data.  |

## Structure of items
```js
[{
  id: string,
  quantity: number,
  unitPrice: number,
  unitPriceDiscount: number,
  unitFinalPrice: number,
  lineFinalPrice: number,
}]
```

| attribute (opt. = optional)  | type  | description  |
|---|---|---|
| `id`  | string  | item ID in Return Magic  |
| `quantity`  | number  | quantity of said item  |
| `unitPrice`  | number  | unit price of said item  |
| `unitPriceDiscount` (opt.)  | number  | amount of discount for said item (**NOT** the discounted price) |
| `unitFinalPrice`  | number  | final price of said item (unitPrice - unitPriceDiscount)  |
| `lineFinalPrice`  | number  | line final price (unitFinalPrice * quantity)  |

## Structure of totals
```js
[{
  sort: number,
  label: string,
  value: number,
}]
```

| attribute (opt. = optional)  | type  | description  |
|---|---|---|
| `sort`  | number  | sorting the totals (for UI purposes)  |
| `label`  | string  | lobal of total (for UI purposes)  |
| `value`  | number  | value of total  |

## Structure of actions
```js
{
  giftcard: {
    value: number,
    metadata: object,
  },
  inventory: {
    value: number,
    metadata: object,
  },
  exchange: {
    value: number,
    metadata: object,
  }
}
```

Each of the keys above (giftcard, inventory, exchange) are optional (ie: your `actions` item can contain only one, none or all of them). For each of these keys, the attributes description are the following:

| attribute (opt. = optional)  | type  | description  |
|---|---|---|
| `value`  | number  | value of the action |
| `metadata` (opt.)  | object  | an object that can have anything. use it if you'd like us to save some additional data. |