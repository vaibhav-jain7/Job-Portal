import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div>
        <div className='parent'>
            <div>
                <div className="top"> 
                    <img src={props.brandLogo} alt="" />
                    <button type="button">Save <Bookmark size={14}/></button>   
                </div>
                <div className="center">
                    <h3>{props.companyName} <span>{props.datePosted}</span></h3>
                    <h2>{props.post}</h2>
                    <div className='center1'>
                        <h4>{props.tag1}</h4>
                        <h4>{props.tag2}</h4>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>{props.fees}</h3>
                    <p>{props.location}</p>
                </div>
                <button type="button">
                    <a href={props.Link} style={{color:'white'}}>Apply now</a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Card