"use client";

import { schedules } from "../data";
import type { ScheduleItem } from "../types";

export function useSchedule() {
  return {
    data: schedules,
    loading: false,
    error: null,
  };
}