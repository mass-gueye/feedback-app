import React, { useState } from "react";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackStats from "../components/FeedbackStats";
import Header from "../components/Header";
import FeedbackData from "../data/FeedbackData";
import FeedbackList from "./FeedbackList";
import { v4 as uuidv4 } from "uuid";
export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} setFeedback={setFeedback} />
      </div>
    </>
  );
}
