import { ErrorMessage } from '@hookform/error-message';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

import { IconName } from '~/libs/enums/enums.js';

import { Icon } from '../icon/icon.jsx';
import styles from './styles.module.scss';

const Input = ({
  name,
  disabled,
  control,
  type,
  placeholder,
  className,
  errors,
  iconName,
  rows
}) => {
  const { field } = useController({ name, control });
  const isTextarea = Boolean(rows);

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputContainer}>
        {iconName && (
          <span className={styles.icon}>
            <Icon name={iconName} />
          </span>
        )}
        {isTextarea ? (
          <textarea
            {...field}
            name={name}
            rows={rows}
            placeholder={placeholder}
            className={clsx(styles.textArea, className)}
          />
        ) : (
          <input
            {...field}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            className={clsx(
              styles.input,
              iconName && styles.withIcon,
              className
            )}
          />
        )}
      </div>
      <span className={styles.errorWrapper}>
        <ErrorMessage errors={errors} name={name} />
      </span>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.oneOfType([PropTypes.object]).isRequired,
  errors: PropTypes.oneOfType([PropTypes.object]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['email', 'password', 'submit', 'text']),
  placeholder: PropTypes.string.isRequired,
  rows: PropTypes.number,
  iconName: PropTypes.oneOf(Object.values(IconName))
};

Input.defaultProps = {
  disabled: false,
  className: '',
  type: 'text',
  errors: {},
  rows: 0
};

export { Input };
