import keyBy from 'lodash/keyBy';
import { addDays } from 'date-fns';
// utils
import uuidv4 from 'src/utils/uuidv4';
// _mock
import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const now = new Date();

const COLUMN_NAMES = ['To Do', 'In Progress', 'Ready To Test', 'Done'];

const ATTACHMENTS = [...Array(20)].map((_, index) => _mock.image.cover(index));

const REPORTER = {
  id: _mock.id(16),
  name: _mock.fullName(16),
  avatarUrl: _mock.image.avatar(16),
};

const ASSIGNEES = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  avatarUrl: _mock.image.avatar(index),
}));

const COMMENTS = [...Array(8)].map((_, index) => ({
  id: uuidv4(),
  name: _mock.fullName(index),
  createdAt: _mock.time(index),
  avatarUrl: _mock.image.avatar(index),
  messageType: [1, 2].includes(index) ? 'image' : 'text',
  message: [1, 2].includes(index) ? _mock.image.cover(index + 5) : _mock.sentence(index),
}));

// ----------------------------------------------------------------------

const tasks = [...Array(6)].map((_, index) => {
  const assignee = ASSIGNEES.slice(0, index);

  const comments = COMMENTS.slice(0, index);

  const attachments =
    (index === 1 && ATTACHMENTS.slice(11, 15)) || (index === 5 && ATTACHMENTS.slice(4, 9)) || [];

  const status =
    ([0, 1, 2].includes(index) && 'To Do') ||
    ([3, 4].includes(index) && 'In Progress') ||
    ([5].includes(index) && 'Done') ||
    '';

  const due =
    index === 0
      ? [null, null]
      : [addDays(now, index + 1).getTime(), addDays(now, index + 2).getTime()];

  const priority =
    ([1, 3].includes(index) && 'hight') || ([2, 4].includes(index) && 'medium') || 'low';

  const labels = _tags.slice(0, index);

  return {
    id: `${index + 1}-task-${_mock.id(index)}`,
    due,
    status,
    labels,
    comments,
    assignee,
    priority,
    attachments,
    reporter: REPORTER,
    name: _mock.taskNames(index),
    description: _mock.description(index),
  };
});

const columns = COLUMN_NAMES.map((name, index) => {
  const taskIds = tasks.filter((filter) => filter.status === name).map((task) => task.id);

  return {
    id: `${index + 1}-column-${_mock.id(index)}`,
    name,
    taskIds,
  };
});

const columnsKeyBy = keyBy(columns, 'id');

export const _board = {
  columns: columnsKeyBy,
  tasks: keyBy(tasks, 'id'),
  ordered: Object.keys(columnsKeyBy),
};
