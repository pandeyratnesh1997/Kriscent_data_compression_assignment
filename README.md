# Kriscent_data_compression_assignment

## Video Explanation of solution 
  https://drive.google.com/file/d/1QVhOllDzNaZHuyp9XtUOsgq23Uedck6y/view?usp=sharing
  
  External module used
  1. Multer  Reference : https://www.npmjs.com/package/multer 
    . using to upload file (image) of user and storing in memorystorage as i have to perform compression operation too.
    
  2. Sharp  Reference : https://sharp.pixelplumbing.com/
     . using To compress image size
     
  3. Crypto-js : Reference : https://www.npmjs.com/package/crypto-js
    . using for password Encription

4. To generate Unique id 
    . creating a seperate counter document in database and generating a three digit sequenceId id with respect to that and 
      creating unique id by following pattern
        First 2 character of the name, last 4 digits of password and an incremented number of 3 digits. 
        
        
    
  
## Note : I dont have premium account on heroku and any cloud and heroku gives 500 only request per month for free so server will not work. you can use localhost to check.
