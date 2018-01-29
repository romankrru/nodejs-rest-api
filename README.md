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