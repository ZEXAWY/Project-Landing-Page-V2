# Project Title

Landing Page Project by udacity.com

![Random GIF](https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif) 


## Table of Contents

- [Instructions](#instructions)
- [Project Title](#project-title)
- [Table of contents](#table-of-contents)
- [Project Steps](#project-steps)
- [The Author](#the-author)
- [Footer](#footer)


## Instructions
[(Back to top)](#table-of-contents)

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

-To download this project feel free to clone the repo on your device using the following command:

    ```git init```

    ```git clone https://github.com/ZEXAWY/Landing-Page-Project-Udacity.git```


## Project Steps:
[(Back to top)](#table-of-contents)

- First, defining my gloabal variable which will be used all over the code block, I used two main variable to hold the navigation menu bar, and the other one will hold all the sections on the page

- Second i need to find out how i can build the nav menu with the information i got from the HTML and the CSS file. the project Rubric gives a good starting telling us what exactly we needs to do and so the comments inside the HTML file which tells us that the sections id's are going to be linked to the anchors elements inside the navigation menu bar... so i started by defining a fuction that will go through all the sections inside the page and takes every single section's id, and Data and assign it to a variable, will be used to build the ```<a>``` element inside the ```<li>``` element which will be the child of the ```<ul>``` element.

- To make the navigation menu bar compatible with different devices. i manipulated the css file and changed some vlaues to maintain the Menu bar along with the page Header ```Landing Page``` with small screen size devices.  

- To add ```your-active-class``` to an inview section, we needs first to know how to determine if the section is already in the browser's view area. Luckly the Project Rubric mention one of these method which is ```.getBoundingClientRect()``` method which detect the location of the element we choose. so going from here i started to look for how far the top of a section will be away from the browser top edge. and get this value and compare it to two other values so the return of this operation will be the length i wanted to be for the section to add ```you-active-class``` style to this specific section.

- The last thing i did is to make the scroll smooth, and this can be done by several ways, the easy way which is adding a specific style to the HTML and make the ```scroll-behavior: smooth```. This approch will make my code quite simple and less lines to write, but i wanted to try it with the JS so i write a function to do this for me... take a look for it. there were amazing codes i find to write this function, and i got inspired by them all.


## The Author
[(Back to top)](#table-of-contents)

This project provided by udacity web development professional track tutors so the all credit goes to them for writing down all this amazing work.

I only applied some changes to this project to make it dynamic instead of static state.

My name is ```Ahmed mohamed``` i am a new programing student which love programing so much. at the moment of writing this file, i am only learning JS and web development by udacity, But i also can write Python and C languages. check my Github for my other projects.


## Footer
[(Back to top)](#table-of-contents)

<!-- Let's also add a footer because I love footers and also you **can** use this to convey important info.

Let's make it an image because by now you have realised that multimedia in images == cool(*please notice the subtle programming joke). -->
This project is powered by Udacity.com professional web development track and all credit goes to them in creating the foundation files to go throw this project, i only added some function to it to make it dynamic nothing more. the HTML and the CSS files were created by Udacity not by me.

Leave a star in GitHub, give a clap in Medium and share this guide if you found this helpful.

<!-- Add the footer here -->

![Footer](https://github.com/navendu-pottekkat/awesome-readme/blob/master/fooooooter.png) 
