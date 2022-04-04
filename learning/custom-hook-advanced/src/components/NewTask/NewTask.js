import useHttp from '../../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  let taskText;
  // Get data that comes from res of http.
  const getCreatedTaskData = (createdTask) => {
    const generatedId = createdTask.name; // firebase-specific => "name" contains generated id
    createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  // Make the request.
  const {
    isLoading,
    error,
    sendRequest: sendTaskRequest,
  } = useHttp(getCreatedTaskData);

  // Get entered task text to render it.
  const getEnteredTaskHandler = (task) => {
    const reqConfig = {
      url: 'https://react-http-db613-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      body: JSON.stringify({ text: task }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    sendTaskRequest(reqConfig);
    taskText = task;
  };

  return (
    <Section>
      <TaskForm onSubmitTask={getEnteredTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
// import useHttp from '../../hooks/use-http';

// import Section from '../UI/Section';
// import TaskForm from './TaskForm';

// const NewTask = (props) => {
//   // Get entered task text to render it.
//   let taskText;
//   const getEnteredTaskHandler = (task) => {
//     taskText = task;
//   };

//   // Get data that comes from res of http.
//   const getCreatedTaskData = (createdTask) => {
//     const generatedId = createdTask.name; // firebase-specific => "name" contains generated id
//     createdTask = { id: generatedId, text: taskText };

//     props.onAddTask(createdTask);
//   };

//   // Make the request.
//   const {
//     isLoading,
//     error,
//     sendRequest: sendTaskRequest,
//   } = useHttp(getCreatedTaskData);

//   return (
//     <Section>
//       <TaskForm
//         onEnterTask={sendTaskRequest}
//         onSubmitTask={getEnteredTaskHandler}
//         loading={isLoading}
//       />
//       {error && <p>{error}</p>}
//     </Section>
//   );
// };

// export default NewTask;
