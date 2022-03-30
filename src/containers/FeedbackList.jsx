import React from "react";
import FeedbackItem from "../components/FeedbackItem";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

export default function FeedbackList({ feedback, setFeedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((feed, index) => (
          <motion.div key={feed.id} initial={{ opacity: 0 }} animate={{opacity:1}} exit={{opacity:0}}>
            <FeedbackItem
              key={index}
              id={feed.id}
              rating={feed.rating}
              text={feed.text}
              feeds={feedback}
              setFeedback={setFeedback}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.array.isRequired,
};
