"use client";

import { useEffect, useState } from "react";
import { db } from "../lib/Firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { log } from "console";

type Category = {
  id: string;
  name: string;
};

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const categoriesRef = collection(db, "categories");
        const querySnapshot = await getDocs(categoriesRef);
        const fetchedCategories = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Category[];
console.log(fetchedCategories);        
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
      setLoading(false);
    };
    
    fetchCategories();
  }, []);
  
  if (loading) return <p>Loading categories...</p>;
  if (categories.length === 0) return <p>No categories found.</p>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Select a Category</h1>
      <ul className="mt-4">
        {categories.map((category) => (
          <li key={category.id} className="mb-2">
            <Link href={`${category.id}/test`} className="text-blue-600 hover:underline">
              {category.id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
