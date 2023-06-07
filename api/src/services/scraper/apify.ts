const Apify = require('apify');
const $ = require('jquery')

Apify.main(async () => {
  const requestQueue = await Apify.openRequestQueue();
  await requestQueue.addRequest({ url: 'https://example.com/page/1' });

  const crawler = new Apify.PuppeteerCrawler({
    requestQueue,
    handlePageFunction: async ({ request, page }) => {

        $("tr.tr__product").each(function() {
            var $tr = $(this);
            
            var cpuClock = $tr.find('.td__spec--2').text().trim();
            var cpuName = $tr.find('.td__nameWrapper p').text().trim();
            var manufacturer = cpuName.replace(/ .*/,'');
          
            var coreCount = $tr.find('.td__spec--1').text().trim();
            var tdp = $tr.find('.td__spec--4').text().trim();
            var integratedGraphics = $tr.find('.td__spec--5').text().trim();
            var smt = $tr.find('.td__spec--6').text().trim();
            var price = $tr.find('.td__price').contents().filter(function() {
              return this.nodeType === 3;
            }).text().trim();
            
            console.log(cpuClock, cpuName, manufacturer)
            var cpuInfo = {
              cpuClock: cpuClock,
              cpuManufacturer: manufacturer,
              cpuName: cpuName,
              coreCount: coreCount,
              tdp: tdp,
              integratedGraphics: integratedGraphics,
              smt: smt,
              price: price
            };
            
            cpuInfoArray.push(cpuInfo);
          });

      const nextPageUrl = getNextPageUrl(request.url);
      if (nextPageUrl) {
        await requestQueue.addRequest({ url: nextPageUrl });
      }
    },
  });

  await crawler.run();
});

function getNextPageUrl(currentURL: string) {
  const regex_number_pattern = /\d+/;

  const current_page_number = currentURL.match(regex_number_pattern)
  const format = current_page_number ? current_page_number.toString() : ""
  const format_URL_string: string = currentURL.split("").slice(35).push(format)
  const nextPageURL  = `${format_URL_string}${current_page_number}`

  return nextPageURL
}
