import Link from "next/link";


export type WorkProps = {
    Image: string;
    title: string;
    role: string;
   date : string
    url : string
};

export const WorkProject = (props: WorkProps) => {
    return(
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            
           
            <img src={props.Image} alt={props.title} className="w-10 h-10 object-contain rounded-md"/>
        
            <div>
            <p className="text-lg font-semibold">{props.title}</p>
            <p className="text-lg text-muted-foreground">{props.role} </p>
            </div>
            <div className="ml-auto">
            <p className="text-lg text-muted-foreground">{props.date} </p>   
            </div>
        </Link>
    )
}