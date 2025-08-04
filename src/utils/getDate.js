export const getDate = () => {
  const today = new Date();

  // Format the month, day, and year
  const month = today.toLocaleString("en-US", { month: "short" }); // Aug
  const day = today.getDate(); // 29
  const year = today.getFullYear(); // 2024
  const date = `${month} ${day}, ${year}`;

  return date;
};
