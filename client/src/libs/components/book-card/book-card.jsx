import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const BookCard = ({ book }) => {
  const link = `/books/${book.id}`;
  const bg = book.image;

  return (
    <Link to={link}>
      <div className={styles.card} style={{ backgroundImage: `url(${bg})` }} />
      <h3 className={styles.cardTitle}>{book.title}</h3>
    </Link>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired
};

export { BookCard };
