import { useState } from "react";
import { motion } from "framer-motion";

const lessons = [
  {
    title: "第一課：認識數字（11-20）",
    quiz: {
      question: "請選出正確的數字：十三",
      options: ["13", "3", "30"],
      answer: "13"
    }
  },
  {
    title: "第二課：比較數的大小",
    quiz: {
      question: "哪個比較大？",
      options: ["14 vs 19", "17 vs 12", "20 vs 18"],
      answer: "20 vs 18"
    }
  },
  {
    title: "第三課：加法進位練習",
    quiz: {
      question: "9 + 4 = ?",
      options: ["12", "13", "14"],
      answer: "13"
    }
  },
  {
    title: "第四課：減法退位練習",
    quiz: {
      question: "13 - 5 = ?",
      options: ["9", "8", "7"],
      answer: "8"
    }
  },
  {
    title: "第五課：找規律",
    quiz: {
      question: "找出接下來的數字：2, 4, 6, __",
      options: ["7", "8", "10"],
      answer: "8"
    }
  }
];

export default function App() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleCheckAnswer = () => {
    const correct =
      selectedOption === lessons[currentLesson].quiz.answer;
    setIsCorrect(correct);
  };

  return (
    <div className="p-4 max-w-xl mx-auto text-center font-sans">
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        🧮 小一下學期數學複習
      </motion.h1>

      <div className="border rounded-xl p-4 shadow-lg bg-white mb-4">
        <h2 className="text-xl font-semibold mb-2">
          {lessons[currentLesson].title}
        </h2>
        <p className="mb-2">
          {lessons[currentLesson].quiz.question}
        </p>
        <div className="flex flex-col gap-2">
          {lessons[currentLesson].quiz.options.map((option, index) => (
            <button
              key={index}
              className={\`rounded-xl py-2 px-4 border \${selectedOption === option ? 'bg-blue-300' : 'bg-gray-100'}\`}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="mt-4">
          <button
            onClick={handleCheckAnswer}
            disabled={!selectedOption}
            className="bg-yellow-300 rounded-xl px-4 py-2 font-bold"
          >
            檢查答案
          </button>
          {isCorrect !== null && (
            <p className="mt-2 font-bold text-lg">
              {isCorrect ? "✅ 答對了！" : "❌ 再試一次！"}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => {
            setCurrentLesson(Math.max(currentLesson - 1, 0));
            setSelectedOption(null);
            setIsCorrect(null);
          }}
          disabled={currentLesson === 0}
          className="bg-pink-200 rounded-xl px-4 py-2"
        >
          上一課
        </button>
        <button
          onClick={() => {
            setCurrentLesson(
              Math.min(currentLesson + 1, lessons.length - 1)
            );
            setSelectedOption(null);
            setIsCorrect(null);
          }}
          disabled={currentLesson === lessons.length - 1}
          className="bg-green-200 rounded-xl px-4 py-2"
        >
          下一課
        </button>
      </div>
    </div>
  );
}
