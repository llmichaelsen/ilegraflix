# Frontend Developer Test
By: Leonardo Lovatto Michalsen
E-mail: llmichaelsen@gmail.com

-  The project is a representation of a company like Netflix. Making it possible to view several films according to the user's profile.
- It can be acessible can be accessed with any device width. It's responsive.
-  Application was developed from a free template for basic structure. Its [lincense](https://github.com/llmichaelsen/ilegraflix/blob/master/LICENSE.md).

## Initializing the project
- Download or clone project folder
- With terminal go to project root directory
- Execute commands: 
> npm intall
> npm start
- Or using Docker execute command:
> docker-compose up

## Test Users

- Name: Leonardo
- E-mail: 1@test
- Password: [anything]
> 
- Name: Miguel
- E-mail: 2@test
- Password: [anything]
> 
- Name: Maria
- E-mail: 3@test
- Password: [anything]

# Documentation 
## Application Navigation Flow

The image below shows the flow of navigation possibilities between the pages of the system:
![alt text](https://raw.githubusercontent.com/llmichaelsen/ilegraflix/master/src/assets/img/site-diagram.png)
### Home page
On the homepage there are 3 movie sessions that are loaded based on the current information in the database.
One of the movie sessions is based on the profile of the logged in user.
These sessions use the same component by passing different arguments.

### Profile page
  
Here the user information and metrics are shown. Such as his last films watched in order and the films most watched in his country also ordered. Each user has their own metrics that can be viewed by accessing the system with different users.

### Play movie page
  
This page represents the user actually watching the movie. It contains a video placeholder for viewing. This page also save the data for later metrics.

## Data Structure


The backend was simulated using the browser's IndexedDB. With the following data structure expressed in the image below:![alt text](https://raw.githubusercontent.com/llmichaelsen/ilegraflix/master/src/assets/img/diagram.png) 

### User table
Saves the user's registration information. Generates the favorite film genre to later suggest films accordingly. Used by login component for authentication.

### Movie table
 It stores basic information about the films, such as their title, duration (minutes), genre and year of release.

### Movie-watched table
Each time the user clicks the "Watch now" button, a new record is created in the movie-watched table, saving the user and movie information.
This information is used to generate metrics for "latest watched movies" and "popular movies in your country".


## Code documentation

Code documentation was generated from a tool called Compodoc.
The documentation files stands at './documentation' folder. And can be navigated opening the index.html in browser.