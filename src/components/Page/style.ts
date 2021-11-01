import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: 450,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    backgroundColor: '#fff',
    boxShadow: `0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 
        0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2), 1px 3px 5px rgba(0, 0, 0, 0.4)`,
  },
  title: {
    textAlign: `center`,
    fontSize: 80,
    fontWeight: 300,
    color: `rgba(255, 0, 0, 0.2)`,
    width: `100%`,
    margin: `50px 0`,
  },
});

export default useStyles;
