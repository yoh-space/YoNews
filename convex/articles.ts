import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import DATA from "./news.js";

export const getAllArticles = query({
  handler: async (ctx) => {
    const allArticles = await ctx.db.query("articles").collect();
    return allArticles;
  },
});

export const createArticles = mutation({
  handler: async (ctx) => {
    for( let i = 0; i < DATA.length; i++) {
      ctx.db.insert("articles", DATA[i]);
    }
    return "All articles created successfully";
  },

});

export const getArticleById = query({
  args:{
    id: v.id("articles"),
  },
  handler: async (ctx, args) =>{
    const article = await ctx.db.get("articles", args.id);
    return article;
  }
})
