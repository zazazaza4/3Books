import { Route, Routes } from 'react-router-dom';

import { Notifications } from '~/libs/components/notifications/notifications.jsx';
import { PrivateRoute } from '~/libs/components/private-route/private-route.jsx';
import { PublicRoute } from '~/libs/components/public-route/public-route.jsx';
import { AppRoute } from '~/libs/enums/enums.js';
import { Book } from '~/pages/book/book.jsx';
import { Books } from '~/pages/books/books.jsx';
import { NotFound } from '~/pages/not-found/not-found.jsx';
import { Profile } from '~/pages/profile/profile.jsx';
import { Sign } from '~/pages/sign/sign.jsx';

const App = () => {
  return (
    <div>
      <header>Header</header>
      <main>
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
            element={<PrivateRoute component={Books} />}
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
