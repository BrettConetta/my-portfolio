export type Recommendation = {
  id: string;
  quote: string;
  name: string;
  jobTitle: string;
  /** Company where you worked together (not necessarily their employer today) */
  company: string;
  /** Optional context, e.g. relationship or team */
  context?: string;
};
