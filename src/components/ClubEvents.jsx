import { useNavigate, Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import GradientText from "./ui/GradientText";

export function ClubEvents() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Pro Night",
      src: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a1dbab0027d654181a/view?project=6756a8dc000c0d24754b&mode=admin",
      link: "/pro-night",
    },
    {
      title: "Celebrity Night",
      src: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a48344002001187e96/view?project=6756a8dc000c0d24754b&mode=admin",
      link: "/celebrity-night",
    },
    {
      title: "Technical Events",
      src: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a1db88001255381c7a/view?project=6756a8dc000c0d24754b&mode=admin",
      link: "/technical-events",
    },
    {
      title: "Non-Technical Events",
      src: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a1db80000be49f3b53/view?project=6756a8dc000c0d24754b&mode=admin",
      link: "/non-technical-events",
    },
    {
      title: "Virtual Events",
      src: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a3389d0014da31ae2e/view?project=6756a8dc000c0d24754b&mode=admin",
      link: "/virtual-events",
    },
    {
      title: "MP Gaurav",
      src: "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a1dbb60011dc71afd8/view?project=6756a8dc000c0d24754b&mode=admin",
      link: "/mp-pride",
    },
  ];

  return (
    <>
      <div className="bg-zinc-950 h-full w-full">
        <div className="flex items-center justify-start p-4">
          <button
            onClick={() => navigate("/", { state: { from: "ClubEvents" } })}
            className="text-white bg-purple-600 py-2 px-4 rounded-lg hover:scale-105 ease-in-out duration-300 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>
        </div>
        <div className="my-2">
          <GradientText
            animationSpeed={5}
            showBorder={false}
            className="md:text-8xl text-5xl"
          >
            OUR EVENTS
          </GradientText>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-8 mx-auto max-w-[95%]">
          {cards.map((card, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] h-auto rounded-xl p-6 border-4 hover:border-purple-600 transition-all ease-in-out duration-300">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white justify-self-center"
                >
                  {card.title}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={card.src}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={card.title}
                  />
                </CardItem>
                <div className="flex justify-center items-center mt-20">
                  <Link to={card.link}>
                    <CardItem
                      translateZ={20}
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      View more →
                    </CardItem>
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </>
  );
}
