# CV Application

To help start off my journey into ReactJS I created a CV application that can take a users input and then display it in an HTML view. I made this to help learn how to use state and props and how to both lift state up and down. I also looked into conditional rendering to help handle the switch between the editing view to the html preview view of the application.

I broke down the main items of the application into components (Header, Personal, Education, Practical, Switch). The switch was broken into a component due to being used in more than one area on the application in the editing view and was in an attempt to start thinking in React.

Version 2: With the latest PR this application has now been rewritten to fully only use functional components!

[Live Demo](https://taylorjonestrt.github.io/cv-application-react/)

## Run Locally

```
git clone https://github.com/TaylorJonesTRT/cv-application-react.git
cd react-cv-application
npm install
npm run start
```

## Built With

[ReactJS](https://reactjs.org/)

[Pretty Checkbox React](https://pretty-checkbox-react.netlify.app/)
