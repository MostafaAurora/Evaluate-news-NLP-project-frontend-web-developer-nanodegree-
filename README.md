# evaluate news nlp project 
this project aims to allow users to use the meaning cloud sentiment analysis API to analyze an article of thier choice provided they input a valid url
this project has 2 webpack modes (devlopment,production)
the productiob mode uses extra plugins to reduce the size of the final server ready version thus ncreasing loading speed
to run the project open the project directory in terminal or editor and input :
1 npm install 
2 npm build-prod
3 npm start 
the project uses 2 client js functions , one to validate the user url (urlChecker) and one to handle the submisson of the user (handleSubmit) providing thier provided input passes the validation function nested in the handling function 
rather than sending the key from server to the client side and sending the request on client side I chose to send it on server side to preserve the key for security reasons
the app works as follows :

1- user inputs the article url 

2- on submitting the url is validated using the validateUrl function in urlChecker module, if it passes we go to the next step, if doesn't the user gets an alert telling them to input a valid url 

3- in the handleSubmit module we Check for the value of the test via using the validateUrl function imported from the urlChcker module, if it returns false then nothing happens if it doesn't then we make a post request to server sending the validated url to the server 

4- the server uses the stored key and meaning cloud API url and the sent article url to form a request link and request analysis from the API and then sends the results to client side 

5- upon recieving the results in client side the UI is updated with select values from the results
6- the project has testing for js modules via jest by inputting the command npm run test 

7- the project has service workers installed for offline functionality 
