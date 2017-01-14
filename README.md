
# Website Performance Optimization portfolio project
I took numerous steps to improve the pagespeed score of the provided index page, and improve performance on a second pizza.html page.

Optimizing index page:  
1)Eliminate render-blocking javascript, by adding the async tag to the analytics js request.  
2)Eliminate render-blocking CSS by inlining all CSS styles.  
3)Minified CSS, HTML, and JavaScript.  
4)Reduced image sizes with 3rd party software.  

Optimizing pizza page:  
1) Moved pizzasDiv definition outside of for loop. It only needs to be defined once.  
2) Moved phase variable out of its for loop.  
3) Moved movingPizzas outside of its for loop.  
4) Dynamically generate number of pizzas for the screen as needed.  

## Lets test it!
I have uploaded the repository to github to host.

To view the pagespeed score, go to https://developers.google.com/speed/pagespeed/insights/ and enter caesarsalad93.github.io into the web page URL box.
A score of 90 or above is satisfactory.

To test the page responsiveness, open the index.html file in chrome.  

Scroll down and click on the "Cam's Pizzeria" link.  

From there, open up the console by:  
1) clicking on the menu icon in the top right  
2) more tools  
3) Developer tools  
4) Click on the console tab.  

Begin scrolling on the page. The console will output the 'Average scripting time to generate last 10 frames'. To generate a good user experience, it should take less than 10ms to generate one frame.

With the console still open, you can click on the pizza slider bar and see the time it takes to resize the pizzas. I aimed for less than 5ms.