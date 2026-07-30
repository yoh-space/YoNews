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
        readTime: v.optional(v.string()), 
    })
    .index("by_categoryName", ["categoryName"]),
    
    category: defineTable({
        categoryName: v.string(),
        iconBackground: v.optional(v.string()),
        iconColor: v.optional(v.string()),
        articleCount: v.optional(v.number()),
        iconName: v.optional(v.string()),
    })
    .index("categoryNameIndex", ["categoryName"]),
})

export default schema;
