# Note Taker (Express.JS)
Application that can be used to write, save, and delete notes, using Express backend  
and Heroku deployment to save and retrieve note data from a JSON file.  

Heroku Deployment: https://powerful-river-39628.herokuapp.com/  

## Server Scripting  
1) Set up Express app and dynamic PORT  
2) Initialize server and listen for requests  
3) URL Parsing and Route Handling (GET, POST, DELETE Methods)  
4) Sending HTML and JSON as a response  
5) Modify JSON db file with POST and DELETE requests  
  
## User Story

AS A user, I want to be able to write and save notes  
I WANT to be able to delete notes I've written before  
SO THAT I can organize my thoughts and keep track of tasks I need to complete

## In Action  
![Deployed Note-Taker](https://media.giphy.com/media/lMCHjl6ZI9DgifcIAG/giphy.gif)

## Latest Commit  
-Updated Readme.md
-Updated POST and DELETE res.send    

## Previous Commits  
-Removed note ID from being displayed on note  
-Added start script to package.json  
-Added delete method to remove notes with a specified unique ID  
-Updated index.js to include a unique note ID  
-Required node FS module    
-Post requests now modify db.json  
-Setup server.js with localhost PORT  
-Added GET and POST route handling  
-Added middleware for static files  
-Initialize Files  