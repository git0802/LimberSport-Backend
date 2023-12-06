// _mock
import { _mock } from './_mock';
import { _files } from './_files';

// ----------------------------------------------------------------------

export const _labels = [
  { id: 'all', type: 'system', name: 'all', unreadCount: 3 },
  { id: 'inbox', type: 'system', name: 'inbox', unreadCount: 1 },
  { id: 'sent', type: 'system', name: 'sent', unreadCount: 0 },
  { id: 'drafts', type: 'system', name: 'drafts', unreadCount: 0 },
  { id: 'trash', type: 'system', name: 'trash', unreadCount: 0 },
  { id: 'spam', type: 'system', name: 'spam', unreadCount: 1 },
  { id: 'important', type: 'system', name: 'important', unreadCount: 1 },
  { id: 'starred', type: 'system', name: 'starred', unreadCount: 1 },
  {
    id: 'social',
    type: 'custom',
    name: 'social',
    unreadCount: 0,
    color: '#00AB55',
  },
  {
    id: 'promotions',
    type: 'custom',
    name: 'promotions',
    unreadCount: 2,
    color: '#FFC107',
  },
  {
    id: 'forums',
    type: 'custom',
    name: 'forums',
    unreadCount: 1,
    color: '#FF4842',
  },
];

export const _mails = [...Array(9)].map((_, index) => {
  const attachments =
    (index === 1 && _files.slice(0, 2)) ||
    (index === 2 && _files.slice(0, 4)) ||
    (index === 5 && _files.slice(4, 10)) ||
    [];

  const folder =
    ([1, 2].includes(index) && 'spam') || ([3, 4].includes(index) && 'sent') || 'inbox';

  const labelIds =
    (index === 1 && ['promotions', 'forums']) ||
    (index === 2 && ['forums']) ||
    (index === 5 && ['social']) ||
    [];

  const from = {
    name: _mock.fullName(index),
    email: _mock.email(index),
    avatarUrl: [1, 2, 6].includes(index) ? null : _mock.image.avatar(index),
  };

  const to = [
    {
      name: 'Jaydon Frankie',
      email: 'demo@minimals.cc',
      avatarUrl: null,
    },
    {
      name: _mock.fullName(12),
      email: _mock.email(12),
      avatarUrl: _mock.image.avatar(12),
    },
  ];

  return {
    id: _mock.id(index),
    to,
    from,
    folder,
    labelIds,
    attachments,
    createdAt: _mock.time(index),
    subject: _mock.postTitle(index),
    isUnread: [1, 3].includes(index),
    isImportant: _mock.boolean(index),
    message: _mock.description(index),
    isStarred: _mock.boolean(index + 2),
  };
});
