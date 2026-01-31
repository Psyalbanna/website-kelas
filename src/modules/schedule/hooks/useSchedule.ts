"use client";

import { schedules } from "../data";

export function useSchedule() {
  return {
    data: schedules,
    loading: false,
    error: null,
  };
}