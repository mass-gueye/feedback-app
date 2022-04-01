import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const feedbackUrl = "/feedback?_sort=id&_order=desc";
  const fetchFeedback = async (url) => {
    let response = await fetch(url);

    if (response.ok) {
      // if HTTP-status is 200-299
      // get the response body (the method explained below)
      let feedbacks = await response.json();
      setFeedback(feedbacks);
      setIsLoading(false);
    } else {
      alert("HTTP-Error: " + response.status);
    }
  };

  useEffect(() => {
    fetchFeedback(feedbackUrl);
  }, []);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = async (id, toUpdateItem) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toUpdateItem),
    };
    let response = await fetch(`feedback/${id}`, options);
    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  const deleteFeedback = async (id) => {
    let newFeeds = feedback.filter((item) => item.id !== id);
    if (window.confirm("Are you sure you want to delete ?")) {
      const options = {
        method: "DELETE",
      };
      await fetch(`/feedback/${id}`, options);
      setFeedback(newFeeds);
    }
  };
  const addFeedback = async (newFeedback) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    };
    let response = await fetch("/feedback", options);
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        editFeedback,
        deleteFeedback,
        addFeedback,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
