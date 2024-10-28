import { useState } from 'react';

import { ADD_STUDENT, REMOVE_STUDENT, ADD_MAJOR } from '../utils/actions';

import { useStudentContext } from '../utils/StudentContext';

export default function StudentList() {
  const [state, dispatch] = useStudentContext();

  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentMajor, setNewStudentMajor] = useState('');

  // TODO: Add a comment explaining what this state variable will be used for after reviewing it's use in the app
  // The state variable will be used to store the name of the new major that will be added to the global state when the form is submitted.
  // Your comment here
  const [newMajorName, setNewMajorName] = useState('');

  return (
    <div>
      {state.students ? (
        <>
          <section className="student-list">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Major</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {state.students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.major}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          console.log('StudentList.js: Dispatched remove!');
                          // TODO: Add a comment explaining the functionality of the REMOVE_STUDENT action when it hits the reducer
                          // The REMOVE_STUDENT action will remove a student from the global state by filtering out the student with the matching id.
                          // Your comment here
                          return dispatch({
                            type: REMOVE_STUDENT,
                            payload: student.id,
                          });
                        }}
                      >
                        <span role="img" aria-label="delete">
                          ✖️
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <form 
              className="add-student"
              onSubmit={(e) => {
                e.preventDefault();
                console.log('StudentList.js: Dispatched add student! ');
                dispatch({
                  type: ADD_STUDENT,
                  payload: { name: newStudentName, major: newStudentMajor },
                });

                setNewStudentName('');
                setNewStudentMajor('');
              }}
            >
              <input
                value={newStudentName}
                onChange={(e) => setNewStudentName(e.target.value)}
                placeholder="New student name..."
                type="text"
              />

              <select
                onChange={(e) => setNewStudentMajor(e.target.value)}
                value={newStudentMajor}
              >
                <option>Choose major...</option>
                {/* //TODO: Add a commenting explaining what will happen if a major is added to the "Majors" array */}
                // If a major is added to the "Majors" array, it will be added to the global state and will be available as an option in the select dropdown.
                {/* Your comment here */}
                {state.majors.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </select>
              {console.log(state.majors)}
              <button type="submit">
                Add Student
              </button>
            </form>
            <h3>Add a New Major</h3>
            <form 
              className="add-major"
              onSubmit={(e) => {
                e.preventDefault();
                console.log('StudentList.js: Dispatched add major! ');
                // TODO: Explain what happens when the ADD_MAJOR action is dispatched to the reducer with a new major
<<<<<<< HEAD
                // The ADD_MAJOR action will add a new major to the global state by updating the majors array with the new major name.
=======
>>>>>>> c56d4813ec8996a383a65a75a8b071cd65b8de2b
                // Your comment here
                dispatch({
                  type: ADD_MAJOR,
                  payload: newMajorName,
                });

                setNewMajorName('');
              }}
            >
              {/* //TODO: Does the setNewMajorName method affect local state or global state the way it is used in this onChange event */}
<<<<<<< HEAD
              // The setNewMajorName method affects the local state by updating the newMajorName state variable with the value of the input field.
=======
>>>>>>> c56d4813ec8996a383a65a75a8b071cd65b8de2b
              {/* Your comment here */}
              <input
                value={newMajorName}
                onChange={(e) => setNewMajorName(e.target.value)}
                placeholder="New major name..."
                type="text"
                style={{ padding: '10px', marginRight: '5px' }}
              />
              <button type="submit">
                Add Major
              </button>
            </form>
          </section>
        </>
      ) : (
        <span>Hmm... seems that there are no students here!</span>
      )}
    </div>
  );
}
