import * as z from "zod";

const createEditCostumerSchema = z.object({
  name: z.string(),
  fantasy: z.string(),
  document: z.string(),
  address: z.string(),
});

export default createEditCostumerSchema;
