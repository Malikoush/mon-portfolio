
import { Badge } from "@/components/ui/badge";
import { Section } from "./Section"
import { ReactLogo } from "../icons/Reactlogo";



export const Skills = () => {
    return <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
         <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      J&apos;aime travailler avec ... 
    </h2>
    <div className="flex max-md:flex-col gap-4">
    <div>
              <div className="flex flex-col gap-4 mb-2 flex-1">
                 <ReactLogo size={42} className="animate-spin" style={{
                    animationDuration: '10s'
                 }}/>
                 </div>
              <h3 className="text-2xl font-semibold tracking-tight mb-2">React</h3>
              <p className="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
          </div>
          <div>
          <div className=" flex flex-col gap-4 mb-2 flex-1">
                 <ReactLogo size={42} className="animate-spin" style={{
                    animationDuration: '10s'
                 }}/>
                 </div>
              <h3 className="text-2xl font-semibold tracking-tight mb-2">A changer</h3>
              <p className="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
          </div>
          <div>
          <div className="flex flex-col gap-4 mb-2 flex-1">
                 <ReactLogo size={42} className="animate-spin" style={{
                    animationDuration: '10s'
                 }}/>
                 </div>
              <h3 className="text-2xl font-semibold tracking-tight mb-2">A changer</h3>
              <p className="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
          </div>
          </div>
    </Section>
        ;
};