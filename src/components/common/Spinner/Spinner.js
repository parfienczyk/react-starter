import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './styles.module.scss';

const Spinner = ({ ...props }) => (
  <CircularProgress
    className={styles.SpinnerContainer}
    size={50}
    color="primary"
    {...props}
  />
);

export default Spinner;
