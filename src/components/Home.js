import React from "react";
import Fox from "../utils/Fox.jpeg";
import Lion from "../utils/Lion.png";
import Panda from "../utils/Panda.jpeg";
import Otter from "../utils/Otter.png"
import {animals} from "../utils/animals.js"

function Home(){

function imageClick(animals){
return( 
    <div>
    <h2>{animals.name}</h2>
    <p>{animals.description}</p>
    <h5>Strengths: {animals.strengths}</h5>
    <h5>Weaknesses: {animals.weaknesses}</h5>
    </div>
)
}

    return(
    <section>
        <article>
            <h2> Why use the Grouping Tool ?</h2>
        <p>
            When it comes to working in groups in a classroom, most teacher know that grouping the students might be the biggest challenge.
            So how can we make sure that with all the different temperament profiles in a classroom, the groups we make will work well together?
            
            By using the Grouping Tool, an app developed based on Dr. Gary Smalley and Dr. John Trent's studies. 
            They base their temperaments around animal characteristics. 
            Not only are these entertaining but they are very easy for children to grasp as well. 
        </p>
        </article>

        <aside>
            <h3> How does it work? </h3>
            <p> First, have your students complete the <a href = "http://localhost:3000/newForm">"New Student"</a> form.
            Once they do, their name will appear in your student list, along side the picture of the animal that matches their personality type.
            Every animal has its strengths and weaknesses, but they all compliment each other if working in a group made of one each !
            </p>
            <img className="images-Home"
            src = {Lion} />
            <img className="images-Home"
            src = {Otter}/>
            <img className="images-Home"
            src = {Panda}/>
            <img className="images-Home"
            src = {Fox}/>

        </aside>
    </section>
    )
}

export default Home;