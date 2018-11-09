import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './styles.scss';

const PageTitle = ({ h1, h4 }) => (
  <section className={styles.Header}>
    {h4 && <h4>{h4}</h4>}
    <h1>{h1}</h1>
  </section>
);

PageTitle.propTypes = {
  h4: PropTypes.string,
  h1: PropTypes.string.isRequired,
};
export default PageTitle;
