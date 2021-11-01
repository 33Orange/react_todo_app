import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: '3%',
  },
  button: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export default useStyles;
