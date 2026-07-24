import { defineSchema, defineTable } from "convex/server";
import {v} from "convex/values";

const schema = defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        role: v.union(v.literal("admin"), v.literal("user")),
        imageUrl: v.optional(v.string()),
    }),
    articles: defineTable({
        title: v.string(),
        content: v.string(),
        categoryName: v.string(),
        imageUrl: v.optional(v.string()),
        ago: v.optional(v.string()), 
        readTime: v.optional(v.string()), 
        timePosted: v.optional(v.string()),    
    }),
    category: defineTable({
        name: v.string(),
        categoryName: v.string(),
        imageUrl: v.optional(v.string()),
    }),

})

export default schema;
