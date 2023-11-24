# ADDITION OF NEW CONTENT TO THE WEBSITE

If we want to add more content to the website we have to follow these steps:

First of all we have to create a new MD file that is going to be our new page inside the website.

 Secondly we have to assign a URL at the top of the page using the "permalink" tag for this purpose.

 ![Permalink example](/assets/docImages/permalink.png)

 We can also state the layout we want to use on this page and the variables we will use in case we are using blocks (For more information consult this [documentation](/Docs/additionContent.md))

 If you are not using blocks, you can also code your website using HTML and CSS on the body of the file.

 ![HTML code example](/assets/docImages/HTML.png)

 When we already have our page finished. The last step is to add it to the navigation menu on the top bar. To do this you have to go to _data folder and there go to [navigation.yml](/_data/navigation.yml) file. Once there all you have to do is add a title (for the name of the button) and an url that must be the permalink you configured before using this structure.

  ![structure to addition of new buttons](/assets/docImages/data.png).