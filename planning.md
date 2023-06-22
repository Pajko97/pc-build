## Idea
I divided technical solution in two. One of them is getting the actual parts and storing them in the database,
and the other part would be recommendation feature. Since I am not an AI expert, and would probably invest too much 
resources on that part, I decided to create an algorithm that will make choices based on values like GPU clock speed,
GPU performance in rendering tasks, CPU cores, RAM etc.
Color picker
https://www.youtube.com/watch?v=HAlIWRcldoc&ab_channel=Juxtopposed

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

Scraper update, will have actors set up on apify.com, and will run the from Node.js 

- WS GET-GPU
- WS GET-CPU
- WS GET-MOBO
- WS GET-RAM
- WS GET-STORAGE
- WS GET-PS
- WS GET-CASE

# Revenue model

- Paid advertising
- Tech selling commission

## Pitch

- 140 million pc's sold in 2022.

Aim:
- 1% - 1.4 million pc's sold
- Average price of pc - 1500$
- 10% commission - 150$ per pc
- 14000 pc's sold via refferal - 2.1 million in revenue



Year 1:
- 100k visitors - 2000 units sold - 300k in revenue

Year 2:
- 500k visitors - 10000 units sold - 1.5m in revenue

Year 3:
- 800k visitors - 16000 units sold - 2.4m in revenue


## Technologies:

- React.js - Standard stuff on the front end
- Node.js - Want to experiment with it a little bit since in my career I have done mainly JS on the backend
- Apify ( Cheerio/Pupeteer ) - Information will be fetched from Apify with Cheerio or Pupeteer

Database:
- PostgreSQL


# Features

- For starters, app will return best suited options for gamers. Later i will add other data
for proffessions like 3D Modeling, Software Development etc.
- Fill the build by providing components that you already have and let us do the rest

