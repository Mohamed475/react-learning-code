import { useRef } from 'react';

import classes from './TaskForm.module.css';

const TaskForm = (props) => {
  const taskInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      // Get new task to render it.
      props.onSubmitTask(enteredValue);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
// import { useRef } from 'react';

// import classes from './TaskForm.module.css';

// const TaskForm = (props) => {
//   const taskInputRef = useRef();

//   const submitHandler = (event) => {
//     event.preventDefault();

//     const enteredValue = taskInputRef.current.value;

//     if (enteredValue.trim().length > 0) {
//       const reqConfig = {
//         url: 'https://react-http-db613-default-rtdb.firebaseio.com/tasks.json',
//         method: 'POST',
//         body: JSON.stringify({ text: enteredValue }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       };

//       // Add new task to db.
//       props.onEnterTask(reqConfig);

//       // Get new task to render it.
//       props.onSubmitTask(enteredValue);
//     }
//   };

//   return (
//     <form className={classes.form} onSubmit={submitHandler}>
//       <input type="text" ref={taskInputRef} />
//       <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
//     </form>
//   );
// };

// export default TaskForm;
