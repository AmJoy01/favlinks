/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {Link} from "react-router-dom"

function TableHeader(){
    /* responsible for rendering the head of our table with the appropriate columns*/
    return(
    <thead>
        <tr>
            <th>Name</th>
            <th>URL</th>
            <th>Remove</th>
        </tr>
    </thead>
    )
}

const TableBody = (props) => {
    // boilerplate table body functional component
    // we use Array.map to create table rows from LinkData passed via props
    // console.log(props.linkData)
    const rows = props.linkData.map((row, index) =>{
    return(
                <tr key={index}>
                        <td>{row.name}</td>
                        <td><a href={row.url}>{row.url}</a></td>
                        <td>
                            <button onClick={() => props.removeLink(index)}>Remove</button>
                        </td>
                </tr>
    )    
    })
    return <tbody>{rows}</tbody>
    
    // return <tbody>{rows}</tbody>
  }

function Table(props){
    return (
        <table>
             <TableHeader/>
             <TableBody linkData={props.linkData} removeLink={props.removeLink}/>
        </table>
    )
}

export default Table