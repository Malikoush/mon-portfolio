import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";


export const ContactCard = (props:{
    image : string,
    mediumImage:string,
    name:string,
    description:string,
    url:string
}) => {
    return (
        <Link href={props.url} className="w-full" >
        <Card className="p-3  bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-6">
            <div className="relative">
                <img className="w-10 h-10 rounded-full object-contain " src={props.image} alt={props.name} />
                <img className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain" src={props.mediumImage} alt={props.name} />
            </div>
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">{props.name}</p>
                </div>
                <p className="text-lg text-muted-foreground">{props.description} </p>
            </div>
            < ArrowUpRight className="group-hover:translate-x-2 mr-3 group-hover:-translate-y-2 transition-transform" size={16}/>
        </Card>
        </Link>
    )
};
