import Card from "@/components/Card";
import { fetchContentfulEntryLinkedEntries } from "../services/contentful/contentful";
import { LinkedEntry } from "../services/contentful/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { sortLinkedEntriesById } from "@/services/contentful/utils";

type Props = {
  cards: any[];
};

export async function getStaticProps() {
  const res = await fetchContentfulEntryLinkedEntries(
    "epiqLandingPage",
    "EPIQ Landing Page 1"
  );
  const cards = res.includes.Entry.filter(
    (entry: any) => entry.sys?.contentType?.sys?.id === "card"
  );

  sortLinkedEntriesById(cards);

  return {
    props: {
      cards,
      // ISR
      revalidate: 1,
    },
  };
}

const Home = ({ cards }: Props) => {
  return (
    <>
      <div
        id="blue-background-block"
        className="bg-blue w-full h-50vh"></div>
      <div
        id="cards-container"
        className="absolute xl:top-1/3 top-1/4 right-0 left-0 h-fit m-auto flex flex-wrap gap-5 justify-center">
        {cards?.map((cardObject: LinkedEntry) => {
          const card = cardObject.fields;
          return (
            <Card
              key={card.title}
              headingText={card.title}
              paragraphText={
                documentToReactComponents(card.mainText!) as string
              }
              buttonText={card.buttonText as string}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
