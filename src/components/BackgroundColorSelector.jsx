import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

function BackgroundColorSelector({ selectedColor, setSelectedColor }) {
  function handleChange(e) {
    setSelectedColor(e.target.value);
  }

  return (
    <div className='background-color-select'>
      <FormControl className='min-w-full'>
        <FormLabel
          id='background-color-select-group'
          className='text-lg text-black'
          focused='false'
        >
          Background Color
        </FormLabel>
        <RadioGroup
          row
          value={selectedColor}
          name='color-select-group'
          sx={{ border: 1, borderRadius: 2, padding: 1, width: '100%' }}
          className='flex justify-evenly'
          onChange={handleChange}
        >
          <FormControlLabel
            value='text-gray-500'
            control={<Radio size='large' className='text-gray-500' />}
          />
          <FormControlLabel
            value='text-slate-400'
            control={<Radio size='large' className='text-slate-400' />}
          />
          <FormControlLabel
            value='text-lime-400'
            control={<Radio size='large' className='text-lime-400' />}
          />
          <FormControlLabel
            value='text-red-400'
            control={<Radio size='large' className='text-red-400' />}
          />
          <FormControlLabel
            value='text-white'
            control={<Radio size='large' className='text-white' />}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default BackgroundColorSelector;
