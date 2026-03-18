export default function PercentageChange({ percentage }) {
  let icon = "";
  let color = "";
  if (percentage >= 0) {
    icon = "▲";
    color = "text-green-500";
  }

  if (percentage < 0) {
    icon = "▼";
    color = "text-red-500";
  }

  return <p className={color}>{`${icon} ${percentage.toFixed(1)}%`}</p>;
}
