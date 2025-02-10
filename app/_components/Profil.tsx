import { ComponentPropsWithoutRef } from "react"
import { Section } from "./Section"
import { cn } from "@/lib/utils"

import Link from "next/link"
import { TroisFicon } from "../icons/TroisFicon"


const Code = ({className,...props} : ComponentPropsWithoutRef<"span">) => {
    return <span className={cn("bg-accent/40 hover:bg-accent/60 transition-color border-accent border px-1 py-0.5 rounded-sm text-primary font-mono",className)} {...props}/>
}

export const Profil = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full flex flex-col  gap-2">
                <h2 className="font-caption font-bold text-5xl " >Martin Ouedraogo</h2>
                <h3 className="font-caption text-3xl text-primary">Étudiant en ingénierie du logiciel</h3>
                <p>Concepteur Développeur en alternance chez {" "}
                    <Link href={"https://www.groupe3f.fr/"}>
                     <Code className="inline-flex items-center gap-1"><TroisFicon size={20} className="inline"/> Immobilière 3F</Code>
                     </Link> 
                      | Étudiant à l&apos;ESIEA 

Passionné par le développement et la conception de solutions digitales, j’allie théorie et pratique en alternance chez Immobilière 3F</p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto ">
                <img src="https://media.licdn.com/dms/image/v2/D4E03AQHCxCUw8WNzYg/profile-displayphoto-shrink_400_400/B4EZTa3OrvGgAg-/0/1738838699246?e=1744243200&v=beta&t=Sx1dvtUV-OV1NWOTlBlxoQkHjarMJZIHGYlZMjV4JUA"
               className="w-full h-full object-cover rounded-full max-md:w-56"
                 alt="photo martin" />
            </div>
        
        
        </Section>
    )
}