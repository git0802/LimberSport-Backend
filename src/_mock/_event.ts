import cloneDeep from 'lodash/cloneDeep';
import {
  addDays,
  subDays,
  getTime,
  setHours,
  endOfDay,
  subHours,
  setMinutes,
  startOfDay,
} from 'date-fns';
// theme
import palette from 'src/theme/palette';
// _mock
import { _mock } from 'src/_mock';

// ----------------------------------------------------------------------

const primaryMain = palette.primary.main;
const secondaryMain = palette.secondary.main;
const infoMain = palette.info.main;
const infoDarker = palette.info.darker;
const successMain = palette.success.main;
const warningMain = palette.warning.main;
const errorMain = palette.error.main;
const errorDarker = palette.error.darker;

const now = new Date();

const formatTime = (date: Date) => subHours(date, 7);

const _events = [
  {
    id: _mock.id(1),
    allDay: false,
    color: primaryMain,
    description: _mock.description(1),
    start: setHours(setMinutes(subDays(now, 12), 30), 7),
    end: setHours(setMinutes(subDays(now, 12), 0), 9),
    title: _mock.postTitle(1),
  },
  {
    id: _mock.id(2),
    allDay: false,
    color: infoMain,
    description: _mock.description(2),
    start: setHours(setMinutes(subDays(now, 6), 0), 2),
    end: setHours(setMinutes(subDays(now, 6), 30), 5),
    title: _mock.postTitle(2),
  },
  {
    id: _mock.id(3),
    allDay: false,
    color: successMain,
    description: _mock.description(3),
    start: setHours(setMinutes(addDays(now, 3), 0), 8),
    end: setHours(setMinutes(addDays(now, 3), 0), 12),
    title: _mock.postTitle(3),
  },
  {
    id: _mock.id(4),
    allDay: false,
    color: secondaryMain,
    description: _mock.description(4),
    start: setHours(setMinutes(now, 0), 8),
    end: setHours(setMinutes(now, 0), 12),
    title: _mock.postTitle(4),
  },
  {
    id: _mock.id(5),
    allDay: false,
    color: warningMain,
    description: _mock.description(5),
    start: setHours(setMinutes(addDays(now, 3), 15), 5),
    end: setHours(setMinutes(addDays(now, 3), 30), 5),
    title: _mock.postTitle(5),
  },
  {
    id: _mock.id(6),
    allDay: true,
    color: errorMain,
    description: _mock.description(6),
    start: formatTime(endOfDay(subDays(now, 4))),
    end: formatTime(startOfDay(subDays(now, 3))),
    title: _mock.postTitle(6),
  },
  {
    id: _mock.id(7),
    allDay: false,
    color: infoDarker,
    description: _mock.description(7),
    start: setHours(setMinutes(addDays(now, 3), 45), 7),
    end: setHours(setMinutes(addDays(now, 3), 50), 7),
    title: _mock.postTitle(7),
  },
  {
    id: _mock.id(8),
    allDay: false,
    color: infoMain,
    description: _mock.description(8),
    start: setHours(setMinutes(addDays(now, 3), 50), 8),
    end: setHours(setMinutes(addDays(now, 3), 55), 8),
    title: _mock.postTitle(8),
  },
  {
    id: _mock.id(9),
    allDay: false,
    color: errorDarker,
    description: _mock.description(9),
    start: setHours(setMinutes(addDays(now, 6), 12), 7),
    end: setHours(setMinutes(addDays(now, 8), 20), 7),
    title: _mock.postTitle(9),
  },
];

// ----------------------------------------------------------------------

let data = _events.map((event) => ({
  ...event,
  start: getTime(event.start),
  end: getTime(event.end),
}));

export function getData() {
  return cloneDeep(data);
}

export function saveData(newData: Record<string, any>[]) {
  const reduceItems = Object.values(
    newData.reduce((accumulator: Record<string, any>, current: any) => {
      if (!accumulator[current.id]) {
        accumulator[current.id] = current;
      } else {
        accumulator[current.id] = { ...accumulator[current.id], ...current };
      }
      return accumulator;
    }, {})
  );

  data = reduceItems;
}
