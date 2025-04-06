import vine from "@vinejs/vine";

export const createSearchQueryValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
    priceMin: vine.number().positive(),
    priceMax: vine.number().positive(),
    locationId: vine.number(),
  }),
);
