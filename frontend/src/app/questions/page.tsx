"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import type { NextPage } from "next";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "#/components/ui";
import { QUESTIONS } from "#/constants/questions";

const schema = z.object({
  extraversion: z.string().min(1),
  agreeableness: z.string().min(1),
  conscientiousness: z.string().min(1),
  neuroticism: z.string().min(1),
  openness: z.string().min(1),
});

type FormValues = z.infer<typeof schema>;

const Page: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => {
    console.log("---------------");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {QUESTIONS.map(({ type, id, text }) => (
        <Fragment key={id}>
          <div>
            <h2 className="flex items-center justify-center mb-48">
              <span className="text-xl text-black font-bold">{text}</span>
            </h2>
            <div>
              <p className="text-sm font-medium">回答内容</p>
              <input type="textarea" {...register(type)} />
            </div>
          </div>
        </Fragment>
      ))}
      <Button type="submit" icon={true} isDisabled={!isValid}>
        {isValid ? "この回答で守護霊を作成する" : "未入力の項目があります"}
      </Button>
    </form>
  );
};

export default Page;
