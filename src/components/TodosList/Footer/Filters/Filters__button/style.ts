import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  button: {
    cursor: 'pointer',
    padding: '3px 5px',
    borderRadius: '5px',
    '&:hover': {
      outline: '1px solid rgba(255, 0, 0, 0.2)',
    },
    '&.active': {
      outline: '1px solid rgba(255, 0, 0, 0.4)',
    },
  },
});

export default useStyles;
