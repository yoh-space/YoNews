import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { DATA } from "./data";

export const getAllArticles = query({
  handler: async (ctx) => {
    const allArticles = await ctx.db.query("articles").collect();
    return allArticles;
  },
});

export const createArticle = mutation({
  handler: async (ctx) => {
    for(let i = 0; i < DATA.length; i++) {
      await ctx.db.insert("articles", DATA[i]);
    }
  },

});
