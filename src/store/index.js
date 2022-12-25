import create from "zustand";
import { persist } from "zustand/middleware";
// import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
import {projects} from './projects';

export const useAppStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      credentials: null,
      projects: [],
      logIn: (email, password) =>
        set({ isLoggedIn: true, credentials: { email, password } }),
      logOut: () => set({ isLoggedIn: false, credentials: null, projects: [] }),
      getProjects: async () => {
        // if (!octokit) {
        //   octokit = new Octokit();
        // }
        // const projects = await octokit.rest.repos.listForOrg({
        //   org: "Trovidan",
        //   type: "public",
        // });
        set({ projects: projects });
      },
    }),
    {
      name: "app-storage", // unique name
    }
  )
);
