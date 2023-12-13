export default function getPascalCase(str: string): string {
  return `${str}`
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase())
    .join();
}
