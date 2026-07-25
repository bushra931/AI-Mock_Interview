import { Card, CardContent } from "@/components/ui/card";

type Props = {
  value: string;
  onChange: (difficulty: string) => void;
};

const difficulties = [
  {
    id: "easy",
    title: "Easy",
    subtitle: "Basic concepts & fundamentals",
    color: "border-green-500",
    icon: "🟢",
  },
  {
    id: "medium",
    title: "Medium",
    subtitle: "Company interview level",
    color: "border-yellow-500",
    icon: "🟡",
  },
  {
    id: "hard",
    title: "Hard",
    subtitle: "Advanced interview questions",
    color: "border-red-500",
    icon: "🔴",
  },
];

export default function DifficultySelector({
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">
        Select Difficulty
      </h2>

      <div className="grid md:grid-cols-3 gap-5">
        {difficulties.map((difficulty) => (
          <Card
            key={difficulty.id}
            onClick={() => onChange(difficulty.id)}
            className={`
              cursor-pointer
              transition-all
              duration-300
              bg-white/5

              ${
                value === difficulty.id
                  ? "border-violet-500 scale-105 shadow-xl shadow-violet-500/20"
                  : "border-white/10 hover:border-violet-500 hover:shadow-lg"
              }
            `}
          >
            <CardContent className="p-5 text-center">

              <div className="text-4xl">
                {difficulty.icon}
              </div>

              <h3 className="mt-3 text-lg font-semibold">
                {difficulty.title}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {difficulty.subtitle}
              </p>

            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}