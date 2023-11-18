/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react"


function Form(){

   const [names, setNames] = useState("")
   const [URL, setURL] = useState("")


    return (
        <form>
            <label htmlFor="linkName">Link name:</label>
            <input 
            type="text" 
            id="linkName" 
            name="linkName"
            value={names}
            onChange={(e) => setNames(e.target.value)}
            />
            <br/>
            <br/>
            <label htmlFor="URL">URL:</label>
            <input 
            type="text" 
            id="linkURL" 
            name="linkURL"
            value={URL}
            onChange={(e) => setURL(e.target.value)}
            />
            <br/>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Form