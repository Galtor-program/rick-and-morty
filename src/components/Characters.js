import React from 'react'

const Characters = ({characters = []}) => {
  return (
    <div className='row'>
        
            {
                characters.map((item, index) => (
                    <div key={index} className='col mb-2'>

                        <div className='card text-white bg-secondary' style={{minWidth: "200px", boxShadow: "10px 5px 5px black"}}>
                            <img src={item.image} alt="" />
                            <div className='card-body'>
                              <h5 className='card-title'>{item.name}</h5>
                              <h6 className='card-subtitle mb-2 text-muted'>{item.species}</h6>  
                              <hr/>
                              <p>Status: {item.status}</p>
                              <p>Gender: {item.gender}</p>
                             
                            </div>
                        </div>
                    </div>
                        
                ))}
        
    </div>
  );
}

export default Characters