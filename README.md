# Project-3-BackEnd
This backend allows for users to authenticate using JSON Web Tokens.

Once a user has been properly authenticated, they will be able to search for the UV Index in their city of interest.

**_You may interact with the backend in the following ways_**

* User Sign-Up
* User Log-In
* User Add and Update Favorite Cities Model
* Delte User

**_BackEnd Models_**

1. **User**

Key | Value
--------   | --------
Username   | String
Email      | String
Password   | String
"My-Cities | Array

2. **City**

  Key      | Value
--------   | --------
"City-Name"| String
Country    | String
Lat        | Number
Long       | Number
"UV-Index" | Number

3. **Favorite Cities**

Key    | Value
------ | -------
Email  | String
Cities | Array

