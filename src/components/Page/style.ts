import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: 450,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
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
