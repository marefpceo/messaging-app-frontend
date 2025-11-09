import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

function FontColorSelector({
  selectedFontColor,
  setSelectedFontColor,
  settingsChange,
  setSettingsChange,
}) {
  function handleChange(e) {
    if (settingsChange === false) {
      setSettingsChange(true);
    }
    setSelectedFontColor(e.target.value);
  }

  return (
    <div className='font-color-select'>
      <FormControl className='min-w-full'>
        <FormLabel
          id='font-color-select-group'
          className='text-lg text-black'
          focused='false'
        >
          Font Color
        </FormLabel>
        <RadioGroup
          row
          value={selectedFontColor}
          name='color-select-group'
          sx={{ border: 1, borderRadius: 2, padding: 1, width: '100%' }}
          className='flex justify-evenly'
          onChange={handleChange}
        >
          <FormControlLabel
            value='text-black'
            control={<Radio size='large' className='text-black' />}
          />
          <FormControlLabel
            value='text-slate-400'
            control={<Radio size='large' className='text-slate-400' />}
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

export default FontColorSelector;
