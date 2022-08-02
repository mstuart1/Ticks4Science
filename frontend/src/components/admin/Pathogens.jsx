import React, { useEffect, useState } from 'react'
import OutlineCard from '../ui/outlineCard/OutlineCard'
import PathogenDataService from '../../services/pathogens'

const Pathogens = ({tick, updateSub}) => {
  console.log(tick)

    const [pathogens, setPathogens] = useState([])
    // the input is an array of pathogens
    const [input, setInput] = useState([tick.pathogens])
    
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
      
    const handleChange = ({target}) => {
      const { value, checked } = target;
      console.log(value, checked)
      let freshState = []
      if (checked){
        freshState = [...input, value]
      } else {
        freshState = input.filter(id => id !== value)
      }
      setInput(freshState);
      handlePathogen(tick.id, input)
  };

  const handlePathogen = (id, pathogens) => {
    let data = {pathogens: pathogens}
    return updateSub(data, id)
  }

  console.log(input)
    
    let pathogenElems = pathogens.length > 0 && pathogens.map(patho => (
      <div style={{width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
      <input type='checkbox' id={patho.pathogen} name={patho.pathogen} value={patho.id} style={{margin: '1rem'}} checked={input.some(value => value === patho.id)} 
      onChange={evt => handleChange(evt)} 
      // onChange={() => console.log('clicked')} 
      />
      <label htmlFor={patho.pathogen}>{patho.pathogen}</label>
      </div>
    ))

  return (
   <OutlineCard>
    <h2>Pathogens</h2>
    <p>select all that tested positive</p>
    {pathogenElems}
   </OutlineCard>
  )
}

export default Pathogens