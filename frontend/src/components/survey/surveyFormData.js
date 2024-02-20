export const foundArray = [
    { value: "Person", required: true, label: "Person" },
    { value: "Animal", required: true, label: "Animal" },
    {
        value: "Environment/Outside",
        required: true,
        label: "Environment/Outside",
    },
    { value: "Other", required: true, label: "Other" },
];

export const yesNoArray = [
    { value: "yes", required: true, label: "Yes" },
    { value: "no", required: true, label: "No" },
    { value: "unknown", required: true, label: "Unknown/Believe So" },
];

export const locationOptions = [
    {id: 1, required: true, label: 'Backyard', value: 'Backyard'},
    {id: 2, required: true, label: 'Park/Playground', value: 'Park/Playground'},
    {id: 3, required: true, label: 'Recreational area outside', value: 'Recreational area outside'},
    {id: 4, required: true, label: 'Forest/Wooded area', value: 'Forest/Wooded area'},
    {id: 5, required: true, label: 'Field/Grassy area', value: 'Field/Grassy area'},
    {id: 6, required: true, label: 'Garden/Agriculture', value: 'Garden/Agriculture'},
    {id: 7, required: true, label: 'Other', value: 'Other'},
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
