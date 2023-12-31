import './styles.scss';

import PropsTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BookCard } from '../book-card/book-card.jsx';

const BookCarousel = ({ books, tag }) => {
  return (
    <div className="carousel">
      <Swiper grabCursor spaceBetween={10} slidesPerView="auto">
        {books.map((book, index) => (
          <SwiperSlide key={index}>
            <BookCard book={book} tag={tag} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

BookCarousel.propTypes = {
  tag: PropsTypes.string.isRequired,
  books: PropsTypes.array.isRequired
};

export { BookCarousel };
