"use client";

import { members } from "../data";
import type { Member } from "../types";

export function useMembers() {
  return {
    data: members,
    loading: false,
    error: null,
  };
}