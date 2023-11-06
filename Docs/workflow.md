# PROJECT DEVELOPMENT METHOD 

## Repository and Dashboard
The first step is create the repository where we are going to work on the project.

Once we have our repository ready, the next step is to create a dashboard which is divided in 4 sections:
 1. To do list (All issues we have to accomplish)
 2. In progress (The issues we are currently working on)
 3. Code review (In this section are the issues that are resolved but are pending to be checked)
 4. Done (Here are the completed and checked issues)

![Dashboard elemwave page project](/assets/docImages/dashboard.png)

The next step is to generate the issues that we have to work on according to the requirements of the project and put them on the ToDo list. They must have an identifier to make easier the follow-up of the development.

![ToDo List](/assets/docImages/ToDo.png)

Then we have to assign the issues to the developers who are going to resolve them. After that we go to the second section.

In  the "In progress" section, we have the assigned issues that the developers are currently working on to solve.

![In progress section](/assets/docImages/InProgress.png)

When a developer finish the resolution of an issue, he must upload it to the repository in a new branch called as identifier + issue name.  

The commit where the developer save the resolution must have a description about what he did in the project to solve the issue (Commmit example: git commit -m "Done the requested changes").

 When the commit is pushed to the repository, the developer has to make a "Pull request" to integrate the changes to the master branch. 
 
 Finally, he moves the issue from the "In progress" section to the "Code review" section and puts a comment into the issue related on what he did. 

![Code Review section](/assets/docImages/CodeReview.png)

The last part is the Done section. When the team leader, who is in charge of checking all the proposed solutions, verify that they are correct and work properly. He push them into the master branch and put the issue into the "Done" section. 

In case that some solutions are wrong, he get them back to the "In progress" section with a comment about what is wrong on the solution to make it clear for the developer that is working on it. 

![Done section](/assets/docImages/Done.png)

## Work on local environment

The first step we have to take in order to work in the project in our local environment is to clone the repository in a folder using the command "git clone (repository link)" on the terminal.

When we have the repository available in our folder the next part is to check if we are on the master branch using "git branch" command. 

If we are on a different branch we have to go to master using the command "git checkout master". There is an exception when you need some changes that are on another branch and not in master branch yet, you must create your new branch using the one which has the required changes as the base. 

Once we are on master branch, we have to create a new branch called "issue number identifier + issue name" in order to identify which issue we are fixing there. 

Then we do everything necessary to solve the issue and finally we make a commit to save the changes with a description about what we did using the command "git commit -m (description)" Example: git commit -m "Done the required changes". 

After that we have to push the changes into the repository using "git push". 

The last part is to make a pull request for the team leader that is in charge of checking our work and verify if it is correct. If the solution is correct and it works properly, it gets implemented into the master branch.

## Test the changes before push them into the master branch.

In order to prove the changes we developed before release them in the "master" branch, we will use the "preview" branch to upload the changes, test them and show them to the customer before pushing them to the master branch.

When we have finished an issue solution, we upload the changes into the preview branch. If everything works fine and the customer is happy with the solution. We send the pull request to the "master" branch where the changes will be reviewed again and if they meet the requirements, They will be added into the "master" branch.