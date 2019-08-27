import { dbConnection } from "../../../config/db";
import { getConnection, getRepository } from "typeorm";
import { ExampleObject, Example } from "../../../orm/entities/example";

export const createExampleModelsTest = () =>
  describe("Test example Model", () => {
    beforeAll(async () => {
      await dbConnection();
    });

    afterAll(async () => {
      // close connection
      await getConnection().close();
    });

    beforeEach(async () => {});

    afterEach(async () => {
      await getConnection().synchronize(true);
    });
    const data1: ExampleObject = {
      name: "fullName",
      path: ".fullName"
    };

    test("Test: Add a data to database", async () => {
      const t = await new Example(data1).save();
      expect(await getRepository(Example).count()).toBe(1);
    });
  });
