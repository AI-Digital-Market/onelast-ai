export async function ingestCalendarEvents(data: any[]) {
  data.forEach(event => console.log('📅 Calendar event:', event.title));
}
export async function ingestChatLogs(data: any[]) {
  data.forEach(msg => console.log('💬', msg.user, 'said', msg.text));
}
