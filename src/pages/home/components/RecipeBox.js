import React, { useContext } from "react";
import { AppProvider } from "../../../Provider";

export const RecipeBox = (item, props) => {
  const { store, setStore } = useContext(AppProvider);
  const data = item.item;
  {
    // console.log(data, "poooooop");
  }
  return (
    <div className="shadow-xl rounded-lg h-full flex flex-col">
      <div className="flex-1">
        <div
          className="pt-[65%]"
          style={{
            backgroundImage: `url("${data.image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            borderRadius: "8px 8px 0 0",
          }}
        ></div>

        <div className="p-4">
          <div className="">
            <p className="text-lg font-semibold text-neutral-700">
              {data.title}
            </p>
          </div>

          <div>
            <p className="text-neutral-600">
              cooking time:{" "}
              <span className="font-medium"> {data.cookTime}</span>
            </p>
          </div>

          <div>
            <p className="text-neutral-600">
              {data.description.length > 200
                ? data.description.substring(0, 200) + ` ...`
                : data.description}
            </p>
          </div>
        </div>
      </div>

      <div className="p-3">
        {data.tags.slice(0, 5).map((item, index) => {
          return (
            <div
              key={index}
              className="bg-neutral-700 rounded-2xl px-3 py-1 m-1 inline-block"
            >
              <p className="text-neutral-200">{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
