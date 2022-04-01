import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "../components/FeedbackItem";
import { AnimatePresence, motion } from "framer-motion";
import Spinner from "../components/shared/Spinner";

export default function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={index} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
