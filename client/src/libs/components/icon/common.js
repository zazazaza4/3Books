import {
  faCircleNotch,
  faImage,
  faLock,
  faQuestion,
  faSignOutAlt,
  faUser,
  faUserCircle,
  faUserPen
} from '@fortawesome/free-solid-svg-icons';

import { IconName } from '~/libs/enums/enums.js';

const iconNameToSvgIcon = {
  [IconName.IMAGE]: faImage,
  [IconName.LOCK]: faLock,
  [IconName.LOG_OUT]: faSignOutAlt,
  [IconName.SPINNER]: faCircleNotch,
  [IconName.USER]: faUser,
  [IconName.USER_CIRCLE]: faUserCircle,
  [IconName.USER_EDIT]: faUserPen,
  [IconName.QUESTION]: faQuestion
};

export { iconNameToSvgIcon };
