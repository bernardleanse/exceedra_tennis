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

create route

request was coming up undefined, turned out I had forgotten to do `app.use(express.json())` to recongnise raw json bodies.

next error was the fact that the date was sent as a string and was expecting date time. Solved by making the database commit wrap the `req.body.dateOfBirth` with `new Date`

now refactor

refactored to a class

Testing by repeat submissions of the same postman data, I wrote a function to check if there is an entry with the same first name and last name, then added this to a validate function such as to add further validations down the line. I refactored a few times during this until happy with the implemntation while preserving functionality.


