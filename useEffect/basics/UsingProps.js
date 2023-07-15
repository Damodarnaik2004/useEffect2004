import React from 'react'
import { MdVerified } from "react-icons/vsc";
const UsingProps = ({newUsers}) => {
  return (
    <div>
         <center>
        {
            newUsers.map((element)=>(
              <div key={element.id}>
                <h1>Titel :{element.title} <MdVerified /> </h1>
                <img src={element.thumbnailUrl} height={100} width={100} />
                <div>
                  hello world
                </div>
              </div>

            ))
        }
      </center>
    </div>
  )
}

export default UsingProps
