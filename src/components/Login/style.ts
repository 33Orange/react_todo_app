import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  link: {
    margin: '5px 0',
    fontSize: '14px',
    color: `#9a9898`,
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  },
  authorizationError: {
    margin: '5px 0',
    textAlign: 'center',
    color: `rgba(255, 0, 0, 0.6)`,
    fontSize: '18px',
  },
});
export default useStyles;
