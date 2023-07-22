import React, { useContext, useState } from "react";
import { RecipeBox } from "./components/RecipeBox";
import axios from "axios";
import { useQuery } from "react-query";
import { AppProvider } from "../../Provider";

const url = "http://localhost:3000/recipes";

export const Home = () => {
  const { store, setStore } = useContext(AppProvider);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(store.list || []);

  const fetchData = async () => {
    const res = await axios.get(url);
    const result = res.data;
    return result;
  };

  const { isSuccess } = useQuery("list", fetchData, {
    onSuccess: (data) => {
      setStore("list", data);
      setFilteredRecipes(data);
      // console.log(data, "shit data");
    },
  });

  const handleSearch = () => {
    const filtered = store.list.filter((recipe) => {
      return (
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    });

    setFilteredRecipes(filtered);
  };

  return (
    <>
      <div className="container mx-auto my-10 ">
        <div className="flex justify-center mb-10">
          <div className="flex items-center justify-between border max-w-xs rounded-xl px-3 py-1">
            <input
              className="text-neutral-600 placeholder:text-neutral-600 bg-transparent outline-none "
              placeholder="search recipe"
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img onClick={handleSearch} src="/img/search.svg" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-x-10">
          {filteredRecipes.map((item, index) => (
            <div key={index}>
              <RecipeBox item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
