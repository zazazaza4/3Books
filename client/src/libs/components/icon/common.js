import { faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import { IconName } from '~/libs/enums/enums.js';

const iconNameToSvgIcon = {
  [IconName.USER]: faUser,
  [IconName.USER_CIRCLE]: faUserCircle
};

export { iconNameToSvgIcon };
