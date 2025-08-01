type MemoryEntry = { timestamp: string; content: string; tags?: string[] };
let memoryStore: MemoryEntry[] = [];
export function addMemory(content: string, tags: string[] = []) {
  const entry: MemoryEntry = {
    timestamp: new Date().toISOString(),
    content,
    tags
  };
  memoryStore.push(entry);
  console.log('🧠 Memory saved:', entry);
}
export function getRecentMemories(limit: number = 5): MemoryEntry[] {
  return memoryStore.slice(-limit);
}
export function findByTag(tag: string): MemoryEntry[] {
  return memoryStore.filter(entry => entry.tags?.includes(tag));
 }
