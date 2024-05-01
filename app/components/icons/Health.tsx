import React from "react";

const Health: React.FC = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule={"evenodd"}
      d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19L3.01 5C3.01 3.9 3.9 3 5 3ZM14 14H17C17.55 14 18 13.55 18 13V11C18 10.45 17.55 10 17 10H14V7C14 6.45 13.55 6 13 6H11C10.45 6 10 6.45 10 7V10H7C6.45 10 6 10.45 6 11V13C6 13.55 6.45 14 7 14H10V17C10 17.55 10.45 18 11 18H13C13.55 18 14 17.55 14 17V14Z"
      fill="white"
    />
  </svg>
);

export default Health;
