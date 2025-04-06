/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from "@adonisjs/core/services/router";

const SearchQueriesController = () =>
  import("#controllers/search_queries_controller");

router.get("/", async () => {
  return {
    hello: "world",
  };
});

router.post("/test", [SearchQueriesController, "store"]);
