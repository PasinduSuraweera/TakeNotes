import mongoose from "mongoose";

//step 1-create schema
//step 2-model based off of that schema

const noteSchema = new mongoose.Schema(
    {
        tittle: {
            type:String,
            required: true
        },
        content: {
            type:String,
            required: true
        },
    },
    {
        timestamps:true //createdAt, updated At
    }
);


const Note = mongoose.model("Note", noteSchema)

export default Note