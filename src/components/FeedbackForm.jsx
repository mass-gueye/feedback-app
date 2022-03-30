import React, { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

export default function FeedbackForm({handleAdd}) {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const minChar = 10;
  const handleChange = (event) => {
    setText(event.target.value);
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length < minChar - 1) {
      setMessage(
        `Text must e at least ${minChar} character (${
          minChar - text.trim().length - 1
        } chararcter(s) left)`
      );
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length >10) {
      const newFeedback = {
        text,
        rating
      }
      handleAdd(newFeedback)
      setText('')
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us ?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="write a review"
            value={text}
            onChange={handleChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            SEND
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}
