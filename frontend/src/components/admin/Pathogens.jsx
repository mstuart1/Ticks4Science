import React, { useEffect, useState } from 'react'
import OutlineCard from '../ui/outlineCard/OutlineCard'
import PathogenDataService from '../../services/pathogens'

const Pathogens = () => {

    const [pathogens, setPathogens] = useState([])
    
    const getPathogens = () => {
        PathogenDataService.getAll()
          .then((response) => {
            setPathogens(response.data.data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      };
  
    useEffect(() => {
      getPathogens();
    }, []);

    console.log(pathogens)
  
    

  return (
   <OutlineCard>
    <h2>Pathogens</h2>
    <p>select all that tested positive</p>

   </OutlineCard>
  )
}

export default Pathogens