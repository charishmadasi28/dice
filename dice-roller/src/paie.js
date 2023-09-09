import { useEffect, useState } from "react";

export default function Play(){

    const[value , setvalue] = useState(0)
    const array = ["click the dice to start playing ",
    "1. Put your tongue out cite a poem",
     "2. Go and hug 5 trees ",
      "3. Fill up your mouth with water and sing a song until someone guesses the song", 
      "4. Asanas",
       "5. Close your mouth and spell A for 10 sec",
        "6. Call your mom or dad and say I Love You"]

      useEffect(()=>{
       if(localStorage.games_played >111){
      document.getElementById("Dice").disabled= true;
      document.getElementById("images").hidden = true;
      document.getElementById("logo").hidden = false;
          }
      },[])
    const clicked = ()=>{
        setvalue(Math.floor(Math.random() * (6 - 0)) + 1);
        document.getElementById("Dice").disabled= true;
        document.getElementById("follow").hidden= false;
       
        localStorage.setItem("games_played",(!localStorage.games_played)? parseInt(1):parseInt(localStorage.games_played + 1));
      
    }
    const follow = ()=>{
        document.getElementById("follow").hidden= true;
        localStorage.setItem("games_played", parseInt(localStorage.games_played + 1));
    }
    return(
        <>
        <div className="container border-main">
            <h1 className="text-center display-3">
                {(localStorage.games_played>111)?"you already played the game get your friend to play":array[value]}
            </h1>
            <div className="container text-center">
            <button onClick={clicked} id="Dice" >
                <img src="https://dice-game-one-xi.vercel.app/dice.gif" alt="dice"></img>
                </button>
            </div>
            <div className=" m-5">
                
            <a href="https://www.instagram.com/paie_cell_srkr/" className="text-danger"> <button onClick={follow} id="follow" className="btn btn-primary" hidden>
             <h4><i class="bi bi-instagram"></i> follow us on instagram to get one more chance to play</h4> 
            </button></a>

            </div>

           
            <div className="images" id="images">
              <div className="d-flex flex-wrap">
                <img  src="https://i0.wp.com/meditativemind.org/wp-content/uploads/2018/09/Easy_yoga_Asanas_to_de-stress_for_beginners.jpg" alt="tree pose"/>
                <img  src="https://femina.wwmindia.com/content/2020/may/sukhasana51589259840.jpg" alt="sukhasana"/>
                <img  src="https://static-bebeautiful-in.unileverservices.com/5-easy-yoga-asanas-for-glowing-skin_3.jpg" alt="trikonasana"/>
                <img  src="https://i0.wp.com/meditativemind.org/wp-content/uploads/2018/09/3-image.jpeg" alt="pose4"/>
                <img  src="https://spandanspondylosis.com/wp-content/uploads/2023/02/Untitled-1-1024x691.png" alt="pose5"/>
                <img src="https://store.jiva.com/wp-content/uploads/2019/05/Disease_-_41._Yoga_Poses_To_Keep_1.jpg" alt="poornapavanmukhtaasan"/>
              </div>
              
            </div>
            <div id="logo" className="text-center" hidden>
                <marquee className="text-info">Attend daily morning yoga timing (6.15am to 7.30 am)  <i class="bi bi-emoji-smile text-warning"> keep smiling</i></marquee>
                <img src="favicon.ico"/>
              </div>

         



        </div>
        
        
        </>
    )
}