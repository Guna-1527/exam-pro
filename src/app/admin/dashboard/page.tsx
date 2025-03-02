"use client";

import { useState } from "react";
import { db } from "../../lib/Firebase";
import { collection, doc, setDoc } from "firebase/firestore";

const AdminDashboard = () => {
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string[]>(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!category || !question || options.some(opt => !opt) || !correctAnswer) {
      alert("Please fill all fields");
      return;
    }
    setLoading(true);
    try {
      const categoryRef = collection(db, `categories/${category}/questions`);
      const newQuestionRef = doc(categoryRef);
      await setDoc(newQuestionRef, {
        question,
        options,
        correctAnswer,
      });
      alert("Question added successfully!");
      setCategory("");
      setQuestion("");
      setOptions(["", "", "", ""]);
      setCorrectAnswer("");
    } catch (error) {
      console.error("Error adding question:", error);
      alert("Failed to add question");
    }
    setLoading(false);
  };

  return (
    <div className="p-5 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          type="text" 
          placeholder="Category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          className="p-2 border rounded" 
        />
        <textarea 
          placeholder="Question" 
          value={question} 
          onChange={(e) => setQuestion(e.target.value)} 
          className="p-2 border rounded" 
        />
        {options.map((opt, index) => (
          <input 
            key={index} 
            type="text" 
            placeholder={`Option ${index + 1}`} 
            value={opt} 
            onChange={(e) => handleOptionChange(index, e.target.value)} 
            className="p-2 border rounded" 
          />
        ))}
        <input 
          type="text" 
          placeholder="Correct Answer" 
          value={correctAnswer} 
          onChange={(e) => setCorrectAnswer(e.target.value)} 
          className="p-2 border rounded" 
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded" 
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Question"}
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
