"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "../../lib/Firebase";
import { collection, getDocs } from "firebase/firestore";
import Question from "@/app/components/Question";

interface QuestionType {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export default function QuizPage() {
  const { category } = useParams();
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!category) return;

    async function fetchQuestions() {
      setLoading(true);
      try {
        const questionsRef = collection(db, `categories/${category}/questions`);
        const querySnapshot = await getDocs(questionsRef);

        const fetchedQuestions = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as QuestionType[];

        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
      setLoading(false);
    }

    fetchQuestions();
  }, [category]);

  if (loading) return <p>Loading questions...</p>;
  if (questions.length === 0) return <p>No questions found for {category}.</p>;

  return (
    <div className="">
      {questions.map((q, index) => (
        <Question key={q.id} questions={q.question} options={q.options} correctAnswer={q.correctAnswer} />
      ))}
    </div>
  );
}
