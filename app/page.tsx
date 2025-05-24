import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Index() {
  return (
    <div className="flex-1  flex flex-col gap-20 items-center">
      <div className="flex-1 flex flex-col gap-20 w-8/12 max-w-[99vw] px-3">
        <p>
          Join us in Subotica, Serbia, for the{" "}
          <strong>Li Ang EGC Prep Camp 2025</strong>, an exclusive Go training
          event led by Chinese professional Li Ang. This intensive, small-group
          camp is designed for serious players preparing for the European Go
          Congress, offering personalized programs tailored to each participant.
          Apply now to be considered—spaces are limited and admission is subject
          to review and confirmation. Include logistical information such as
          tasks to complete before attending, the event agenda, what to bring,
          and any other important details to help attendees prepare for the
          event.
        </p>

        <p className="flex justify-center">
          <Button className="w-1/3" variant={"outline"} size={"lg"}>
            <Link href={"/register"}>Register</Link>
          </Button>
        </p>

        {/*         
        <div className="w-full flex flex-col justify-center text-center">
          <Link href={"/register"}>
            <h2 className="font-bold text-4xl mb-4">Register</h2>
          </Link>{" "}
          or check <br />
          <Link className="underline" href={"/participants"}>
            registered participants
          </Link>
        </div> */}

        <p>
          The EGC prep Camp is a high-level, small-group training event designed
          to prepare serious Go enthusiasts for the upcoming European Go
          Congress. Held in Subotica, Serbia, this specialized camp offers a
          focused environment with semi-customized programs tailored to each
          participant’s strengths and areas for improvement. The camp will be
          led by <strong>Li Ang 3p</strong>, a professional Go player from China, whose extensive
          teaching experience and deep understanding of the game will offer a
          rare opportunity for intensive development. Each attendee will receive
          personalized guidance through game reviews, targeted lectures, and
          sparring sessions. Unlike large-scale group camps, this program
          emphasizes <strong>individualized coaching</strong>, making it ideal for advanced
          players seeking targeted improvement. The curriculum will be adapted
          based on participant skill levels, with a flexible schedule to allow
          for concentrated study, rest, and strategic gameplay.
        </p>

        <p>
          Participation in the camp is <strong>selective</strong>: interested individuals will be
          admitted <strong>only after a review and confirmation process</strong>, ensuring that
          the group remains focused and balanced in terms of level and learning
          needs. Set in the peaceful surroundings of Subotica, the camp will
          offer an immersive and motivating atmosphere for Go study, free from
          distractions, yet culturally rich and hospitable.
        </p>
      </div>
    </div>
  );
}
