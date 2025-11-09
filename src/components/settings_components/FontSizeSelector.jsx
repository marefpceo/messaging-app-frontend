import { useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 1,
    label: 'Small',
  },
  {
    value: 2,
    label: 'Normal',
  },
  {
    value: 3,
    label: 'Large',
  },
];

function FontSizeSelector({
  selectedFontSize,
  setSelectedFontSize,
  settingsChange,
  setSettingsChange,
}) {
  const [convertedSize, setConvertedSize] = useState('');

  useEffect(() => {
    function convertFontSize() {
      switch (selectedFontSize) {
        case 'text-sm':
          setConvertedSize(1);
          break;
        case 'text-base':
          setConvertedSize(2);
          break;
        case 'text-lg':
          setConvertedSize(3);
          break;
      }
    }
    convertFontSize();
  }, [selectedFontSize]);

  function handleChange(e) {
    if (settingsChange === false) {
      setSettingsChange(true);
    }

    switch (e.target.value) {
      case 1:
        setSelectedFontSize('text-sm');
        break;
      case 2:
        setSelectedFontSize('text-base');
        break;
      case 3:
        setSelectedFontSize('text-lg');
        break;
    }
  }

  return (
    <div className='font-size-select min-w-full'>
      <p className='text-lg text-black'>Font Size</p>
      <div className='border rounded-lg p-2 flex justify-center'>
        <Slider
          className='w-3/4 text-gray-700'
          aria-label='Font Size'
          value={convertedSize}
          marks={marks}
          min={1}
          max={3}
          track={false}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default FontSizeSelector;
