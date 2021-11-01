import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    height: 30,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    boxShadow:
      '0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2)',
  },
  logo: {
    color: 'rgba(255, 0, 0, 0.4)',
    fontSize: 20,
  },
  button: {
    margin: '0 10px',
  },
  link: {
    textDecoration: 'none',
    color: '#1976d2',
    transition: '0.3s',
    '&:hover': {
      opacity: '0.7',
    },
  },
  menu: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default useStyles;
