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
  completeAllBtn: {
    left: 0,
    width: `10%`,
    border: `none`,
    position: `absolute`,
    opacity: 0,
    zIndex: -1,
    '&:checked + label': {
      opacity: 0.65,
    },
  },
  label: {
    fontSize: 25,
    width: `6%`,
    marginLeft: `7%`,
    marginRight: `5%`,
    display: `inline-flex`,
    alignItems: `center`,
    userSelect: `none`,
    transform: `rotate(90deg)`,
    opacity: 0.2,
    transition: '0.3s',
    '&:hover': {
      opacity: 0.4,
    },
  },
});

export default useStyles;
