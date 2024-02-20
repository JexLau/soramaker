export const postEmail = async (email: string) => {
  const response = await fetch(`/api/waitlist?email=${email}`);
  const data = await response.json();
  return data;
}