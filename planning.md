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
- Selling data about the users
- Tech selling commission

## Pitch

- 140 million pc's sold in 2022.

3 year aim:
- Website visitors - 1 million
- 3% - 33k components sold
- Average price of component - $150
- 10% commission - 15$ per component
- 33000 purchase's - 495k in revenue


Year 1:
- 100k visitors - 3300 units sold - 
  49.5k in gross profit
  2.4k in expenses
  47.1k in net profit

Year 2:
- 400k visitors - 13200 units sold - 198k in revenue

Year 3:
- 500k visitors - 16500 units sold - 247.5k in revenue



--- Have to revisit this

## Technologies:

- React.js - Standard stuff on the front end
- Node.js - Want to experiment with it a little bit since in my career I have done mainly JS on the backend
- Apify ( Cheerio ) - Information will be fetched from Apify with Cheerio or Pupeteer
Color picker
https://www.youtube.com/watch?v=HAlIWRcldoc&ab_channel=Juxtopposed
Database:
- MongoDB


# Features

- For starters, app will return best suited options for gamers. Later i will add other data
for proffessions like 3D Modeling, Software Development etc.

- Fill the build by providing components that you already have and let us do the rest
- PC Builder by selecting parts manually


# Progress

- I finally managed to scrape the data i need. My next step is to figure out the best way to store them in the database. MongoDB seems like better choice
since i will be working with data that have relatively loosely defined structure. After i finish storing it in the database, i will go on to test the API.
- There might be a way to prevent creation of configurations with bottleneck. I could fetch benchmark results for most important components like 
CPU and GPU. Then that results should be compared with a function to determine matching components in terms of performance. 

- Auth from this project will be Google OAuth
- I want to implement API rate limiting and API auth through tokens