import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getInstagramDp = query({
  args: {},
  handler: async (ctx) => {
    const setting = await ctx.db
      .query("settings")
      .withIndex("by_key", (q) => q.eq("key", "instagram"))
      .first();
    
    return setting?.value || { url: null };
  },
});
