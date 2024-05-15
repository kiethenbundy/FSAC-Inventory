import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup({ tab , nom ,usertypes, setUsertype}) {
    const rads =[...tab];

    

  const handleRole = (e) => {
    setUsertype(e.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">{nom}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={usertypes}
        onChange={handleRole}
      >

        {rads.map((rad) => (
            <FormControlLabel value={rad.value} key={rad.value} control={<Radio />} label={rad.label} />
          ))}
        
      </RadioGroup>
    </FormControl>
  );
}