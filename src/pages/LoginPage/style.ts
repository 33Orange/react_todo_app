import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  inputCont: {
    display: 'flex',
    margin: 2,
  },
  buttonCont: {
    margin: '15px 0',
    width: '60%',
    display: 'flex',
    justifyContent: 'space-around',
  },
});
export default useStyles;
