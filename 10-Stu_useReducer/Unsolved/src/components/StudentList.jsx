import { useState } from 'react';
import { SET_STUDENT_NAME, SET_STUDENT_MAJOR } from '../utils/actions';
import { useStudentContext } from '../utils/GlobalState';

export default function StudentList() {
  const [state, dispatch] = useStudentContext();

  // Access state values (students, majors, studentName, and studentMajor)
  const { students, majors, studentName, studentMajor } = state;

  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentMajor, setNewStudentMajor] = useState('');

  return (
    <div>
      {students ? (
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
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.major}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          dispatch({
                            type: 'REMOVE_STUDENT',
                            payload: student.id
                          });
                        }}
                      >
                        <span role="img" aria-label="delete">✖️</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="add-student">
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
                {majors.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => {
                  dispatch({
                    type: 'ADD_STUDENT',
                    payload: {
                      id: Date.now(), // Temporary ID
                      name: newStudentName,
                      major: newStudentMajor
                    }
                  });
                  setNewStudentName('');
                  setNewStudentMajor('');
                }}
              >
                Add Student
              </button>
            </div>
          </section>
        </>
      ) : (
        <span>Hmm... seems that there are no students here!</span>
      )}
    </div>
  );
}
