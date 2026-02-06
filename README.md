**How you implemented TypeScript features and OOP principles.**

Typescript was used to add type safety to ensure that each product object
always has correct data types. OOP principles such as encapsulation were used on the product class to group data such as price and category with discount and calculation logic.

**The challenges you encountered and how you overcame them.**

A challenge I faced was understanding the raw JSON data to take out the required field for the product constructor. I overcame this by carefully reviewing the API response and mapping only the necessary fields into structured Product objects.

**How you handled asynchronous operations and error management.**

Asynch operations were handled using async and await to simplify API calls and improve readability. All API requests were wrapped in try/catch blocks to prevent runtime crashes.
