// import React from "react";

// const CommentList = ({ comments = [] }) => {
//     if(!comments.length) {
//         return "No comments to view as of yet!"
//     }

//     return(
//         <div>
//             <h1>Comments</h1>
//         {comments && comments.map((comment) => (
//             <div key={comment._id}>
//                 {comment.username} commented {""} on {comment.createdAt}
//             <p> {comment.commentText} </p>
//             </div>
//         ))}
//         </div>
//     )}

//     export default CommentList;