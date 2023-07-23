import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Icon } from '~/libs/components/icon/icon.jsx';
import { IconName } from '~/libs/enums/enums.js';

import styles from './styles.module.scss';

const DropdownItem = ({ className, text, href, iconName, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(styles.dropdownItem, className)}
    >
      {iconName && (
        <span className={styles.icon}>
          <Icon name={iconName} />
        </span>
      )}
      <Link to={href}> {text} </Link>
    </button>
  );
};

DropdownItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  iconName: PropTypes.oneOf(Object.values(IconName))
};

DropdownItem.defaultProps = {
  className: ''
};

export { DropdownItem };
