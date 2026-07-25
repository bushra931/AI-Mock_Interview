import { Card, CardContent } from "@/components/ui/card";

type Props = {
  value: number;
  onChange: (count: number) => void;
};

const questionCounts = [
  {
    count: 10,
    title: "10 Questions",
    subtitle: "Quick Practice (10-15 min)",
  },
  {
    count: 20,
    title: "20 Questions",
    subtitle: "Placement Round (20-30 min)",
  },
  {
    count: 30,
    title: "30 Questions",
    subtitle: "Full Mock Interview (40+ min)",
  },
];

export default function QuestionCountSelector({
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">
        Select Number of Questions
      </h2>

      <div className="grid md:grid-cols-3 gap-5">
        {questionCounts.map((item) => (
          <Card
            key={item.count}
            onClick={() => onChange(item.count)}
            className={`
              cursor-pointer
              transition-all
              duration-300
              bg-white/5

              ${
                value === item.count
                  ? "border-violet-500 scale-105 shadow-xl shadow-violet-500/20"
                  : "border-white/10 hover:border-violet-500 hover:shadow-lg"
              }
            `}
          >
            <CardContent className="p-5 text-center">

              <h3 className="text-2xl font-bold">
                {item.count}
              </h3>

              <p className="mt-2 font-semibold">
                {item.title}
              </p>

              <p className="mt-2 text-sm text-gray-400">
                {item.subtitle}
              </p>

            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}