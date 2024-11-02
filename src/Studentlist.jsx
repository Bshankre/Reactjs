import React, { Fragment }  from 'react'
import { Link } from 'react-router-dom'

// npm i json
// npm i json-server
// npx json-server --watch backend/db.json --port 5000 

const Studentlist = ({name,email,phone,date,subject,stream,id}) => {
  return (
    <Fragment id="fied">
           
            <tr className='td'>
              <td className='td'><span>{name}</span> </td>
              <td className='td'><span>{email}</span></td>
              <td className='td'><span>{phone}</span> </td>
              <td className='td'><span>{date}</span></td>
              <td className='td'><span>{stream}</span></td>
              <td className='td'><span>{subject}</span></td>
              <td className='td'> <Link to={`/edit/${id}`}>Edit</Link></td>
              <td className='td'>   <Link to={`/delete/${id}`}>Delete</Link></td>
            </tr>  
 </Fragment>
  )
}

export default Studentlist
