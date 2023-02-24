import { useState } from "react";

const ShowMoreButton = ({ buttonText, content }) => {
  const [showDetails, setShowDetails] = useState(false);

  const contentIsEmpty = !content || (Array.isArray(content) && content.length === 0);
  
  if (contentIsEmpty) {
    return null;
  }
  
  return (
    <div>
      <button
        type="button"
        className="block underline text-gray-300 text-base cursor-pointer hover:text-main"
        onClick={(e) => {
          setShowDetails((oldShow) => !oldShow);
        }}
      >
        {buttonText}
      </button>
      {showDetails && <div>{content}</div>}
    </div>
  );
};

export default ShowMoreButton;
