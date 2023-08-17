# About

I have a standard poodle named Gilligan who's a pretty great dude. I started doing some research and wanted to collect all of my findings, which led to the creation of this web app. Check it out at https://arielrezinn.github.io/pedigree/! 

If you want more dog pics, take a look at https://instagram.com/gilthepoodle.

# Resources

https://bkrem.github.io/react-d3-tree/docs/#event-handlers

# To Run Locally
`npm install`

`npm start` 

# To Rebuild & Publish 
`npm run deploy`

# To Generate a New Pedigree JSON

The spreadsheet with this information is stored on Google Drive, and can be viewed at: https://docs.google.com/spreadsheets/d/1p4TJlhcRKeuopBKsnmk4RM5sHm--sjfNvDhhjz4_b_M/edit?usp=sharing. 

I had to figure out a new way to do this in January of 2023 because I forgot how I did it when I first started this project in July of 2021. All I remembered was that I originally used several different web-based converters to convert the data to a formatted JSON.

After spending some time on the implementation, I can now generate a properly formatted JSON with updated data pulled directly from Google Sheets by entering `npm run refresh`

## Current Refresh Data
I reworked the spreadsheet and the code to better handle duplicates and line breeding. Each dog now keeps track of both parent registration numbers, instead of a single offspring regiatration number. The code to generate the json has been changed to reflect this.

## Original Refresh Data
Here's a rough outline of my implementation in src/public/OriginalRefreshData.js:
1. Grab the data as a CSV from Google Sheets
1. Convert the CSV into a single-level JSON
1. Save each item in the flat JSON to a key/value data structure with the key for each item being its "Offspring Reg #"
1. Recursively create the nested tree structure
   1. Start with Gil as the root node, then for each node...
   1. Copy its name and attributes values into the node
   1. Find both items in the key/value data structure whose key is equal to the current node's reg #, copy them into the "children" values for the current node, and remove them from the data structure (*this can be slightly confusing... the parents of a dog are being added as the "children" value because that's the terminology used*)
   1. Continue with a depth-first traversal until the key/value data structure is empty
1. Save the JSON data to a file for future reference

# // TODO
1. ~~Add a link to the published site that leads to the project's Github~~
1. ~~Move the toolbar from the bottom to the left hand side of the window~~
1. ~~Add a picture of Gil~~
1. ~~Only start off showing 4-5 generations on the tree~~
1. ~~Change my website so it links to this instead of Gil's instagram~~
1. ~~Make the "About" section in the sidebar collapsible~~
1. ~~Always display the focus indicator on whichever dog has its details displayed on the sidebar~~
1. ~~Ensure that a tree node is "selected" at all times~~
1. ~~Create skip links for easy keyboard navigation between the dog details and the tree~~
1. ~~Finish implementing the code that automatically creates a new  JSON from the spreadsheet in Google Drive~~
1. ~~Add a collapsible section like the about section that explains how to use keyboard nav on the site~~
1. ~~Make the collapsible sections closed by default~~
1. ~~Make the "About" section stay sticky to the bottom~~
1. ~~Make the radio button group have an initial value of "none" set when the page loads~~
1. ~~Test my JSON creation code a little bit more to make sure it works properly~~
1. Display a count of the total number of generations (aka the tree depth) and the currently displayed number of generations
1. Add a toggle to switch between light and dark mode
1. Add data from http://www.standardpoodledatabase.com
1. Readjust the sidebar design it so it works on mobile devices/phone screens
1. Add some kind of search ability? A potential exaple to modify is here: https://github.com/bkrem/react-d3-tree/issues/210
1. Change the base URL to my personal site instead of Github
1. Figure out how to address multiple instances of the same dog (aka line breeding)
1. Applicable to line-breeding scenarios only: Fix the tab focus management behavior so when the skip link is used, focus is shifted back to the specific instance of a dog that they started at, instead of the first insatnce of that dog in the tree
1. Fix the thing where screen readers read out "figure" 
   1. After further research, I've realized that the current library I'm using for generating the tree is relatively inaccessible to screenreader users. I will be creating a new version of this project when time allows using an accessible tree library. The current frontrunners are explained here: https://npmtrends.com/react-accessible-treeview-vs-react-arborist-vs-react-complex-tree
1. Add a toggle that allows the user to have a node automatically centered when it receives focus
   1. After further research, I've discovered a bug in the react-d3-tree package. This change on hold until I have the time to fork react-d3-tree and fix the bug.