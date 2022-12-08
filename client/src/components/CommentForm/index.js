import React, { useState } from "react";
import { ADD_COMMENT } from "../../utils/mutations"
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth"

const CommentForm = ({ thoughtId }) => {
    const [commentText, setCommentText] = useState("");
    const [characterCount, setCharacterCount] = useState(0);
    
    const [addComment, { error }] = useMutation(ADD_COMMENT);
    const commentFormHandler = async (event) => {
        event.preventDefault();
        try{
            const { data } = await addComment({
                variables:{
                    thoughtId,
                    commentText, 
                    username: Auth.getProfile().data.username,
                },
            })
 
            console.log(data)
            
        setCommentText("");
        setCharacterCount("0")
        } catch (error) {
        console.log(error)
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        if(name === "commentText" && value.length <= 280) {
            setCommentText(value);
            setCharacterCount(value.length);
        }
    };
    return(
     
  
            <form 
            onSubmit={commentFormHandler}>
            <br>
            </br>
              <textarea
                className="relative block w-full appearance-none rounded-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none sm:text-sm"
                name="commentText"
                placeholder="Write a comment..."
                value={commentText}
                onChange={handleChange}></textarea>

                <div class="flex justify-between">
                <div className="mt-2 text-right text-sm text-gray-600">
                <p className={`${characterCount === 280 || error ? 'text-danger' : ''}`}>
                Character Count: {characterCount}/280
                </p>
                </div>
         
                <button
                className="mt-3 mr-4 float-right rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                type="submit"> Add Comment </button>
                </div>

            </form>


    )
}

export default CommentForm;