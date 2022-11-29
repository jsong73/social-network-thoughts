const {Schema, model} = require("mongoose");
const reactionSchema =  require("./Reaction");

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: "You need to leave a thought!",
            maxlength: 280,
            minlength: 1
        },
        createdAt:{
            type: Date,
            default: Date.now
        },
        username:{
            type: String,
            required: true
        },
        reactions: [reactionSchema]
        },
        {
            toJSON:{
                getters: true,
            },
            id: false
        }
);

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;