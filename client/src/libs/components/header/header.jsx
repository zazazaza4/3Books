import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from '~/assets/images/logo.png';
import { AppRoute, IconName } from '~/libs/enums/enums.js';
import { useCallback } from '~/libs/hooks/hooks.js';
import { DEFAULT_USER_AVATAR } from '~/packages/user/constants/constants.js';

import { Button } from '../button/button.jsx';
import { Image } from '../image/image.jsx';
import { DropdownItem } from './components/dropdown-item/dropdown-item.jsx';
import { useClickOutsideHandler } from './libs/hooks/use-click-outside-handler/use-click-outside-handler.js';
import { useHeaderVisibility } from './libs/hooks/use-header-visibility/use-header-visibility.js';
import styles from './styles.module.scss';

const Header = ({ user, onUserLogout }) => {
  const isHeaderVisible = useHeaderVisibility();
  const { isOpen, setIsOpen, ref } = useClickOutsideHandler(false);

  const handleUserWrapperClick = useCallback(
    event => {
      event.preventDefault();
      setIsOpen(!isOpen);
    },
    [isOpen, setIsOpen]
  );

  return (
    <header className={clsx(styles.header, isHeaderVisible || styles.hidden)}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>
          <Link to={AppRoute.ROOT}>
            <Image src={Logo} alt="Logo" height="100%" />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <Link to={AppRoute.ROOT}>Books</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to={AppRoute.MY_BOOKS}>My Books</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to={AppRoute.ABOUT}>About</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to={AppRoute.CONTACT}>Contact</Link>
            </li>
          </ul>
          {user ? (
            <Link
              onClick={handleUserWrapperClick}
              to={AppRoute.ROOT}
              ref={ref}
              className={styles.userWrapper}
            >
              <Image
                isCircular
                width="45"
                height="45"
                src={user.image?.link ?? DEFAULT_USER_AVATAR}
                alt="user avatar"
              />

              <div
                className={clsx(
                  styles.dropdownMenu,
                  isOpen ? styles.active : styles.inactive
                )}
              >
                <Image
                  isCircular
                  isCentered
                  width="75"
                  height="75"
                  src={user.image?.link ?? DEFAULT_USER_AVATAR}
                  alt="user avatar"
                />

                <h3>{user.username}</h3>
                <hr />
                <section className={styles.dropdownItems}>
                  <DropdownItem
                    iconName={IconName.USER}
                    text="My Profile"
                    href={AppRoute.PROFILE}
                  />
                  <DropdownItem
                    iconName={IconName.USER_EDIT}
                    text="Edit Profile"
                    href={AppRoute.PROFILE_EDIT}
                  />
                  <DropdownItem
                    iconName={IconName.QUESTION}
                    text="Helps"
                    href={AppRoute.HELP}
                  />
                  <DropdownItem
                    iconName={IconName.LOG_OUT}
                    text="Logout"
                    href={AppRoute.LOGIN}
                    onClick={onUserLogout}
                  />
                </section>
              </div>
            </Link>
          ) : (
            <div className={styles.btnGroup}>
              <Button color="lime">Sign in</Button>
              <Button color="lime">Sign up</Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  onUserLogout: PropTypes.func
};

export { Header };
