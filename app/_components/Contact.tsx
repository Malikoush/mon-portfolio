
import { Badge } from "@/components/ui/badge";
import { Section } from "./Section"

import { ContactCard } from "./ContactCard";



export const Contact = () => {
    return <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Contacter moi</Badge>
         <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Je serais ravie de travailler avec vous. 
    </h2>
    <div className="flex max-md:flex-col w-full gap-4">
    <ContactCard  image="https://img.freepik.com/photos-premium/fond-carre-rouge-uni-espace-pour-votre-image-votre-texte_7954-37579.jpg"
                mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqarWhAjA3PjIx932qC3xziJiMJlaWphKNouCYT3N505zc2ZrXZ_OJAoOkxaC2D-R5fBg&usqp=CAU" 
                name="toto"
                url="https://www.imaginarycloud.com/blog/tech-stack-software-development"
                description="toto"/>
    <ContactCard  image="https://img.freepik.com/photos-premium/fond-carre-rouge-uni-espace-pour-votre-image-votre-texte_7954-37579.jpg"
                mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqarWhAjA3PjIx932qC3xziJiMJlaWphKNouCYT3N505zc2ZrXZ_OJAoOkxaC2D-R5fBg&usqp=CAU" 
                name="toto"
                url="https://www.imaginarycloud.com/blog/tech-stack-software-development"
                description="toto"/>
    <ContactCard  image="https://img.freepik.com/photos-premium/fond-carre-rouge-uni-espace-pour-votre-image-votre-texte_7954-37579.jpg"
                mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqarWhAjA3PjIx932qC3xziJiMJlaWphKNouCYT3N505zc2ZrXZ_OJAoOkxaC2D-R5fBg&usqp=CAU" 
                name="toto"
                url="https://www.imaginarycloud.com/blog/tech-stack-software-development"
                description="toto"/>
          </div>
     
    </Section>
        ;
};