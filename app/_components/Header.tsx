import { buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import { Githubicon } from "../icons/Githubicon"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LinkedInicon } from "../icons/LinkedInicon"


export const Header = () => {
    return (
       <header className="sticky top-0 py-4">
        <Section className="flex items-baseline">
        <h1 className="text-xl font-bold texte-primary">Martin Ouedraogo</h1>
        <div className="flex-1"/>
        <ul className="flex items-center gap-2">
            <Link
             href={"https://github.com/Malikoush"} 
            className={cn(buttonVariants({variant:"outline"}), "size-6 p-0")}
            >
            
                <Githubicon size={16} className="text-foreground" />
                </Link>

                <Link
             href={"https://linkedin.com/in/martin-ouedraogo-213a34229"} 
            className={cn(buttonVariants({variant:"outline"}), "size-6 p-0")}
            >
            
                <LinkedInicon size={16} className="text-foreground" />
                </Link>
                
        </ul>
          
        </Section>

       </header>
    )
}