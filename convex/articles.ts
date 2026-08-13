import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import DATA from "./news.js";

export const getAllArticles = query({
  handler: async (ctx) => {
    const allArticles = await ctx.db.query("articles").collect();
    return allArticles;
  },
});

export const createArticle = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    imageUrl: v.optional(v.string()),
    categoryName: v.string(),
  },
  handler: async (ctx, args) => {
    const newArticle = await ctx.db.insert("articles", args);
    return newArticle;
  },

});

export const updateArticle = mutation({
  args: {
    id: v.id("articles"),
    title: v.optional(v.string()),
    content: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    categoryName: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const updatedArticle = await ctx.db.patch("articles", args.id, args);
    return updatedArticle;
  },
});

export const deleteArticle = mutation({
  args: {
    id: v.id("articles"),
  },
  handler: async (ctx, args) => {
    const deletedArticle = await ctx.db.delete("articles", args.id);
    return deletedArticle;
  }
})

export const getArticleById = query({
  args:{
    id: v.id("articles"),
  },
  handler: async (ctx, args) =>{
    const article = await ctx.db.get("articles", args.id);
    return article;
  }
})

export const getArticlesByCategory = query({
  args: {
    categoryName: v.string(),
  },
  handler: async (ctx,args)=>{
    const articles = await ctx.db.query("articles").withIndex("by_categoryName", (q) => q.eq("categoryName", args.categoryName)).collect();
    return articles;
  }
})
