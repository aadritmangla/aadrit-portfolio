import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  inquiries: defineTable({
    name: v.string(),
    agency: v.optional(v.string()),
    email: v.string(),
    phone: v.optional(v.string()),
    projectType: v.string(),
    message: v.string(),
    createdAt: v.number(),
  }),
  settings: defineTable({
    key: v.string(),
    value: v.any(),
  }).index("by_key", ["key"]),
});
