// StudentList.js
import React from "react";

function StudentList({ students }) {
  if (students.length === 0) {
    return <p>No students found.</p>;
  }

  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Course</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.course}</td>
            <td>{student.marks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;
