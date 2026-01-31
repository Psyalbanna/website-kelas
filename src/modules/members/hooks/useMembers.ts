"use client";

import { members } from "../data";

export function useMembers() {
  return {
    data: members,
    loading: false,
    error: null,
  };
}