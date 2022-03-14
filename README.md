## How To Use

Make sure you have the latest version of Node.js and node package manager.
Make sure you have postgresql locally `brew install postgresql`.
Clone repo.
run `npm install`
run `npm start`
Make Postman requests to "http://localhost:3001/"



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

Testing by repeat submissions of the same postman data, I wrote a function to check if there is an entry with the same first name and last name, then added this to a validate function such as to add further validations down the line. I refactored a few times during this until happy with the implemntation while preserving functionality.

This was lucky as I then could easily extend this validation to check for the age being greater than or equal to 16. Age calculation was done by creating a function which used JS Date. 

I added a get route for /players, made it grab all records, then allowed query parameters to be passed to filter!
Then I made them be ordered by points, and test drove a function to assign a rank position integer to the query results!

Positioning was handled by getting all players by points descending as included in the prisma functionality but then handling a player list manipulation to assign a current position property rather than persisting to the database the position as it is always changing. PlayerListManipulation also puts unranked at the bottom by filtering out any ranked and then unranked players and putting the two arrays together, unranked last.

Matches were created in the schema with the winner and loser player id's as foreign keys.

Submitting a match was done by the names a strings which then get converted to find that unique players id to then handle the logic to update the scores of both players.
