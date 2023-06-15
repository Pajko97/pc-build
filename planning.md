## Idea
I divided technical solution in two. One of them is getting the actual parts and storing them in the database,
and the other part would be recommendation feature. Since I am not an AI expert, and would probably invest too much 
resources on that part, I decided to create an algorithm that will make choices based on values like GPU clock speed,
GPU performance in rendering tasks, CPU cores, RAM etc.

ex. In a case of query of user who works mainly using 3D Max and Blender, we give him a build with great GPU, good CPU
and good RAM. 

# Fetching the parts
- Main idea was to use already existing API for getting PC parts. That API would be called on a time basis
and fetch the latest parts. Since most of the API's available ( read only one hehe ) have outdated components database,
i decided to go the web scraping route. The website that I am scraping is "pcpartspicker.com" which has biggest database
of components that I know of that is update regularly. Still did not decide on the specific tool I will use.

# Scraper
First part of the scraping is the "pcpartspicker.com" and that is where i would be getting the actual component 
descriptions and information. Second part of the scraping will be on the "amazon.com" and from there i will:
- Get amazon link for each component of the build
- Inject my referal code in each URL 
- Show users the link towards buy location ( in this case Amazon ) that will have my ref code

Still working on the scraper..
# Recommendation system

Technologies:

- React.js - Standard stuff on the front end
- Node.js - Want to experiment with it a little bit since in my career I have done mainly JS on the backend
- Apify ( Cheerio/Pupeteer ) - Information will be fetched from Apify with Cheerio or Pupeteer

Database:
- PostgreSQL


# Features

For starters, app will return best suited options for gamers. Later i will add other data
for proffessions like 3D Modeling, Software Development etc.
