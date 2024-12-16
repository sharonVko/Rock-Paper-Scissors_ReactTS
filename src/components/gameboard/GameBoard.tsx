import { useState } from "react";
import"./GameBoard.css"


const GameBoard:React.FC = () => {


    const [userChoice, setUserChoice] = useState<string|null>(null);
    const [computerChoice, setComputerChoice] = useState<string|null>(null);
    const [result, setResult] = useState<string>("");

    const choiceOptions = ["Rock", "Paper","Scissors"];

    const getUserChoice =(choice:string) => {
        setUserChoice(choice); // saving the users selection in the state
        
        const getComputerChoice =choiceOptions[Math.floor(Math.random() * choiceOptions.length)]
        setComputerChoice(getComputerChoice);

        identifyWinner(choice, getComputerChoice); // call function to determine winner
    };

    const identifyWinner = (user:string, computer:string) => {
        if(user === computer) {
            setResult("It's a tie!"); 
        }else if (
            (user === "Rock" && computer === "Scissors") ||
            (user === "Paper" && computer === "Rock") ||
            (user === "Scissors" && computer === "Paper")

       ) {
        setResult("Congrats! You win!");

       }else {
        setResult("Bummer! You lose!");
       }
            
    };
       
    
    
    
    //- function to reset game
    const resetGame = () => {
        setUserChoice(null);
        setComputerChoice(null);
        setResult("")
    };


    return ( 
        <section className="game-board">
            <h3>Make your move!</h3>
          <div className="btn-choice-container" >
            <button type="button" onClick={() => getUserChoice("Rock")}>
                <img src="/SVG/rock.png" alt="🪨" />
                </button>
            <button type="button" onClick={() => getUserChoice("Paper")}>
                <img src="/SVG/paper.png" alt="📄" />
                </button>
            <button type="button" onClick={() => getUserChoice("Scissors")}>
                <img src="/SVG/scissors.png" alt="✂️" />
                </button>
            </div> 
            <div className="result-display">
                <p>You : {userChoice || "____"}</p>
                <p>Computer : {computerChoice || "____"} </p>
                <p>Result : {result || "____"} </p>
                </div> 
                <button onClick={resetGame} type="button">RESET</button>
        </section>
     );
}
 
export default GameBoard;