export const yesNo = [
    {id: 1, text: 'Yes'},
    {id: 2, text: 'No'},
]

export const foundOptions = [
    {id: 1, text: 'Person'},
    {id: 2, text: 'Animal'},
    {id: 3, text: 'Environment/Outside'},
    {id: 4, text: 'Other'},
]
export const attachedOptions = [
    {id: 1, text: 'Yes'},
    {id: 2, text: 'No'},
    {id: 3, text: 'Unknown/Believe So'},
]

export const locationOptions = [
    {id: 1, text: 'Backyard'},
    {id: 2, text: 'Park/Playground'},
    {id: 3, text: 'Recreational area outside'},
    {id: 4, text: 'Forest/Wooded area'},
    {id: 5, text: 'Field/Grassy area'},
    {id: 6, text: 'Garden/Agriculture'},
    {id: 7, text: 'Other'},
]

export const inputElemArray1 = [
  {id: 1, type: 'text', name: 'userMuni', required: true, placeholder: 'Where you live', label: 'Municipality*' },
  {id: 2, type: 'text', name: 'userZip', required: true, placeholder: 'Where you live', label: 'Zipcode*' },
]



export const inputElemArray2 = [
    {id: 3, type: 'date', name: 'dateTickFound', required: true, placeholder: 'dd/mm/yyyy', label: 'Date tick was found*' },
  {id: 5, type: 'text', name: 'tickMuni', required: true, placeholder: 'Where tick was found', label: 'Municipality*' },
  {id: 6, type: 'text', name: 'tickCounty', required: true, placeholder: 'Where tick was found', label: 'County*' },
  {id: 7, type: 'text', name: 'tickZip', required: true, placeholder: 'Where tick was found', label: 'Zipcode*' },  
]

export const bittenInfoArray = [
    {id: 8, type: 'text', name: 'bittenMuni', required: true, placeholder: 'Where the bitten person lives', label: 'Municipality of bitten person*' },
    {id: 9, type: 'text', name: 'bittenZip', required: true, placeholder: 'Where the bitten person lives', label: 'Zipcode of bitten person*' },  
]
