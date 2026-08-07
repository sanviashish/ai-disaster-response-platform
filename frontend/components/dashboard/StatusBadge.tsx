interface StatusBadgeProps {
  text: string;
  color?: string;
}

export default function StatusBadge({
  text,
  color = "bg-green-500",
}: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium text-white ${color}`}
    >
      <span className="h-2 w-2 rounded-full bg-white"></span>
      {text}
    </span>
  );
}