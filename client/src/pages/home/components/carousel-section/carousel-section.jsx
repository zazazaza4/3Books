import PropsTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { BookCarousel } from '~/libs/components/book-carousel/book-carousel.jxs';
import { Button } from '~/libs/components/button/button.jsx';

import styles from './styles.module.scss';

const CarouselSection = ({ tag, books, title }) => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2>{title}</h2>
        <Link to={`/${tag}`}>
          <Button className="small">View more</Button>
        </Link>
      </div>
      <BookCarousel books={books} />
    </div>
  );
};

CarouselSection.propTypes = {
  tag: PropsTypes.string.isRequired,
  books: PropsTypes.array.isRequired,
  title: PropsTypes.string.isRequired
};

export { CarouselSection };
