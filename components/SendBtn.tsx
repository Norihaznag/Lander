import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function SendBtn({action}) {
  return (
    <Stack direction="row" spacing={2} >
      <Button size="large" sx={{
    width: 100,
    color: '#ffffff',
    background : '#2a8798',
    borderRadius : 3,
    "&:hover" :{
        background: '#00414a',
      },
  }}
      variant="contained" endIcon={<SendIcon />} onClick={()=> action}>
        Send
      </Button>
    </Stack>
  );
}