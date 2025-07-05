// FilterBar.js
import React from "react";

function FilterBar({
  courses,
  selectedCourse,
  setFilteredCourse,
  setShowAbove80,
}) {
  return (
    <div className="filter-bar">
      <select
        value={selectedCourse}
        onChange={(e) => setFilteredCourse(e.target.value)}
      >
        {courses.map((course, idx) => (
          <option key={idx} value={course}>
            {course}
          </option>
        ))}
      </select>

      <button onClick={() => setShowAbove80((prev) => !prev)}>
        Show Marks > 80
      </button>
    </div>
  );
}

export default FilterBar;
