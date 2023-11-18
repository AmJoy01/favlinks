/* eslint-disable no-unused-vars */
import Table from './Table'
import Form from './Form'
import { useState } from 'react'
function LinkContainer(){

    const [linkData, setLinkData] = useState([
     "Testing if this works",
     "I really hope it works",
     "Don't forget the comma after each sentence"   
    ])

    const handleRemove = (index) => {
        /*
                TODO - Create logic for setting the state to filter array and remove favLink at index
            */
      }
    
      const handleSubmit = (newData) => {
        /*
                TODO - Create logic to set state and add new favLink to favLinks array in state
            */
        let newLinkData = linkData
        newLinkData.push(newData)
        newLinkData = localStorage.setItem("linkData", JSON.stringify(newLinkData))
        setLinkData(newLinkData)   
        
      }

    return(
        <div>
            <h1>My Favorite Links</h1>
            <p>Add a new link with a name and URL to the table!</p>
            <Table linkData={linkData}/>
            <h1>Add New</h1>
            <Form onNewData={handleSubmit}/>
        </div>
    )
}

export default LinkContainer