

export default function ClickerTwo({message, buttonText}) {
    const handleClick = () => {
        alert(message);
    }
     return (
        <div>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}