import { boolean, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('ai_output', {
  id: serial('id').primaryKey(),
  formData: text('form_data').notNull(),
  templateSlug: varchar('template_slug').notNull(),
  aiResponse: text('ai_response').notNull(),
  createdBy: varchar('created_by').notNull(),
  createdAt: varchar('created_at').notNull(),
});


export const UserSubscription = pgTable('userSubscription', {
  id: serial('id').primaryKey(),
  email: varchar('email').notNull(),
  userName: varchar('userName'),
  active: boolean('active'),
  paymentId: varchar('paymentId'),
  joinDate: varchar('joinDate')
});
