const activities = ["leisure", "meditation", "relaxation", "snap"] as const;

type CalmActivity = (typeof activities)[number];

export { activities };
export type { CalmActivity };
