import { Schema, model } from "mongoose";

const ExperienceCategoriesSchema = new Schema(
    {
        title: { type: String, required: true },
    },
    { timestamps: true }
);

const ExperienceCategories = model("ExperienceCategories", ExperienceCategoriesSchema);
export default PostCategories;
