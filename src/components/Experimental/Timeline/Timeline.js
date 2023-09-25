// /src/Timeline/Timeline.js
import { Chrono } from "react-chrono";

export default function Timeline() {
  return (
    <>
      <div className="grid justify-items-center mt-8 gap-4">
        <Chrono
          items={[
            {
              title: "May 2015",
              cardTitle: "Graduated Michigan Tech",
              cardSubtitle:
                "Louis graduates from Michigan Technological University with a degree in Electrical Engineering",
              cardDetailedText: `In May of 2015, Louis Bersine graduates with his Bachelors Of Science in Electrical Engineering from Michigan Technlogical University located in Houghton, Michigan.`,
            },
            {
              title: "25 July 1940",
              cardTitle: "The Battle of Britain",
              cardSubtitle: `RAF Spitfire pilots scramble for their planes`,
              cardDetailedText: `After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.
    The following month, RAF Fighter Command airfields and aircraft factories came under attack. Under the dynamic direction of Lord Beaverbrook, production of Spitfire and Hurricane fighters increased, and despite its losses in pilots and planes, the RAF was never as seriously weakened as the Germans supposed.`,
            },
            {
              title: "June 1941",
              cardTitle: "Operation Barbarossa",
              cardSubtitle: `A column of Red Army prisoners taken during the first days of the German invasion`,
              cardDetailedText: `Since the 1920s, Hitler had seen Russia, with its immense natural resources, as the principal target for conquest and expansion. It would provide, he believed, the necessary ‘Lebensraum’, or living space, for the German people. And by conquering Russia, Hitler would also destroy the “Jewish pestilential creed of Bolshevism”. His non-aggression pact with Stalin in August 1939 he regarded as a mere temporary expedient.
    Barely a month after the fall of France, and while the Battle of Britain was being fought, Hitler started planning for the Blitzkrieg campaign against Russia, which began on 22 June 1941. Despite repeated warnings, Stalin was taken by surprise, and for the first few months the Germans achieved spectacular victories, capturing huge swathes of land and hundreds of thousands of prisoners. But they failed to take Moscow or Leningrad before winter set in.
    On 5/6 December, the Red Army launched a counter-offensive which removed the immediate threat to the Soviet capital. It also brought the German high command to the brink of a catastrophic military crisis. Hitler stepped in and took personal command. His intervention was decisive and he later boasted, “That we overcame this winter and are today in a position again to proceed victoriously… is solely attributable to the bravery of the soldiers at the front and my firm will to hold out…”`,
            },
          ]}
          mode="VERTICAL"
        />
      </div>
    </>
  );
}
