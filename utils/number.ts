export const formatNumber = (
  value: number | string,
  decimals: number = 2,
): string => {
  if (value === null || value === undefined || value === "") return "0";

  const numStr = value.toString();
  const [integerPart, fractionalPart] = numStr.split(".");

  let truncatedFraction = "";
  if (fractionalPart && decimals > 0) {
    truncatedFraction = fractionalPart.substring(0, decimals);
  }

  const truncatedValue = truncatedFraction
    ? `${integerPart}.${truncatedFraction}`
    : integerPart;

  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(Number(truncatedValue));
};
