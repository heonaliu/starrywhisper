export const ACHIEVEMENT_LABELS = {
  1: "Just a dream",
  2: "First steps taken",
  3: "Making progress",
  4: "Almost there",
  5: "Achieved",
}

export const LOCATIONS = [
  "North America",
  "South America",
  "Europe",
  "Asia",
  "Africa",
  "Oceania",
  "Antarctica",
]

export function getPulseConfig(achievement) {
  return PULSE_CONFIG[Math.min(5, Math.max(1, Math.round(achievement)))];
}