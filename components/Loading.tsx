'use client'
import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';


export default function Loading({loading,onClick}:any) {
  return (
      <LoadingButton  onClick={onClick}
      loading={loading} className='bg-[#008f8f] hover:bg-white hover:shadow shadow-white'
      variant="contained" sx={{
    color: '#000000',
    '& .MuiSlider-thumb': {
      borderRadius: '1px',
    },
  }}>
        Submit
      </LoadingButton>
   
    
  );
}