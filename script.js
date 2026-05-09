const fullMessage = `Anyways, Peter, don’t feel pressured, okay? I know you don’t like me, and I’m not asking you to. I also know na hindi mo pa ako ganun kakilala because you met me during a lost and messy phase of my life.

Honestly, I’m disappointed in myself kasi maling version ko yung naipakita ko sa’yo. I know I’m strong, independent, and capable — someone who can stand beside you toe-to-toe, but also stand on my own.

I just hope that, with time, you’ll get to know the real me — the confident, collected, and persistent version of myself. Especially sa business, I’ll do my best and make sure maayos yung part ko. You can count on me.

I’m not expecting you to like me. I just want the chance for you to know who I really am, para makita mo rin yung side ko na hindi mo pa nakikita before, and somehow mabawasan din yung disappointment at hiya ko sa sarili ko.

No pressure at all. I just hope you’ll see me beyond that phase of my life. I know growth takes time, but I’m working on becoming the person I know I can be.

Also, I’m really happy na nakinig ka sa’kin last night — thank you for the hugs, comfort, and even for cooking food for me. I really appreciated it.`;

function unlock(){

    if(document.getElementById("password").value.toLowerCase() === "peter"){

        document.getElementById("puzzleBox").style.display="none";
        document.getElementById("message").style.display="block";

        document.getElementById("titleText").innerText =
        "📄 The Letter is Now Opened";

        typeText(0);

    } else {
        document.getElementById("password").classList.add("shake");
        setTimeout(()=>document.getElementById("password").classList.remove("shake"),300);
    }
}

/* typing + sound */
function typeText(i){

    const signature = document.getElementById("signature");

    if(i < fullMessage.length){

        document.getElementById("typedText").innerHTML += fullMessage.charAt(i);

        setTimeout(()=>typeText(i+1),18);

    } else {

        setTimeout(()=>{
            signature.style.opacity = "1";
            signature.style.transform = "translateY(0)";
        },700);
    }
}
