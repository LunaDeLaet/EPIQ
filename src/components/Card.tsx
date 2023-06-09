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
          <h5 className="text-2xl font-bold  dark:text-white">{headingText}</h5>
          <div className="font-normal  dark:text-gray-400">{paragraphText}</div>
          <Button
            color="black"
            className="bg-blue  mt-auto">
            {buttonText}
          </Button>
        </div>
      </FlowbiteCard>
    </div>
  );
};

export default Card;
