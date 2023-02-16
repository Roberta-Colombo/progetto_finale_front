import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import AdvancedSearchPage from "@/pages/AdvancedSearchPage.vue";
import SingleApartmentPage from "@/pages/SingleApartmentPage.vue";
import redirect from "@/pages/redirect.vue";
import NotFound from "@/pages/NotFound.vue";
import WorkingSearch from "@/pages/WorkingSearch.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/search",
    name: "search",
    component: AdvancedSearchPage,
  },
  //test grafica search:
  {
    path: "/working",
    name: "working-search",
    component: WorkingSearch,
  },
  {
    path: "/apartment/:slug",
    name: "apartment",
    component: SingleApartmentPage,
  },
  {
    path: "/not-found",
    name: "not-found",
    component: NotFound,
  },
  {
    path: "/redirect",
    name: "redirect",
    component: redirect,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
