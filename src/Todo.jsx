import React from "react";

export default function Todo({ task, isDone }) {
  if (isDone === true) {
    return <li>Finished:{task}</li>;
  } else {
    return <li>Work on: {task}</li>;
  }
}
/*tarnary operator*/
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? "Finished" : "Work on"}:{task}
//     </li>
//   );
// }

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task} {isDone && ":Done"}
//     </li>
//   );
// }

// export default function Todo({ task, isDone }) {
//   return (
//       <li>
//         {task} {isDone || '"Do it'}
//       </li>

//   );
// }
