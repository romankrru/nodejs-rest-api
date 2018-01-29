# Node.js RESTful API
---

## Get orders
- URL:
`/orders`
- Method:
`GET`
- URL params:
none
- Data params:
none
- Success response:
  - Code: `200`
  - Content: `{}`
- Error response:
  - Code: `404`
  - Content: `{ error: {message: 'Not found'} }`
- Sample call:
```
$.ajax({
    url: "/orders",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });
```
---

## Create order
- URL:
`/orders`
- Method:
`POST`
- URL params: none
- Data params:
```
{
  "productId": "asdfgaljkiowekjdsf",
  "quantity": "4",
}
```
- Success response:
  - Code: `201`
  - Content:
```
// created order
{
  "productId": "asdfgaljkiowekjdsf",
  "quantity": "4"
}
```
- Error response:
  - Code: `404`
  - Content: `{ error: {message: 'Not found'} }`
- Sample call:
```
$.ajax({
    url: "/orders",
    dataType: "json",
    type : "POST",
    data: {
      productId: "asdfgaljkiowekjdsf",
      quantity: "4"
    },
    success : function(r) {
      console.log(r);
    }
  });
```
---

## Get order with id
- URL:
`/orders/:orderId`
- Method:
`GET`
- URL params:
`orderId`
- Data params:
none
- Success response:
  - Code: `200`
  - Content: `{}`
- Error response:
  - Code: `404`
  - Content: `{ error: {message: 'Not found'} }`
- Sample call:
```
$.ajax({
    url: "/orders/dsfdaklhfahdsjkfhjdaf",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });
```
---

## Delete order
- URL:
`/orders/:orderId`
- Method:
`DELETE`
- URL params:
`orderId`
- Data params:
none
- Success response:
  - Code: `200`
  - Content: `{}`
- Error response:
  - Code: `404`
  - Content: `{ error: {message: 'Not found'} }`
- Sample call:
```
$.ajax({
    url: "/orders/dsfdaklhfahdsjkfhjdaf",
    dataType: "json",
    type : "DELETE",
    success : function(r) {
      console.log(r);
    }
  });
```
---

## Get products
- URL:
`/products`
- Method:
`GET`
- URL params:
none
- Data params:
none
- Success response:
  - Code: `200`
  - Content: `{}`
- Error response:
  - Code: `404`
  - Content: `{ error: {message: 'Not found'} }`
- Sample call:
```
$.ajax({
    url: "/products",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });
```
---

## Create product
- URL:
`/products`
- Method:
`POST`
- URL params: none
- Data params:
```
{
  "name": "The Hobbit",
  "price": "4.99",
}
```
- Success response:
  - Code: `201`
  - Content:
```
// created product
{
  "name": "The Hobbit",
  "price": "4.99",
}
```
- Error response:
  - Code: `404`
  - Content: `{ error: {message: 'Not found'} }`
- Sample call:
```
$.ajax({
    url: "/products",
    dataType: "json",
    type : "POST",
    data: {
      name: "The Hobbit",
      quantity: "4.99"
    },
    success : function(r) {
      console.log(r);
    }
  });
```
---

## Get product with id
- URL:
`/products/:productId`
- Method:
`GET`
- URL params:
`productId`
- Data params:
none
- Success response:
  - Code: `200`
  - Content: `{}`
- Error response:
  - Code: `404`
  - Content: `{ error: {message: 'Not found'} }`
- Sample call:
```
$.ajax({
    url: "/product/dsfdaklhfahdsjkfhjdaf",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });
```
---

## Delete product
- URL:
`/products/:productId`
- Method:
`DELETE`
- URL params:
`productId`
- Data params:
none
- Success response:
  - Code: `200`
  - Content: `{}`
- Error response:
  - Code: `404`
  - Content: `{ error: {message: 'Not found'} }`
- Sample call:
```
$.ajax({
    url: "/products/dsfdaklhfahdsjkfhjdaf",
    dataType: "json",
    type : "DELETE",
    success : function(r) {
      console.log(r);
    }
  });
```
---

## Update product
- URL:
`/products/:productId`
- Method:
`PATCH`
- URL params:
`productId`
- Data params:
```
[
  ...
  {
	"propName": "price", // name of property to be updated
	"value": 10 // new value 
  },
  {
    ...
  }
  ...
]
```
- Success response:
  - Code: `200`
  - Content:
  Something like this:
    ```
    {
      "n": 1,
      "nModified": 0,
      "opTime": {
          "ts": "6516535818436214785",
          "t": 1
      },
      "electionId": "7fffffff0000000000000001",
      "ok": 1
    }
    ```
- Error response:
  - Code: `404`
  - Content: `{ error: {message: 'Not found'} }`
- Sample call:
```
$.ajax({
    url: "/products/dsfdaklhfahdsjkfhjdaf",
    dataType: "json",
    data: [{
      propName: "price",
      value: 10
    }],
    type : "PATCH",
    success : function(r) {
      console.log(r);
    }
  });
```