import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import { getData, saveData, _contacts } from 'src/_mock/_chat';

// ----------------------------------------------------------------------

function getContacts(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    contacts: _contacts,
  });
}

// ----------------------------------------------------------------------

function getConversations(req: NextApiRequest, res: NextApiResponse) {
  const data = getData();

  res.status(200).json({
    conversations: data,
  });
}

// ----------------------------------------------------------------------

function getConversation(req: NextApiRequest, res: NextApiResponse) {
  const { conversationId } = req.query;

  const data = getData();

  const conversation = data.find((conversation) => conversation.id === conversationId);

  if (!conversation) {
    res.status(404).json({
      message: 'Conversation Not Found!',
    });
    return;
  }

  res.status(200).json({
    conversation,
  });
}

// ----------------------------------------------------------------------

function getMarkAsSeen(req: NextApiRequest, res: NextApiResponse) {
  const { conversationId } = req.query;

  const data = getData();

  const conversation = data.find((conversation) => conversation.id === conversationId);

  if (!conversation) {
    res.status(404).json({
      message: 'Conversation Not Found!',
    });
    return;
  }

  conversation.unreadCount = 0;

  data.push(conversation);

  saveData(data);

  res.status(200).json({
    conversationId: conversation.id,
  });
}

// ----------------------------------------------------------------------

function newConversation(req: NextApiRequest, res: NextApiResponse) {
  const { conversationData } = req.body;

  const data = getData();

  const conversation = conversationData;

  data.push(conversation);

  saveData(data);

  res.status(200).json({
    conversation,
  });
}

// ----------------------------------------------------------------------

function updateConversation(req: NextApiRequest, res: NextApiResponse) {
  const { conversationId, messageData } = req.body;

  const data = getData();

  let conversation;

  if (conversationId) {
    conversation = data.find((conversation) => conversation.id === conversationId);
  }

  if (!conversation) {
    res.status(404).json({
      message: 'Conversation Not Found!',
    });
    return;
  }

  conversation.messages.push(messageData);

  data.push(conversation);

  saveData(data);

  res.status(200).json({
    conversation,
  });
}

// ----------------------------------------------------------------------

export default async function allHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const { endpoint } = req.query;

    switch (req.method) {
      case 'GET':
        if (endpoint === 'conversations') getConversations(req, res);
        if (endpoint === 'conversation') getConversation(req, res);
        if (endpoint === 'mark-as-seen') getMarkAsSeen(req, res);
        if (endpoint === 'contacts') getContacts(req, res);
        break;
      case 'POST':
        newConversation(req, res);
        break;
      case 'PUT':
        updateConversation(req, res);
        break;
      default:
        res.status(405).json({
          message: 'Method not allowed',
        });
    }
  } catch (error) {
    console.error('[Chat API]: ', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
