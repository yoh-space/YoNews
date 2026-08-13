import {query, mutation} from './_generated/server'
import { v } from "convex/values";
import { Categories } from "./cat";


export const getAllCategories = query({
    handler: async (ctx) => {
        const getCategories = await ctx.db.query("category").collect();
        return getCategories;
    }
})

export const createCategory= mutation({
    args: {
        categoryName: v.string(),
        iconBackground: v.optional(v.string()),
        iconColor: v.optional(v.string()),
        articleCount: v.optional(v.number()),
        iconName: v.optional(v.string()),   
    },
    handler: async (ctx, args) => {
        const newCategory = await ctx.db.insert("category", args);
        return newCategory;
    }
})

export const updateCategory = mutation({
    args: {
        id: v.id("category"),
        categoryName: v.optional(v.string()),
        iconBackground: v.optional(v.string()),
        iconColor: v.optional(v.string()),
        articleCount: v.optional(v.number()),
        iconName: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const updatedCategory = await ctx.db.patch("category", args.id, args);
        return updatedCategory;
    }
})

export const deleteCategory = mutation({
    args: {
        id: v.id("category"),
    },
    handler: async (ctx, args) => {
        const deletedCategory = await ctx.db.delete("category", args.id);
        return deletedCategory;
    }
})