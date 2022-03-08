## Process

Schema setup, now onto designing player registration.
Starting by doing a failing postman request to get an idea of how the json request will look.

initial POST request sent to "http://localhost:3001/players" with raw JSON body

```
  {
    "firstName": "Bernard",
    "lastName": "Leanse",
    "nationality": "British",
    "dateOfBirth": "1996-08-15"
  }
```