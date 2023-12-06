import { sub } from 'date-fns';
import cloneDeep from 'lodash/cloneDeep';
// utils
import uuidv4 from 'src/utils/uuidv4';
// _mock
import { _mock } from './_mock';
import { _files } from './_files';

// ----------------------------------------------------------------------

const MY_CONTACT = {
  status: 'online',
  id: '8864c717-587d-472a-929a-8e5f298024da-0',
  role: 'admin',
  email: 'demo@minimals.cc',
  name: 'Jaydon Frankie',
  lastActivity: new Date(),
  address: '90210 Broadway Blvd',
  avatarUrl: _mock.image.avatar(24),
  phoneNumber: '+40 777666555',
};

// ----------------------------------------------------------------------

export const _contacts = [...Array(20)].map((_, index) => {
  const status =
    (index % 2 && 'online') || (index % 3 && 'offline') || (index % 4 && 'alway') || 'busy';

  return {
    status,
    id: _mock.id(index),
    role: _mock.role(index),
    email: _mock.email(index),
    name: _mock.fullName(index),
    lastActivity: _mock.time(index),
    address: _mock.fullAddress(index),
    avatarUrl: _mock.image.avatar(index),
    phoneNumber: _mock.phoneNumber(index),
  };
});

const _conversations = [
  {
    id: _contacts[1].id,
    participants: [MY_CONTACT, _contacts[1]],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: uuidv4(),
        body: _mock.sentence(1),
        contentType: 'text',
        attachments: _files.slice(0, 1),
        createdAt: sub(new Date(), { hours: 10 }),
        senderId: _contacts[1].id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(2),
        contentType: 'text',
        attachments: _files.slice(1, 2),
        createdAt: sub(new Date(), { hours: 2 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(3),
        contentType: 'text',
        attachments: _files.slice(2, 3),
        createdAt: sub(new Date(), { minutes: 8 }),
        senderId: _contacts[1].id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(4),
        contentType: 'text',
        attachments: _files.slice(3, 6),
        createdAt: sub(new Date(), { minutes: 6 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(5),
        contentType: 'text',
        attachments: _files.slice(6, 10),
        createdAt: sub(new Date(), { minutes: 4 }),
        senderId: _contacts[1].id,
      },
      {
        id: uuidv4(),
        attachments: [],
        contentType: 'image',
        body: _mock.image.cover(4),
        createdAt: sub(new Date(), { minutes: 2 }),
        senderId: _contacts[1].id,
      },
      {
        id: uuidv4(),
        contentType: 'text',
        attachments: [],
        body: _mock.sentence(6),
        createdAt: sub(new Date(), { minutes: 2 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(7),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 2 }),
        senderId: MY_CONTACT.id,
      },
    ],
  },
  {
    id: _contacts[2].id,
    participants: [MY_CONTACT, _contacts[2]],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: uuidv4(),
        body: _mock.sentence(2),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { hours: 8 }),
        senderId: _contacts[2].id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(3),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { hours: 6 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(4),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { hours: 4, minutes: 30 }),
        senderId: _contacts[2].id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(5),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { hours: 2, minutes: 15 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(6),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { hours: 1, minutes: 15 }),
        senderId: _contacts[2].id,
      },
      {
        id: uuidv4(),
        body: _mock.image.cover(7),
        attachments: [],
        contentType: 'image',
        createdAt: sub(new Date(), { hours: 1 }),
        senderId: _contacts[2].id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(8),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 45 }),
        senderId: MY_CONTACT.id,
      },
    ],
  },
  {
    id: _contacts[3].id,
    participants: [MY_CONTACT, _contacts[3]],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: uuidv4(),
        body: _mock.sentence(3),
        contentType: 'text',
        attachments: _files.slice(0, 1),
        createdAt: sub(new Date(), { hours: 8 }),
        senderId: _contacts[3].id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(4),
        contentType: 'text',
        attachments: _files.slice(1, 2),
        createdAt: sub(new Date(), { hours: 6 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(5),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { hours: 4, minutes: 30 }),
        senderId: _contacts[3].id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(6),
        contentType: 'text',
        attachments: _files.slice(2, 4),
        createdAt: sub(new Date(), { hours: 2, minutes: 15 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(7),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { hours: 1, minutes: 15 }),
        senderId: _contacts[3].id,
      },
      {
        id: uuidv4(),
        body: _mock.image.cover(8),
        contentType: 'image',
        attachments: [],
        createdAt: sub(new Date(), { hours: 1 }),
        senderId: _contacts[3].id,
      },
      {
        id: uuidv4(),
        body: _mock.image.cover(9),
        contentType: 'image',
        attachments: [],
        createdAt: sub(new Date(), { hours: 1 }),
        senderId: _contacts[3].id,
      },
    ],
  },
  {
    id: _contacts[4].id,
    participants: [MY_CONTACT, _contacts[4]],
    type: 'ONE_TO_ONE',
    unreadCount: 8,
    messages: [
      {
        id: uuidv4(),
        body: _mock.sentence(4),
        contentType: 'text',
        attachments: _files.slice(2, 4),
        createdAt: sub(new Date(), { hours: 10 }),
        senderId: _contacts[4].id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(5),
        contentType: 'text',
        attachments: _files.slice(4, 6),
        createdAt: sub(new Date(), { hours: 2 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(6),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 5 }),
        senderId: _contacts[4].id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(7),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 3 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(8),
        contentType: 'text',
        attachments: _files.slice(6, 10),
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(9),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: _contacts[4].id,
      },
    ],
  },
  {
    id: _contacts[5].id,
    participants: [MY_CONTACT, _contacts[5]],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: uuidv4(),
        body: _mock.sentence(5),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(6),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: _contacts[5].id,
      },
    ],
  },
  {
    id: _contacts[6].id,
    participants: [MY_CONTACT, _contacts[6]],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: uuidv4(),
        body: _mock.sentence(6),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(7),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: _contacts[6].id,
      },
    ],
  },
  {
    id: `${_mock.id(1)}gr`,
    participants: [
      MY_CONTACT,
      _contacts[6],
      _contacts[7],
      _contacts[8],
      _contacts[9],
      _contacts[10],
    ],
    type: 'GROUP',
    unreadCount: 2,
    messages: [
      {
        id: uuidv4(),
        body: _mock.sentence(6),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { days: 3, hours: 2, minutes: 30 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(7),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { days: 3, hours: 2, minutes: 29 }),
        senderId: _contacts[9].id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(8),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { days: 3, hours: 2, minutes: 28 }),
        senderId: _contacts[10].id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(9),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { days: 3, hours: 2, minutes: 27 }),
        senderId: _contacts[8].id,
      },
      {
        id: uuidv4(),
        attachments: [],
        body: _mock.sentence(10),
        contentType: 'text',
        createdAt: sub(new Date(), { days: 3, hours: 2, minutes: 26 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(11),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { days: 3 }),
        senderId: _contacts[6].id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(12),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { days: 3 }),
        senderId: _contacts[7].id,
      },
    ],
  },
  {
    id: _contacts[7].id,
    participants: [MY_CONTACT, _contacts[7]],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: uuidv4(),
        body: _mock.sentence(7),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(8),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: _contacts[7].id,
      },
    ],
  },
  {
    id: _contacts[8].id,
    participants: [MY_CONTACT, _contacts[8]],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: uuidv4(),
        body: _mock.sentence(8),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(9),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: _contacts[8].id,
      },
    ],
  },
  {
    id: _contacts[9].id,
    participants: [MY_CONTACT, _contacts[9]],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: uuidv4(),
        body: _mock.sentence(9),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(10),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: _contacts[9].id,
      },
    ],
  },
  {
    id: `${_mock.id(2)}gr`,
    participants: [MY_CONTACT, _contacts[1], _contacts[2], _contacts[4], _contacts[3]],
    type: 'GROUP',
    unreadCount: 0,
    messages: [
      {
        id: uuidv4(),
        body: _mock.sentence(1),
        contentType: 'text',
        attachments: _files.slice(0, 5),
        createdAt: sub(new Date(), { days: 3, hours: 2, minutes: 30 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(2),
        contentType: 'text',
        attachments: _files.slice(5, 6),
        createdAt: sub(new Date(), { days: 3, hours: 2, minutes: 29 }),
        senderId: _contacts[1].id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(3),
        contentType: 'text',
        attachments: _files.slice(6, 7),
        createdAt: sub(new Date(), { days: 3, hours: 2, minutes: 28 }),
        senderId: _contacts[2].id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(4),
        contentType: 'text',
        attachments: _files.slice(7, 8),
        createdAt: sub(new Date(), { days: 3, hours: 2, minutes: 27 }),
        senderId: _contacts[4].id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(5),
        contentType: 'text',
        attachments: _files.slice(8, 9),
        createdAt: sub(new Date(), { days: 3, hours: 2, minutes: 26 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(6),
        contentType: 'text',
        attachments: _files.slice(9, 10),
        createdAt: sub(new Date(), { days: 3 }),
        senderId: _contacts[3].id,
      },
    ],
  },
  {
    id: _contacts[10].id,
    participants: [MY_CONTACT, _contacts[10]],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: uuidv4(),
        body: _mock.sentence(10),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.sentence(11),
        contentType: 'text',
        attachments: [],
        createdAt: sub(new Date(), { minutes: 1 }),
        senderId: _contacts[10].id,
      },
    ],
  },
];

// ----------------------------------------------------------------------

let data = _conversations;

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
