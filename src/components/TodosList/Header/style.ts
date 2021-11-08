import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: `100%`,
    borderBottom: `1px solid rgba(0, 0, 0, 0.4)`,
    height: 50,
  },
  inputContainer: {
    width: `100%`,
    height: `100%`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `flex-end`,
    position: `relative`,
  },
  input: {
    width: `95%`,
    height: 40,
    border: `none`,
    outline: `none`,
    background: `none`,
    fontSize: 25,
    '&::-webkit-input-placeholder': {
      fontWeight: `500`,
      color: `rgba(0, 0, 0, 0.2)`,
      fontStyle: `italic`,
    },
  },
});

export default useStyles;
