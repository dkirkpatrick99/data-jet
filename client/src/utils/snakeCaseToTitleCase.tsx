// Transform snake case strings into title case strings
export const snakeCaseToTitleCase = (s: string) =>
  s.toLowerCase().replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())       // Initial char (after -/_)
    .replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase())