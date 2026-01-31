"use client";

import { projects } from "../data";

export function useProjects() {
  return {
    data: projects,
    loading: false,
    error: null,
  };
}