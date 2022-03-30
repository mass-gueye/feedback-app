import React from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

export default function FeedbackItem({ feeds, rating, text, id, setFeedback }) {
  const handleDelete = (event) => {
    let newFeeds = feeds.filter((item) => item.id !== id);
    // console.log(newFeeds);
    if (window.confirm("Are you sure you want to delete ?")) {
      setFeedback(newFeeds);
    }
  };
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={handleDelete}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}

FeedbackItem.propTyypes = {
  rating: PropTypes.number,
  text: PropTypes.string,
};
