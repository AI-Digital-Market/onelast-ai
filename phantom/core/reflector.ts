import { getRecentMemories } from './memory-engine';
export function summarizeWeek() {
  const memories = getRecentMemories(20);
  const summary = memories.map(entry => '- ' + entry.content).join('\n');
  console.log('🪞 Weekly Summary:\\n', summary);
  return summary;
}
