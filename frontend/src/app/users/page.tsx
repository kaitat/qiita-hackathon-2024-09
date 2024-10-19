"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useGetUsers } from "./use-get-users";

const Page: NextPage = () => {
  const { data, isLoading, error } = useGetUsers();

  if (isLoading) return <div>Loading...</div>;

  console.log(data);
  if (!data?.success || error) return notFound();

  return (
    <div className="m-4">
      <ul className="rounded-lg bg-white shadow-sm border border-solid border-gray-200">
        {data.data.users.map(({ imageUrl, id, name }) => (
          <li
            className="w-full p-4 flex justify-between bg-white border-b border-b-solid border-b-gray-200"
            key={id}
          >
            {imageUrl && (
              <Image src={imageUrl} alt={name} width={20} height={20} />
            )}
            <span className="flex-1">{name}</span>
            <span>
              <svg
                className="text-gray-400 w-[24px] h-[24px] dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
