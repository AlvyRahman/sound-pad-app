export default function Pad(p)
{   
    const style = {
        backgroundColor: p.color,
    }

    return(
        <button key={p.id} 
        style={style}
        className={p.on ? "on" : undefined}
        onClick={() => p.toggleOn(p.id)}
        >
        </button>
    )
}