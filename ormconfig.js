module.exports = [
  {
    name: "dev",
    type: "sqlite",
    database: "db.sqlite3",
    autoSchemaSync: true,
    synchronize: true,
    entities: ["./src/orm/entities/*.ts"],
    cli: {
      entitiesDir: "./src/orm/entities"
    }
  }
];
