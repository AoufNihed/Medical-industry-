import { FunctionComponent } from "react";
import Card from "./Card";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-center text-13xl text-whitesmoke font-outfit">
      <div className="w-[1260px] flex flex-row flex-wrap items-center justify-center gap-[60px] shrink-0 [debug_commit:1de1738] max-w-full z-[7] mq750:gap-[30px]">
        <Card
          img="/img-1@2x.png"
          virtualAssistants="Virtual assistants "
          offer247SupportAndAnswerB="Offer 24/7 support and answer basic medical questions, appointment scheduling, or medication information."
        />
        <Card
          img="/img-2@2x.png"
          virtualAssistants="Symptom checkers"
          offer247SupportAndAnswerB="Utilize AI to provide preliminary symptom analysis and suggest appropriate actions based on patient data."
          propAlignSelf="stretch"
        />
        <Card
          img="/img-3@2x.png"
          virtualAssistants="Medication adherence"
          offer247SupportAndAnswerB="Medication adherence reminders and personalized medication plans: Leverage AI to personalize medication reminders and suggest adjustments based on real-time data."
          propAlignSelf="unset"
        />
      </div>
    </section>
  );
};

export default FrameComponent1;
