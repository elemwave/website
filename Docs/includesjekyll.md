# JEKYLL INCLUDES
 
### WHAT ARE JEKYLL INCLUDES?

Jekyll includes are like layouts for small fragments of your page. In other words, we can use Jekyll includes to set the style of a specific area on our web page. 

Jekyll includes allow you to break your pages into smaller "components" such as navigation, section titles and footers to make working on the web more comfortable and customizable.

### HOW TO USE JEKYLL INCLUDES?

First of all we have to create a "_includes" folder in our project for Jekyll to recognize, and then we can put our HTML fragments in it. 

 ![HTML block from _includes folder](/assets/docImages/cssBlock.png)

Secondly, we have to configure our variables in our md file for use them in the blocks to structure the content (The block is your HTML file that is on the _includes folder).

In this case staff, name and description are the variables used in our block.

 ![Variables from MD file](/assets/docImages/variableMD.png)

When we already have our block ready to use, you have to add this line at the end of your Mark Dawn page using your file name (staff_block is the example) to be able to use it.

 ![Code line to add the block configuration to a MD file](/assets/docImages/lineBlock.png)