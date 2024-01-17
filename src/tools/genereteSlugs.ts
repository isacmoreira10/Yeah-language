export function generateSlug(value: string): string {
  return value
    .toLocaleLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}
