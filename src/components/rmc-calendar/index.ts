import { Models } from './panel/DataTypes';

export { default as RMCCalendar, ExtraData, CellData, PropsType as CalendarPropsType } from './Calendar';
export { default as CalendarPanel, PropsType as CalendarPanelPropsType } from './panel/CalendarPanel';

import zhCN from './locale/zh_CN';
import enUS from './locale/en_US';
import arEG from './locale/ar_EG';
const Locale = { zhCN, enUS, arEG };

type LocaleType = Models.Locale;
export { Locale, LocaleType };
