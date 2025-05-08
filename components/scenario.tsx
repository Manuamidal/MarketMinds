interface scen{
    name:string,
    id:number
}

export default function Scenario(props:scen){
    
    return(
        <>
        <h1>{props.name}</h1>
        <h2>{props.id}</h2>
        </>
    )
}