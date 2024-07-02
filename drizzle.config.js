/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://AI-Content-Generator_owner:bJfY5zyaOiS2@ep-restless-feather-a5ds0n7l.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require',
  }
};