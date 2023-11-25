function handleClick () {
    console.log("Clicked the Button!");
}
function handleHover() {
    console.log("Hovered!")
}
export default function Clicker() {
    return (
        <div>
            <p onMouseOver={handleHover}>Hover over me!</p>
            <button onClick={handleClick}>Clcik me!</button>
        </div>
    )
}