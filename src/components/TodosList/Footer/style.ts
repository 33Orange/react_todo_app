import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: `100%`,
    display: `flex`,
    padding: `10px 0`,
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.8)',
    background: '#fff',
    boxShadow: `0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2),
      0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2), 1px 3px 5px rgba(0, 0, 0, 0.4)`,
  },
});

export default useStyles;
