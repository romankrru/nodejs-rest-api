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
  - Content:
  ```
  {
    "count": 2,
    "orders": [
      {
        "_id": "5a70180aa9f9512a345124bb",
        "product": "5a6f625be3da8e2b381bbbdc",
        "request": {
          "type": "GET",
          "url": "http://localhost:3000/orders/5a70180aa9f9512a345124bb"
        }
      },
      {
        "_id": "5a701825fff79701a04b011c",
        "product": "5a6f625be3da8e2b381bbbdc",
        "request": {
          "type": "GET",
          "url": "http://localhost:3000/orders/5a701825fff79701a04b011c"
        }
      },
    ]
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
  "productId"[ID, required]: "5a6f625be3da8e2b381bbbdc",
  "quantity"[Number, default=1]: 4,
}
```
- Success response:
  - Code: `201`
  - Content:
  ```
  {
    "message": "Order stored",
    "createdOrder": {
      "_id": "5a7021d15f7fbc253cee3534",
      "product": "5a6f625be3da8e2b381bbbdc",
      "quantity": 1,
      "request": {
        "type": "GET",
        "url": "http://localhost:3000/orders/5a7021d15f7fbc253cee3534"
      }
    }
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
        productId: "5a6f625be3da8e2b381bbbdc",
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
`orderId[ID]`
- Data params:
none
- Success response:
  - Code: `200`
  - Content:
  ```
  {
    "_id": "5a7021d15f7fbc253cee3534",
    "product": "5a6f625be3da8e2b381bbbdc",
    "quantity": 1
  }
  ```
- Error response:
  - Code: `404`
  - Content: `{ error: {message: 'Not found'} }`
- Sample call:
  ```
  $.ajax({
      url: "/orders/5a7021d15f7fbc253cee3534",
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
`orderId[ID]`
- Data params:
none
- Success response:
  - Code: `200`
  - Content:
  ```
  {
    "message": "Order deleted"
  }
  ```
- Error response:
  - Code: `404`
  - Content: `{ error: {message: 'Not found'} }`
- Sample call:
  ```
  $.ajax({
      url: "/orders/5a7021d15f7fbc253cee3534",
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
  - Content:
  ```
  {
    "count": 2,
    "products": [
      {
        "_id": "5a6f625be3da8e2b381bbbdc",
        "name": "Harry Potter",
        "price": 10,
        "request": {
          "type": "GET",
          "url": "http://localhost:3000/products/5a6f625be3da8e2b381bbbdc"
        }
      },
      {
        "_id": "5a6f67555a9392144c045bab",
        "name": "Animal Farm",
        "price": 12,
        "request": {
          "type": "GET",
          "url": "http://localhost:3000/products/5a6f67555a9392144c045bab"
        }
      },
    ]
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
    "name"[String, required]: "The Hobbit",
    "price"[Number, required]: 4.99,
  }
  ```
- Success response:
  - Code: `201`
  - Content:
  ```
  {
    "message": "Created successfully",
    "createdProduct": {
      "_id": "5a6f713891ceb00c6005eed9",
      "name": "The Hobbit",
      "price": 4.99,
      "request": {
        "type": "GET",
        "url": "http://localhost:3000/products/5a6f713891ceb00c6005eed9"
      }
    }
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
        price: 4.99
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
  - Content:
  ```
  {
    "_id": "5a6f713891ceb00c6005eed9",
    "name": "Animal Farm",
    "price": 13
  }
  ```
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
  - Content:
  ```
  {
    "message": "Deleted successfully"
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
// array of objects
[
  {
	"propName": "price", // name of property to be updated
	"value": 10 // new value 
  }
]
```
- Success response:
  - Code: `200`
  - Content:
  ```
  {
    "message": "Updated successfully",
    "request": {
      "type": "GET",
      "url": "http://localhost:3000/products/5a6f625be3da8e2b381bbbdc"
    }
  }
  ```
- Error response:
  - Code: `404`
  - Content: `{ error: {message: 'Not found'} }`
- Sample call:
  ```
  $.ajax({
      url: "/products/5a6f625be3da8e2b381bbbdc",
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