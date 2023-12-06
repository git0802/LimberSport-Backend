// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// config
import { HOST_API } from '../config-global';

// ----------------------------------------------------------------------

type BlockProps = {
  path: React.ReactNode;
  method: string;
  description?: string;
};

export default function IndexPage() {
  const renderHead = (
    <Stack spacing={2} sx={{ textAlign: 'center' }}>
      <Typography variant="h5" component="h1" sx={{ fontWeight: 'fontWeightBold' }}>
        The starting point for your next project v5.1.0
      </Typography>

      <Typography variant="body2">
        Host API: <strong>{HOST_API}</strong>
      </Typography>
    </Stack>
  );

  const renderAuth = (
    <Stack spacing={1}>
      <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>
        Auth
      </Typography>

      <Block method="GET" description="Get user info after login" path="/api/auth/me" />
      <Block method="POST" description="Login" path="/api/auth/login" />
      <Block method="POST" description="Register" path="/api/auth/register" />
    </Stack>
  );

  const renderBlog = (
    <Stack spacing={1}>
      <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>
        Blog
      </Typography>

      <Block method="GET" description="Get all posts" path="/api/post/list" />
      <Block
        method="GET"
        description="Get post details by title"
        path={
          <>
            /api/post/details?title=<strong>{`{title}`}</strong>
          </>
        }
      />
      <Block
        method="GET"
        description="Get latest posts"
        path={
          <>
            /api/post/latest?title=<strong>{`{title}`}</strong>
          </>
        }
      />
      <Block
        method="GET"
        description="Search post"
        path={
          <>
            /api/post/search?query=<strong>{`{query}`}</strong>
          </>
        }
      />
    </Stack>
  );

  const renderCalendar = (
    <Stack spacing={1}>
      <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>
        Calendar
      </Typography>

      <Block method="GET" description="Get all events" path="/api/calendar" />
      <Block method="POST" description="Create new event" path="/api/calendar" />
      <Block method="PUT" description="Update event" path="/api/calendar" />
      <Block method="PATCH" description="Delete event" path="/api/calendar" />
    </Stack>
  );

  const renderChat = (
    <Stack spacing={1}>
      <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>
        Chat
      </Typography>

      <Block
        method="GET"
        description="Search contacts"
        path={
          <>
            /api/chat?endpoint=<strong>contacts</strong>
          </>
        }
      />
      <Block
        method="GET"
        description="Get all conversations"
        path={
          <>
            /api/chat?endpoint=<strong>conversations</strong>
          </>
        }
      />
      <Block
        method="GET"
        description="Get conversation details by ID"
        path={
          <>
            /api/chat?conversationId=<strong>{`{conversationId}`}</strong>&endpoint=
            <strong>conversation</strong>
          </>
        }
      />
      <Block
        method="GET"
        description="Mark conversation as seen when click"
        path={
          <>
            /api/chat?conversationId=<strong>{`{conversationId}`}</strong>&endpoint=
            <strong>mark-as-seen</strong>
          </>
        }
      />

      <Block method="POST" description="Create new conversation" path={`${HOST_API}/api/chat`} />
      <Block method="PUT" description="Update conversation" path={`${HOST_API}/api/chat`} />
    </Stack>
  );

  const renderKanban = (
    <Stack spacing={1}>
      <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>
        Kanban
      </Typography>

      <Block method="GET" path="/api/kanban" description="Get Board" />
      <Block
        method="POST"
        description="Create column"
        path={
          <>
            /api/kanban?endpoint=<strong>create-column</strong>
          </>
        }
      />
      <Block
        method="POST"
        description="Update column"
        path={
          <>
            /api/kanban?endpoint=<strong>update-column</strong>
          </>
        }
      />
      <Block
        method="POST"
        description="Move column"
        path={
          <>
            /api/kanban?endpoint=<strong>move-column</strong>
          </>
        }
      />
      <Block
        method="POST"
        description="Clear column"
        path={
          <>
            /api/kanban?endpoint=<strong>clear-column</strong>
          </>
        }
      />
      <Block
        method="POST"
        description="Delete column"
        path={
          <>
            /api/kanban?endpoint=<strong>delete-column</strong>
          </>
        }
      />
      <Block
        method="POST"
        description="Create task"
        path={
          <>
            /api/kanban?endpoint=<strong>delete-task</strong>
          </>
        }
      />
      <Block
        method="POST"
        description="Update task"
        path={
          <>
            /api/kanban?endpoint=<strong>update-task</strong>
          </>
        }
      />
      <Block
        method="POST"
        description="Move task"
        path={
          <>
            /api/kanban?endpoint=<strong>move-task</strong>
          </>
        }
      />
      <Block
        method="POST"
        description="Delete task"
        path={
          <>
            /api/kanban?endpoint=<strong>delete-task</strong>
          </>
        }
      />
    </Stack>
  );

  const renderMail = (
    <Stack spacing={1}>
      <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>
        Mail
      </Typography>

      <Block method="GET" description="Get all labels" path="/api/mail/labels" />
      <Block
        method="GET"
        description="Get mails by labelId"
        path={
          <>
            /api/mail/list?labelId=<strong>{`{labelId}`}</strong>
          </>
        }
      />
      <Block
        method="GET"
        description="Get mail details by ID"
        path={
          <>
            /api/mail/details?mailId=<strong>{`{mailId}`}</strong>
          </>
        }
      />
    </Stack>
  );

  const renderProduct = (
    <Stack spacing={1}>
      <Typography variant="h6" sx={{ fontWeight: 'fontWeightBold' }}>
        Product
      </Typography>

      <Block method="GET" description="Get all products" path="/api/product/list" />
      <Block
        method="GET"
        description="Get product details by ID"
        path={
          <>
            /api/product/details?productId=<strong>{`{productId}`}</strong>
          </>
        }
      />
      <Block
        method="GET"
        description="Search product"
        path={
          <>
            /api/product/search?query=<strong>{`{query}`}</strong>
          </>
        }
      />
    </Stack>
  );

  return (
    <Container
      maxWidth="md"
      sx={{
        p: 5,
        my: 5,
        borderRadius: 2,
        bgcolor: '#F4F6F8',
        minHeight: '100vh',
        fontFamily: 'fontFamily',
      }}
    >
      <Stack spacing={3}>
        {renderHead}

        <Divider sx={{ borderStyle: 'dashed' }} />

        {renderAuth}

        {renderBlog}

        {renderCalendar}

        {renderChat}

        {renderKanban}

        {renderMail}

        {renderProduct}
      </Stack>
    </Container>
  );
}

