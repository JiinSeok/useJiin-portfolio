export interface SoftSkillEntry {
  title: string;
  date: string;
  description: string;
  tags: string[];
  url?: string;
}

export const softSkillEntries: SoftSkillEntry[] = [
  {
    title: "Effective Team Communication",
    date: "2023-06-15",
    description:
      "Learned how to improve team communication by setting clear expectations, active listening, and providing constructive feedback during our project sprints.",
    tags: ["Communication", "Teamwork", "Leadership"],
  },
  {
    title: "Problem-Solving in Cross-Functional Teams",
    date: "2023-05-20",
    description:
      "Developed strategies for solving complex problems in cross-functional teams by focusing on clear documentation, regular sync-ups, and collaborative decision-making.",
    tags: ["Problem Solving", "Collaboration", "Documentation"],
    url: "https://www.atlassian.com/team-playbook/plays/problem-framing",
  },
  {
    title: "Time Management for Developers",
    date: "2023-04-25",
    description:
      "Explored effective time management techniques for developers, including the Pomodoro Technique, task prioritization, and managing interruptions during deep work.",
    tags: ["Time Management", "Productivity", "Work-Life Balance"],
  },
  {
    title: "Giving and Receiving Code Reviews",
    date: "2023-03-30",
    description:
      "Practiced the art of giving constructive code reviews and gracefully receiving feedback, focusing on the code rather than the person.",
    tags: ["Code Reviews", "Feedback", "Mentoring"],
  },
  {
    title: "Presenting Technical Concepts to Non-Technical Stakeholders",
    date: "2023-02-15",
    description:
      "Developed skills for explaining complex technical concepts to non-technical stakeholders by using analogies, visual aids, and focusing on business value.",
    tags: ["Communication", "Presentation", "Stakeholder Management"],
  },
];