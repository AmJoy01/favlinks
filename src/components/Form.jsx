/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react"


function Form(props){

   const [name, setName] = useState("")
   const [url, setUrl] = useState("")

   const handleNameChange = (e) =>{
    setName(e.target.value)
   }

   const handleFormSubmit = (e) =>{
    e.preventDefault()
    // alert(name)
    console.log(name)
    props.onNewData(name)
    // const newLinkData = {name: name}
    // handleSubmit(newLinkData)
   }
    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="linkName">Link name:</label>
            <input 
            type="text" 
            id="linkName" 
            name="linkName"
            value={name}
            onChange={handleNameChange}
            />
            <br/>
            <br/>
            {/* <label htmlFor="URL">URL:</label>
            <input 
            type="text" 
            id="linkURL" 
            name="linkURL"
            value={URL}
            onChange={(e) => setURL(e.target.value)}
            /> */}
            <br/>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Form