import { getRecentMemories } from './memory-engine'; 
export function summarizeWeek() { const memories = getRecentMemories(20); const summary = memories.map(e => '- ' + e.content).join('\n'); console.log('🪞 Weekly Summary:\\n', summary); return summary; }
