
function main(){
    renderHeaders();
    hide_biolong();
    setPicByIndex(1);
    //setRandomProfilePic();
    setBioEventListener();
    setCrazyEventListener();
}

function renderHeaders(){
    var element =  document.getElementById("myname");
    var groundtruth = element.innerHTML;
    cryptorender(element, 0, groundtruth);
    
    var element2 = document.getElementById("mytitle");
    var groundtruth2 = element2.innerHTML;
    cryptorender(element2, 0, groundtruth2);
    
    var element3 = document.getElementById("mytitle2");
    var groundtruth3 = element3.innerHTML;
    cryptorender(element3, 0, groundtruth3);
}

function cryptorender(element, timestep, groundtruth){
    if (timestep < 6){
        var ascii_low = 174;
        let ascii_high = 255;
        var random_string = "";
        var random_ascii;
        
        random_string = "";
        for (var i = 0; i< groundtruth.length;i++){
            random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);
            random_string+= String.fromCharCode(random_ascii);
        }
        element.innerHTML = random_string;
        timestep += 1;
        console.log(timestep);
        setTimeout(cryptorender.bind(null, element, timestep, groundtruth), 80);
    }
    else{
        element.innerHTML=groundtruth;
    }
}
function setPicByIndex(index){
    var img = document.getElementById("propic1");
    img.src = `profile_pic${index}.jpg`;
    img.id  = `propic${index}`;
}

function setRandomProfilePic(){
    var img = document.getElementById("propic1");
    var random = Math.floor(Math.random()*2)+1;
    img.src = `profile_pic${random}.jpg`;
    img.id = `propic${random}`;
}

function setBioEventListener(){
    document.getElementById("longer").addEventListener("click", bioElongator);
}

function bioElongator(){
    console.log("Button pressed!");
    // minimize 
    document.getElementById("longer").style.display="none";
    document.getElementById("biolong").style.display="block";
}

function hide_biolong(){
    document.getElementById("biolong").style.display="none";
}

function setCrazyEventListener(){
    document.getElementById("purple-toggler").addEventListener("change", getCrazy);
}

function getCrazy(){
    var checkbox = document.getElementById("purple-toggler");
    if (checkbox.checked){
        $console.log("getting crazy");
    }
    setPicByIndex(2);
    document.getElementById("purple_audio").play();
    var bkColor = document.body.style.backgroundColor;
    flashPurple(0, bkColor);
}

function flashPurple(counter, bkColor){
    if (!document.getElementById("purple_audio").paused){// if (counter < 11000){
        var purples = ['#3c1361', '#52307c', '#663a82', '#7c5295', '#b491c8', '#bca0dc'];
        var index = Math.floor(Math.random()*purples.length)+1;
        document.body.style.backgroundColor = purples[index];
        counter++;    
        setTimeout(flashPurple.bind(null, counter, bkColor), 15);
    }
    else{
        document.body.style.background = bkColor;
    }
}

main();
