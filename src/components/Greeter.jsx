// export default function Greeter(props) {
//     return <h1>Hi there, {props.person}!</h1>
// }

//destructre the attribute you want from the props object like so:

export default function Greeter({ person="Everyone", from="Anonymous" }) {
    return (
        <>
        <h1>Hi there, {person}!</h1>
        <h2>-{from}</h2>
        </>  
    );
}