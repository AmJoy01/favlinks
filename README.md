# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# FavLinks Project

### Here are the steps:

- [] Look through the App.jsx
- [] Look through all of the files in the components folder for TODOs
- [] Create a simple HTML table using JSX in the Table.jsx
- [] Render your Table component properly in LinkContainer.jsx
- [] Review the code in TableHeader and TableBody
- [] Change your Table component to render the TableHeader and TableBody components
- [] Pass a prop called linkData to your Table component from the LinkContainer component
- [] Access and show data passed from LinkContainer in TableBody
- [] Create a state object in our LinkContainer to hold an array called favLinks
- [] Create a removeLink function in the LinkContainer class that updates the state and removes an item from favLinks
- [] Create a prop called removeLink that passes your removeLink function to your Table component
- [] Create a button in your TableBody with an onClick that calls this.props.removeLink and passes the index of the table row
- [] Create a Form component in your Form.jsx file with inputs and labels for name and URL
- [] Set the initial state of the Form to be an object with empty properties for a link name and URL
- [] Update the state of the Form every time the name or URL field is changed
- [] Render the Form component below the Table component in your LinkContainer
- [] Create a function called handleSubmit on the LinkContainer to update the state of this.state.favLinks and add new favLink from Form
- [] Add the handleSubmit as a parameter to your Form component
- [] Create a method called submitForm that calls the handleSubmit and passes the Form data and resets the state of the Form values to be empty
- [] Add a submit button to the Form that calls submitForm in its onClick parameter
