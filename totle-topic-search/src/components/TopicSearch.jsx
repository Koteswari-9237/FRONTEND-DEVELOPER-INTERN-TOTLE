import React, { useState } from "react";
import "./TopicSearch.css";

const topicsData = [
  { id: 1, name: "Thermodynamics", category: "Physics" },
  { id: 2, name: "Organic Chemistry", category: "Chemistry" },
  { id: 3, name: "Algebra", category: "Mathematics" },
  { id: 4, name: "World History", category: "Social Studies" },
  { id: 5, name: "Programming Basics", category: "Computer Science" },
];

function TopicSearch() {
  const [search, setSearch] = useState("");

  const filteredTopics = topicsData.filter((topic) =>
    topic.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="title">Topic Browser</h2>

      <input
        type="text"
        placeholder="Search topics..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="searchBox"
      />

      <div className="topicsList">
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => (
            <div key={topic.id} className="card">
              <h3>{topic.name}</h3>
              <p>{topic.category}</p>
            </div>
          ))
        ) : (
          <p className="noResult">No topics found</p>
        )}
      </div>
    </div>
  );
}

export default TopicSearch;
