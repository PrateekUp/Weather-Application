import React from "react";

function TopButtons() {
  const cities = [
    {
      id: 1,
      title: "Delhi",
    },
    {
      id: 2,
      title: "London",
    },
    {
      id: 3,
      title: "New York",
    },
    {
      id: 4,
      title: "Tokyo",
    },
    {
      id: 5,
      title: "Sydney",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6 text-left">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white font-medium text-md transition ease-out hover:scale-105"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
