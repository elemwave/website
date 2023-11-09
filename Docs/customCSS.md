# ADDITION OF CUSTOM CSS FOR YOUR PAGES

The first step is to have a CSS file with all the parameters we want to have in our page elements.

Then we have to create a folder or use one of the existing in our project to save our CSS files.

Now we have two ways to apply our CSS:

## Apply CSS using Jekyll Includes

If we want to apply the CSS to a MD file, we have to create a block in the _includes folder with the variables on the MD file and apply the CSS in the block.

Here is an example. We have created a HTML file in the _includes folder with CSS properties (In this case we are using the default CSS from the layout but you can also use your custom one adding it as usual). 

 ![CSS in a HTML file from _includes folder](/assets/docImages/cssBlock.png)

Then in our md file we add this line at the end in order to implement the block with CSS properties.

 ![Code line to add the block configuration to a MD file](/assets/docImages/lineBlock.png)

## Apply CSS to an HTML section of a MD file
If we want to apply the CSS in the HTML part of a MD file we just have to link the CSS to the html using this command.
```html
<link rel="stylesheet" type="text/css" href="style.css"> 
```

In this example we are on a md file where we have a section written in HTML language. Apply the CSS in this case is as easy as add the line we mentioned before as we would do if we were in a normal HTML file.

 ![CSS in a HTML section from a MD file](/assets/docImages/cssHtml.png)