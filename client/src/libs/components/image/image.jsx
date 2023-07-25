import clsx from 'clsx';
import PropTypes from 'prop-types';

import { ImageSize } from '~/libs/enums/enums.js';

import styles from './styles.module.scss';

const Image = ({
  width,
  height,
  isCircular,
  isCentered,
  src,
  alt,
  className,
  size
}) => (
  <img
    className={clsx(
      styles.image,
      className,
      isCircular && styles.circular,
      isCentered && styles.centered,
      size && styles[`imageSize__${size}`]
    )}
    width={width}
    height={height}
    alt={alt}
    src={src}
  />
);

Image.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  isCircular: PropTypes.bool,
  isCentered: PropTypes.bool,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.values(ImageSize))
};

Image.defaultProps = {
  isCentered: false,
  isCircular: false,
  className: undefined,
  height: undefined,
  size: undefined,
  width: undefined
};

export { Image };
