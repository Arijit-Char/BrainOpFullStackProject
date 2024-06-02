import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart, FaHeart, FaRegComment, FaTimes } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { getLikes, getUnLikes } from "../../action/Quote";
import "./Quote.scss";

export default function Quote({
  id,
  author,
  quote,
  tag,
  comments,
  onCommentChange,
  onAddComment,
}) {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comment, setComment] = useState("");
  const [expanded, setExpanded] = useState(false);
  const toggleLike = (event) => {
    event.stopPropagation();
    setLiked(!liked);
    if (liked) {
      dispatch(getUnLikes(id));
    } else {
      dispatch(getLikes(id));
    }
  };

  const shareQuote = (event) => {
    event.stopPropagation();
    const shareText = `"${quote}" - ${author}`;
    navigator.share({ text: shareText });
  };

  const handleCommentChange = (event) => {
    event.stopPropagation();
    setComment(event.target.value);
    onCommentChange(id, event);
  };

  const addComment = (event) => {
    event.stopPropagation();
    onAddComment(id);
    setShowCommentForm(false);
  };

  const toggleCommentForm = (event) => {
    event.stopPropagation();
    setShowCommentForm(!showCommentForm);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setExpanded(false);
  };

  return (
    <div
      className={`quote ${expanded ? "expanded" : ""}`}
      onClick={toggleExpand}
    >
      {expanded && (
        <button className="close-button" onClick={handleClose}>
          <FaTimes />
        </button>
      )}
      <div className="pic">
        <CgProfile className="pp" />
      </div>
      <div className="content">
        <div className="author">{author}</div>
        <div className="quotes">{quote}</div>
        <div className="tag">{tag}</div>
        <div className="lss">
          <button onClick={toggleLike}>
            {liked ? (
              <FaHeart style={{ color: "red", fontSize: "1.2rem" }} />
            ) : (
              <FaRegHeart style={{ color: "white" }} />
            )}
          </button>
          <button onClick={toggleCommentForm}>
            <FaRegComment style={{ color: "white" }} />
          </button>
          <button onClick={shareQuote}>
            <PiTelegramLogo style={{ color: "white" }} />
          </button>
        </div>
        {showCommentForm && (
          <div className="comment-form">
            <textarea
              rows="3"
              placeholder="Add a comment..."
              value={comment}
              onChange={handleCommentChange}
              onClick={(event) => event.stopPropagation()}
              className="comment-box"
            ></textarea>
            <button onClick={addComment} className="comment-button">
              Comment
            </button>
          </div>
        )}
        <div className="comments">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              {comment}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
