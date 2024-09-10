
import Link from "next/link";

export default async function Index() {
  return (
    <div className="flex-1  flex flex-col gap-20 items-center">
      <div className="flex-1 flex flex-col gap-20 w-8/12 max-w-[99vw] px-3">
        <p>
          The 46th Belgrade Go Tournament will take place from October 19th to 20th, set in one of Europe’s
          most dynamic cities, adding to the excitement of the event. Belgrade,
          known for its rich history and vibrant culture, offers players and
          visitors a chance to explore its lively streets, historical landmarks,
          and unique blend of old-world charm and modern energy. From the
          historic Kalemegdan Fortress to the bustling nightlife of Skadarlija,
          Belgrade has something for everyone. Whether you’re strolling along
          the Danube or enjoying Serbian cuisine in one of the city's cozy
          restaurants, Belgrade provides an unforgettable experience.
        </p>

        <p>
          In between rounds, participants can soak in the city's energetic
          atmosphere, combining the thrill of competition with the opportunity
          to discover Belgrade’s hidden gems. The tournament, set in such a
          captivating location, promises to be an enriching experience not only
          for Go enthusiasts but for anyone eager to explore a city known for
          its warm hospitality and dynamic spirit.
        </p>
        <div className="w-full flex flex-col justify-center text-center">
          <Link href={"/register"}>
            <h2 className="font-bold text-4xl mb-4">Register</h2>
          </Link>{" "}
          or check <br />
          <Link className="underline" href={"/participants"}>
            registerd participants
          </Link>
        </div>
      </div>
    </div>
  );
}
