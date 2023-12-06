import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import { _board } from 'src/_mock/_kanban';

// ----------------------------------------------------------------------

// BOARD
function getBoard(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    board: _board,
  });
}

// COLUMN
// ----------------------------------------------------------------------

function createColumn(req: NextApiRequest, res: NextApiResponse) {
  const { columnData } = req.body;

  // add column in board.columns
  _board.columns = {
    ..._board.columns,
    [columnData.id]: columnData,
  };

  // add column in board.ordered
  _board.ordered.push(columnData.id);

  res.status(200).json({
    column: columnData,
  });
}

function updateColumn(req: NextApiRequest, res: NextApiResponse) {
  const { columnId, columnName } = req.body;

  _board.columns[columnId] = {
    ..._board.columns[columnId],
    name: columnName,
  };

  res.status(200).json({
    column: _board.columns[columnId],
  });
}

function moveColumn(req: NextApiRequest, res: NextApiResponse) {
  const { newOrdered } = req.body;

  _board.ordered = newOrdered;

  res.status(200).json({
    ordered: _board.ordered,
  });
}

function clearColumn(req: NextApiRequest, res: NextApiResponse) {
  const { columnId } = req.body;

  const tasksToRemove = _board.columns[columnId].taskIds;

  // empty task in column
  _board.columns[columnId].taskIds = [];

  // remove task in board.tasks
  tasksToRemove.forEach((taskId) => {
    delete _board.tasks[taskId];
  });

  res.status(200).json({
    columnId,
  });
}

function deleteColumn(req: NextApiRequest, res: NextApiResponse) {
  const { columnId } = req.body;

  const tasksToRemove = _board.columns[columnId].taskIds;

  // delete column
  delete _board.columns[columnId];

  // delete taskids in column
  tasksToRemove.forEach((taskId) => {
    delete _board.tasks[taskId];
  });

  // remove column from _board.ordered
  _board.ordered = _board.ordered.filter((id) => id !== columnId);

  res.status(200).json({
    columnId,
  });
}

// TASK
// ----------------------------------------------------------------------

function addTask(req: NextApiRequest, res: NextApiResponse) {
  const { columnId, taskData } = req.body;

  // add new task in board.tasks
  _board.tasks[taskData.id] = taskData;

  // add new task in column
  _board.columns[columnId].taskIds.push(taskData.id);

  res.status(200).json({
    columnId,
    taskData,
  });
}

function updateTask(req: NextApiRequest, res: NextApiResponse) {
  const { taskData } = req.body;

  _board.tasks[taskData.id] = taskData;

  res.status(200).json({
    task: _board.tasks[taskData.id],
  });
}

function moveTask(req: NextApiRequest, res: NextApiResponse) {
  const { updateColumns } = req.body;

  _board.columns = updateColumns;

  res.status(200).json({
    columns: _board.columns,
  });
}

function deleteTask(req: NextApiRequest, res: NextApiResponse) {
  const { columnId, taskId } = req.body;

  // remove task in board.tasks
  delete _board.tasks[taskId];

  // remove task in column
  _board.columns[columnId].taskIds = _board.columns[columnId].taskIds.filter((id) => id !== taskId);

  res.status(200).json({
    columnId,
    taskId,
  });
}

// ----------------------------------------------------------------------

export default async function allHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const { endpoint } = req.query;

    switch (req.method) {
      case 'GET':
        getBoard(req, res);
        break;
      case 'POST':
        if (endpoint === 'create-column') createColumn(req, res);
        if (endpoint === 'update-column') updateColumn(req, res);
        if (endpoint === 'move-column') moveColumn(req, res);
        if (endpoint === 'clear-column') clearColumn(req, res);
        if (endpoint === 'delete-column') deleteColumn(req, res);
        if (endpoint === 'create-task') addTask(req, res);
        if (endpoint === 'update-task') updateTask(req, res);
        if (endpoint === 'move-task') moveTask(req, res);
        if (endpoint === 'delete-task') deleteTask(req, res);
        break;
      default:
        res.status(405).json({
          message: 'Method not allowed',
        });
    }
  } catch (error) {
    console.error('[Kanban API]: ', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
