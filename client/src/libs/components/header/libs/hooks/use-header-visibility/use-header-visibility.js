import { useEffect, useState } from '~/libs/hooks/hooks.js';

const useHeaderVisibility = () => {
  const [isHeaderVisible, setHeaderVisibility] = useState(true);
  const [previousScrollPos, setPreviousScrollPos] = useState(
    window.pageYOffset
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = previousScrollPos < currentScrollPos;
      const isScrolledMoreThan100px = currentScrollPos > 100;

      if (isScrolledMoreThan100px) {
        setHeaderVisibility(!isScrolledDown);
      }

      setPreviousScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [previousScrollPos]);

  return isHeaderVisible;
};

export { useHeaderVisibility };
