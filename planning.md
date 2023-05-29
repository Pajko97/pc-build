## Idea
I divided technical solution in two. One of them is getting the actual parts and storing them in the database,
and the other part would be recommendation feature. Since i am not an AI expert, and would probably invest too much 
resources on that part, i decided to create an algorithm that will make choices based on values like GPU clock speed,
GPU performance in rendering tasks, CPU cores, RAM etc.

ex. In a case of query of user who works mainly using 3D Max and Blender, we give him a build with great GPU, good CPU
and good RAM. 

# Fetching the parts
- Main idea was to use already existing API for getting PC parts. That API would be called on a time basis
and fetch the latest parts. Since most of the API's available ( read only one hehe ) have outdated components database,
i decided to go the web scraping route. The website that i am scraping is "pcpartspicker.com" which has biggest database
of components that i know of that is update regularely. Stil did not decide on the specific tool i will use.


# Recommendation system

Technologies:

- React.js - Standard stuff on the front end
- Django - Want to experiment with it a little bit since in my career i have done mainly JS on the backend
- 

Database:



Build:
- id int PK
- cpu cpu_id
- gpu gpu_id
-  