module.exports = {
  type: "postgres",
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT, 10) || 3306,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  synchronize: true,
  logging: false,
  migrations: ["src/data/migrations/*.ts"],
  entities: ["src/entities/*.ts"],
  cli: {
    migrationsDir: "src/data/migrations",
    entitiesDir: "src/entities",
  },
};
