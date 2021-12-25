import { get } from "svelte/store";
import { repository } from "../stores/repository";
import { repositories } from "../stores/repositories";

export const getActifRepositories = () => {
  return get(repositories)
      .filter(repository => repository.actif);
}

export const setRepository = (payload) => {
  repository.set({
    repository: payload,
    git: {}
  });
}

export const getRepository = () => {
  return get(repository).repository;
}
