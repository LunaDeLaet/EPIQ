import React from "react";
import { Button, Card as FlowbiteCard } from "flowbite-react";

type Props = {
  headingText: string;
  paragraphText: string;
  buttonText: string;
};

const Card = ({ headingText, paragraphText, buttonText }: Props) => {
  return (
    <div className="w-72">
      <FlowbiteCard className="h-full">
        <div className="h-full flex flex-col justify-start gap-5">
          <h5 className="text-2xl font-bold text-grey dark:text-white">
            {headingText}
          </h5>
          <p className="font-normal text-grey dark:text-gray-400">
            {paragraphText}
          </p>
          <Button
            color="black"
            className="bg-blue">
            {buttonText}
          </Button>
        </div>
      </FlowbiteCard>
    </div>
  );
};

export default Card;