// ----------------------------------------------------------------------

function Block({ method, path, description }: BlockProps) {
  const renderDescription = (
    <Typography variant="caption" sx={{ color: 'text.disabled' }}>
      {description}
    </Typography>
  );

  const renderMethod = (
    <Box
      component="span"
      sx={{
        mr: 1,
        px: 0.75,
        py: 0.25,
        borderRadius: 1,
        typography: 'caption',
        color: 'common.white',

        fontWeight: 'fontWeightBold',
        ...(method === 'GET' && {
          bgcolor: 'success.light',
        }),
        ...(method === 'POST' && {
          bgcolor: 'info.light',
        }),
        ...(method === 'PUT' && {
          bgcolor: 'warning.light',
        }),
        ...(method === 'PATCH' && {
          bgcolor: 'error.light',
        }),
      }}
    >
      {method}
    </Box>
  );

  const renderPath = (
    <Box component="span" sx={{ flexGrow: 1 }}>
      {path}
    </Box>
  );

  return (
    <Stack
      component={Paper}
      spacing={1}
      elevation={0}
      sx={{
        p: 1.5,
        '& strong': {
          color: 'error.main',
        },
      }}
    >
      {description && renderDescription}
      <Stack direction="row" alignItems="center">
        {renderMethod}

        {renderPath}
      </Stack>
    </Stack>
  );
}
