import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: "sqlite",
  database: "./src/database/db.sqlite",
  entities: ["./src/entities/*.ts"],
  migrations: ["./src/database/migrations/*.ts"]
});

dataSource.initialize()
  .then(() => {
    console.log("Data Source has been inicialized!")
  }).catch((err) => {
    console.log("Error during the inicialization!", err)
  });

export { dataSource }