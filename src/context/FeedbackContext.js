import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feedback item 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is feedback item 2",
      rating: 8,
    },
    {
      id: 3,
      text: "This is feedback item 3",
      rating: 4,
    },

  ]);
  const deleteFeedback = (id) => {
    let newFeeds = feedback.filter((item) => item.id !== id);
    if (window.confirm("Are you sure you want to delete ?")) {
      setFeedback(newFeeds);
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <FeedbackContext.Provider
      value={{ feedback, setFeedback, deleteFeedback, addFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
