import PropTypes from 'prop-types';

import { useEffect, useRef, useState } from '~/libs/hooks/hooks.js';

const useClickOutsideHandler = initialState => {
  const [isOpen, setIsOpen] = useState(initialState);
  const reference = useRef();

  useEffect(() => {
    const handleOutsideClick = event => {
      if (reference.current && !reference.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return { isOpen, setIsOpen, ref: reference };
};

useClickOutsideHandler.propTypes = {
  initialState: PropTypes.bool
};

useClickOutsideHandler.defaultProps = {
  initialState: false
};

export { useClickOutsideHandler };
