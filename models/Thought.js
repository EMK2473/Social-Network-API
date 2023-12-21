const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
      thoughtText:{
          type: String,
          required: true,
          minlength: 1,
          maxlenght: 140,
      },
      createdAt:{
          type: Date,
          default: Date.now,
          get: timestamp => new Date(timestamp).toLocaleString(),
      },
      username:{
          type: String,  
          required: true,
      },
      reactions:[reactionSchema],
  },
  {
      toJSON: {
          getters: true,
          virtuals: true,
      },
      id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function(){
  return this.reactions.length;
});

const Thought = model('Thought',thoughtSchema)

module.exports = Thought;
