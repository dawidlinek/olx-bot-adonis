import type { HttpContext } from "@adonisjs/core/http";

import { createSearchQueryValidator } from "#validators/search_query";

export default class SearchQueriesController {
  async store({ request }: HttpContext) {
    const data = request.validateUsing(createSearchQueryValidator);
    return data;
  }
}
