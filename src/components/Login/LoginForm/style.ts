import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    margin: '7px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  validateError: {
    fontSize: '12px',
    alignText: 'center',
    color: `rgba(255, 0, 0, 0.6)`,
  },
});

export default useStyles;
