import * as LucideIcons from 'lucide-react';

interface IconProps{
    name: string
}


export default function Icon({name}:IconProps){
    //acesso todos os icons, mas só o que foi passado como props 
    const LucideIcon = (LucideIcons as any)[name] 
    
    if(!LucideIcon) return <LucideIcons.Ban color='red'/>
    
    return(
        <LucideIcon/>
    )
}