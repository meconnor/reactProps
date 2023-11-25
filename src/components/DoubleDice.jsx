//THIS METHOD IS BETTER IF YOU ONLY WANT TO DISPLAY 'YOU WIN!' OTHERWISE DISPLAY NO H2
//BC WE DONT WANT EMPTY H2S SITTING AROUND IN OUR HTML IT THROWS OFF THE LAYOUT OF THE WEB PAGE

export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const isWinner = num1 === num2;
    //showing how to use inline dynamic component styles
    const styles = { color: num1 === num2 ? "green" : "red"};

    return(
        <div className="DoubleDice" style={styles}>
            <h2>Double Dice</h2>
            {/* {num1 === num2 ? <h3>You win!</h3> : null} */}
            {isWinner && <h3>You win!</h3>}
            <p>Num 1: {num1}</p>
            <p>Num 2: {num2}</p>
        </div>
    )
} 


//IF YOU WANT AN H2 THERE NO MATTER IF THEY WIN OR LOSE:

// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;

//     const result = num1 === num2 ? "You win!" : "You lose :("
    
//     return(
//         <div>
//             <h2>{result}</h2>
//             <p>Num 1: {num1}</p>
//             <p>Num 2: {num2}</p>
//         </div>
//     )
// }