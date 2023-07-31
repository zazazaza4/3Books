import { Route, Routes } from 'react-router-dom';

import { Header } from '~/libs/components/header/header.jsx';
import { Notifications } from '~/libs/components/notifications/notifications.jsx';
import { PrivateRoute } from '~/libs/components/private-route/private-route.jsx';
import { PublicRoute } from '~/libs/components/public-route/public-route.jsx';
import { AppRoute } from '~/libs/enums/enums.js';
import { useSelector } from '~/libs/hooks/hooks.js';
import { Book } from '~/pages/book/book.jsx';
import { Home } from '~/pages/home/home.jsx';
import { NotFound } from '~/pages/not-found/not-found.jsx';
import { Profile } from '~/pages/profile/profile.jsx';
import { Sign } from '~/pages/sign/sign.jsx';

const App = () => {
  const { user } = useSelector(state => ({
    user: state.profile.user
  }));
  return (
    <div>
      <Header user={user} />
      <main id="main">
        <Routes>
          <Route
            path={AppRoute.LOGIN}
            element={<PublicRoute component={Sign} />}
          />
          <Route
            path={AppRoute.REGISTRATION}
            element={<PublicRoute component={Sign} />}
          />
          <Route
            path={AppRoute.ROOT}
            element={<PrivateRoute component={Home} />}
          />
          <Route
            path={AppRoute.BOOKS}
            element={<PrivateRoute component={Home} />}
          />
          <Route
            path={AppRoute.BOOK}
            element={<PrivateRoute component={Book} />}
          />
          <Route
            path={AppRoute.PROFILE}
            element={<PrivateRoute component={Profile} />}
          />
          <Route path={AppRoute.ANY} element={<NotFound />} />
        </Routes>
      </main>
      <Notifications />
    </div>
  );
};
export { App };
