// App.js
import React, { useEffect, useState } from "react";
import StudentList from "./StudentList";
import FilterBar from "./FilterBar";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [filteredCourse, setFilteredCourse] = useState("All");
  const [showAbove80, setShowAbove80] = useState(false);

  useEffect(() => {
    fetch("/studentData.json")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  const filteredStudents = students
    .filter(
      (student) => filteredCourse === "All" || student.course === filteredCourse
    )
    .filter((student) => (showAbove80 ? student.marks > 80 : true))
    .sort((a, b) => b.marks - a.marks);

  const courses = ["All", ...new Set(students.map((s) => s.course))];

  return (
    <div className="App">
      <h1>Student Performance Viewer</h1>
      <FilterBar
        courses={courses}
        selectedCourse={filteredCourse}
        setFilteredCourse={setFilteredCourse}
        setShowAbove80={setShowAbove80}
      />
      <StudentList students={filteredStudents} />
    </div>
  );
}

export default App;
