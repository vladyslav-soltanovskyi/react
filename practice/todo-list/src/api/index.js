const baseUrl = 'https://61d8e2cfe6744d0017ba8cdc.mockapi.io/tasks';

const request = async (url, { method = 'GET', body = {}, ...rest }) => {
  try {
    const headers = {
      'Content-Type': 'application/json;charset=utf-8'
    };
  
    const options = (method === 'GET')
      ? { method, ...rest, headers }
      : { method, body: JSON.stringify(body), ...rest, headers };
    
    const response = await fetch(`${baseUrl}${url}`, options);
    
    if (!response.ok) {
      throw new Error('Server Error');
    }

    return (await response.json());
  } catch(err) {
    alert('Internal Server Error');
  }
}

const getTasks = () => request('', { method: "GET" });

const createTask = (taskData) => request('', { method: "POST", body: taskData });

const deleteTask = (taskId) => request(`/${taskId}`, { method: "DELETE" });

const updateTask = (taskId, taskData) => request(`/${taskId}`, { method: "PUT", body: taskData });

export default {
  getTasks,
  createTask,
  deleteTask,
  updateTask
}
