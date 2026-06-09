interface Props {
  title: string;
  value: string;
  subtitle: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
}: Props) {
  return (
    <div
      className="
      bg-white/5
      backdrop-blur-xl
      rounded-3xl
      p-6
      border
      border-cyan-500/20
      hover:border-cyan-400
      transition
      "
    >
      <h3 className="text-gray-400">
        {title}
      </h3>

      <h1 className="text-5xl font-bold mt-3">
        {value}
      </h1>

      <p className="text-green-400 mt-3">
        {subtitle}
      </p>
    </div>
  );
}