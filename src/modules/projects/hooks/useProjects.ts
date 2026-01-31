"use client";

import { projects } from "../data";
import type { Project } from "../types";

export function useProjects() {
  return {
    data: projects,
    loading: false,
    error: null,
  };
}