export default function getElapsedTime(startTime: Date, currentTime: Date) {
  const start = new Date(startTime).getTime();
  const elapsed = currentTime.getTime() - start;

  const hours = Math.floor(elapsed / 3600000);
  const minutes = Math.floor((elapsed % 3600000) / 60000);
  const seconds = Math.floor((elapsed % 60000) / 1000);

  return `${hours}h ${minutes}m ${seconds}s`;
}
