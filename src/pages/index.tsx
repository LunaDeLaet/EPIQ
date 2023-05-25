import Card from "@/components/Card";

const Home = () => {
  return (
    <>
      <div
        id="grey-block"
        className="bg-blue w-full h-50vh"></div>
      <div
        id="cards-container"
        className="absolute top-1/3 right-0 left-0 xl:w-3/5 w-4/5 h-fit m-auto flex gap-5">
        <Card
          headingText="Ontdek onze coachings"
          paragraphText="Als life coach, auticoach en ADHD-coach bied ik diverse coachingstijlen aan die aansluiten bij uw specifieke behoeften. Of het nu gaat om levensdoelen, autisme of ADHD, ik begeleid u graag naar succes."
          buttonText="Lees meer"
          // icon={
          //   <img
          //     src="/images/life-in-the-balance-svgrepo-com.svg"
          //     width={75}
          //     height={75}
          //   />
          // }
        />
        <Card
          headingText="Maak een afspraak"
          paragraphText="Wilt u een afspraak maken? Neem contact op via het formulier hieronder en ik reageer zo snel mogelijk. Samen kunnen we uw doelen bespreken en een op maat gemaakt plan maken."
          buttonText="Maak een afspraak"
          // icon={
          //   <img
          //     src="/images/calendar.svg"
          //     width={75}
          //     height={75}
          //   />
          // }
        />
        <Card
          headingText="Over mij en mijn coachingpraktijk"
          paragraphText="Ik ben .... en ik help mensen hun potentieel te ontdekken. Met ervaring in het begeleiden van mensen met neurodivergentie, bied ik een warme benadering om u te helpen groeien en uw doelen te bereiken. Ontdek meer over mijn praktijk en hoe ik u kan ondersteunen."
          buttonText="Lees meer"
        />
      </div>
    </>
  );
};

export default Home;
