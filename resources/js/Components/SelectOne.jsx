import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants({ nom, tab, handleChange, nom2}) {

    const names = [...tab];



  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">{nom}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={nom2}
          onChange={handleChange}
          label={nom}
        >
            {names.map((name) => (
            <MenuItem key={name.value} value={name.value}>
              {name.label}
            </MenuItem>
          ))}

        </Select>
      </FormControl>
      </div>
   );
}