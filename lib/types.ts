export type ReminderIcon =
  | 'utensils'
  | 'coffee'
  | 'dumbbell'
  | 'book'
  | 'droplet'
  | 'pill'
  | 'moon'
  | 'sun'
  | 'heart'
  | 'sparkles'
  | 'brain'
  | 'leaf'
  | 'sunrise'
  | 'sunset'
  | 'cookie'
  | 'soup'
  | 'apple'
  | 'footprints'

/** A user-created reminder (water, workout, meds, anything). */
export type CustomReminder = {
  id: string
  name: string
  note?: string
  icon: ReminderIcon
  /** "HH:MM" 24h times the reminder should fire */
  times: string[]
  /** 0 = Sunday ... 6 = Saturday. Empty = every day */
  days: number[]
  enabled: boolean
  createdAt: number
  /** ISO date (YYYY-MM-DD) -> number of times completed that day */
  completions: Record<string, number>
}

export type MealKey = 'Breakfast' | 'Lunch' | 'Snacks' | 'Dinner'

/** Per-meal alarm configuration. */
export type MealSetting = {
  enabled: boolean
  favorite: boolean
}

export type MealSettings = Record<MealKey, MealSetting>

export const WEEKDAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
export const WEEKDAY_NAMES = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
