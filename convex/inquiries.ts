import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
    agency: v.optional(v.string()),
    email: v.string(),
    phone: v.optional(v.string()),
    projectType: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const inquiryId = await ctx.db.insert("inquiries", {
      ...args,
      createdAt: Date.now(),
    });
    return inquiryId;
  },
});
