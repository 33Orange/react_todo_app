import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    position: `relative`,
    display: `inline-block`,
    verticalAlign: `middle`,
    '& select': {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      color: `#000`,
      fontSize: `inherit`,
      border: `1px solid rgba(0, 0, 0, 0.4)`,
      paddingRight: `1.5em`,
      marginRight: 15,
      outline: 0,
      borderRadius: 4,
      textIndent: 0.01,
      textOverflow: '',
      '-webkit-appearance': `button`,
    },
    '&::before, &::after': {
      content: '',
      position: `absolute`,
      pointerEvents: `none`,
    },
    '&::before': {
      width: '2em',
      right: 0,
      top: 0,
      bottom: 0,
      borderRadius: `0 3px 3px 0`,
    },
    '& select[disabled]': {
      color: `rgba(0,0,0,.3)`,
    },

    '& select[disabled]::after': {
      color: `rgba(0,0,0,.1)`,
    },
  },
});

export default useStyles;
