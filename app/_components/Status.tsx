
import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { ChevronRight, Code, Notebook, Parentheses} from "lucide-react";
import { SideProject, SideProjectProps } from "./SideProject";
import { ContactCard } from "./ContactCard";
import { WorkProject,WorkProps } from "./WorkProject";

export const Status = () => {

    return (
      <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full">
            <Card className=" w-full p-4 flex flex-col  gap-2">
            <p className="text-lg text-muted-foreground">MES PROJETS</p>
            <div className="flex flex-col gap-4">
                {SIDE_PROJECTS.map((project,index)=>(
                    <SideProject 
                    key={index}
                    {...project}                 
                    />
                )
                )}
            </div>
            </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-4 ">
                <Card className="w-full p-4 flex-1">
                <p className="text-lg text-muted-foreground">Expériences</p>
                <div className="flex flex-col gap-4">
                {WORK.map((work,index)=>(
                    <WorkProject 
                    key={index}
                     {...work}                  
                    />
                )
                )}
            </div>
                </Card>
                <Card className="w-full p-4 flex-1 flex flex-col gap-2">
                
                    <p className="text-lg text-muted-foreground">Contact</p>
      
              
                <ContactCard  image="https://img.freepik.com/photos-premium/fond-carre-rouge-uni-espace-pour-votre-image-votre-texte_7954-37579.jpg"
                mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqarWhAjA3PjIx932qC3xziJiMJlaWphKNouCYT3N505zc2ZrXZ_OJAoOkxaC2D-R5fBg&usqp=CAU" 
                name="toto"
                url="https://www.imaginarycloud.com/blog/tech-stack-software-development"
                description="toto"/>
                
                
               
                </Card>
            </div>

        </Section>

    )
};

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Code,
        title: "logo",
        description: "description",
        url: "https://products.aspose.app/words/fr/viewer/svg"
    },
    {
        Logo: Notebook,
        title: "projets",
        description: "description",
        url: "https://products.aspose.app/words/fr/viewer/svg"
    },
    {
        Logo: ChevronRight,
        title: "logo",
        description: "description",
        url: "https://products.aspose.app/words/fr/viewer/svg"
    },
    {
        Logo: Parentheses,
        title: "logo",
        description: "description",
        url: "https://products.aspose.app/words/fr/viewer/svg"
    },
 
]





const WORK: WorkProps[] = [
    {
        Image: "https://img.freepik.com/photos-premium/fond-carre-rouge-uni-espace-pour-votre-image-votre-texte_7954-37579.jpg",
        title: "logo",
        role: "description",
        date: "2022 - Present",
        url: "https://products.aspose.app/words/fr/viewer/svg"
    },
    {
        Image: "https://img.freepik.com/photos-premium/fond-carre-rouge-uni-espace-pour-votre-image-votre-texte_7954-37579.jpg",
        title: "logo",
        role: "description",
        date: "2020 - 2022",
        url: "https://products.aspose.app/words/fr/viewer/svg"
    },
 
 
]

