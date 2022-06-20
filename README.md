# MintWallet

## Overview

### Login
Login is taking place with the help of local storage, for the users present via the help of protected routes. If user is not present in the local storage we won't
ever be able to reach to the protected routes, even if we write "/" or "/test" we'd be redirected to "/login", and if there is a user in the local storage we 
don't even show the login page but directly lead the user to the main page, even if the 
user tries he won't be able to reach the login page
![image](https://user-images.githubusercontent.com/73072690/174528398-43388616-1ad1-4c9a-99e7-44aedb029ccd.png)

### Register
For register we've built a userschema connected directly to the database storing the results of newly or already stored users. If user is already present and tries
to register again it would be redirected to the login page

![image](https://user-images.githubusercontent.com/73072690/174528487-70661003-c442-4e7d-a350-4decc793141b.png)

### DefaultLayout
A default layout built for all pages there're gonna be all along, with the user's name at the right corner, which when hovered upon provides with the logout
option
![image](https://user-images.githubusercontent.com/73072690/174528607-f43acca9-0b37-4084-8f1b-7b053b5b0137.png)

### Transaction Form
With Add new we get a form poped up at the center for all the data we require to register a new entry. 
![image](https://user-images.githubusercontent.com/73072690/174528701-daa06e6d-f0bb-454e-8da2-f7d057a5de98.png)

## All Transactions
![image](https://user-images.githubusercontent.com/73072690/174528767-c767fa05-3602-4f23-ba9d-eda34c2ad4ea.png)

## Edit and Delete options
![image](https://user-images.githubusercontent.com/73072690/174528869-21b6a96f-40b0-4d07-8dfa-8f7ce395a6b3.png)
![image](https://user-images.githubusercontent.com/73072690/174528900-d9b48357-0029-41e3-a786-743563218700.png)

## Filters
With filters option we only bring into consideration the transactions that follow our timelines for all the processes

![image](https://user-images.githubusercontent.com/73072690/174529126-fbdbb1f9-18d0-48ef-a9ec-91c5d80cacd4.png)

#### Weekly Filter
![image](https://user-images.githubusercontent.com/73072690/174529158-74b5b262-bd28-40e2-bf06-a5cc38ca0a26.png)

#### Monthly Filter
![image](https://user-images.githubusercontent.com/73072690/174529208-3c0ed3ad-7203-4b68-a034-341c68e74485.png)

#### Custom Filter
![image](https://user-images.githubusercontent.com/73072690/174529271-42022682-1685-48c1-9d1f-cf0ff7cc9534.png)

### Type Filters
We can also filter transaction on the basis of their type

![image](https://user-images.githubusercontent.com/73072690/174529382-a4dc37f5-4847-42c2-8de8-24ffe6d9afac.png)

## Analtaics
#### Progress bars showcasing differently for all incomes and expenses seperatley
![image](https://user-images.githubusercontent.com/73072690/174529499-4f69048b-fe35-4a40-be96-8b01d4285ea5.png)

#### Category wise results
![image](https://user-images.githubusercontent.com/73072690/174529541-67f96657-644b-4236-b6bb-628048da3361.png)





