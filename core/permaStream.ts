export async function ingestCalendarEvents(data: any[]) { data.forEach(e => console.log('📅 Calendar event:', e.title)); } 
export async function ingestChatLogs(data: any[]) { data.forEach(msg => console.log('💬', msg.user, 'said', msg.text)); }
