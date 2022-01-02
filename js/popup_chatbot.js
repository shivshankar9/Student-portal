const popup = document.querySelector('.popup');
const floatActionBtn = document.querySelector('.float');
const sendMsgBtn = document.querySelector('.submit');
const chatbotArea = document.querySelector('.textarea');
const textInput = document.querySelector('input');
let questions = {"yes":"Have you seen all the functionalities?","yeah":"Good to hear that!, Have you used any of it?",
"yupp":"Glad to hear that, our functionalities are benefitting someone!",
"notyet":"Ahhh! Make use of all available tools and functionalities, in case of further queries mail us. Thank You!",
"nope":"Ahhh! Go ahead and use now, in case you need any help, mail us!",
"no":"You are a pre-registered student, wanna check any information?",
"y":"All the specific information are open to you! Check it now, in case of further queries mail us! Thankyou, for your time!",
"n":"Mail us for further queries. Thankyou for your time!"};
var arr=new Array();
floatActionBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
});

sendMsgBtn.addEventListener('click', ()=>{
    let userText = textInput.value;
    let creatingUserBlock = `<div class='userSideMsg'>
                                <span class="userActualMsg">${userText}</span>
                                <img src="./images/user.png" class="avatar">
                            </div>`;

    chatbotArea.insertAdjacentHTML("beforeend", creatingUserBlock);
    userText=userText.toLowerCase();
    if(questions[userText] && (!arr.includes(userText))){
        let roboText=questions[userText];
        let creatingRoboBlock = `<div class="roboside">
                                        <img src="./images/chatbot.png" class="avatar" alt="">
                                        <span class="robomsg">${roboText}</span>
                                    </div>`;
        chatbotArea.insertAdjacentHTML("beforeend", creatingRoboBlock);
        if(userText=="yes"){
            arr.push("yes");
            arr.push("no");
            document.getElementById('msg').placeholder="Yeah or Nope";     
        }else if(userText=="no"){
            arr.push("yes");
            arr.push("no");
            document.getElementById('msg').placeholder="y or n";   
        }else if(userText == "yeah"){
            arr.push("yeah");
            arr.push("nope");
            document.getElementById('msg').placeholder="yupp or notyet";
        }else if(userText == "nope"){
            arr.push("yeah");
            arr.push("nope");
            document.getElementById('msg').placeholder="";
        }else if(userText == "passed"){
            arr.push("passed");
            arr.push("failed");
            document.getElementById('msg').placeholder="";
        }else if(userText ==  "failed"){
            arr.push("passed");
            arr.push("failed");
            document.getElementById('msg').placeholder="";
        }else if(userText=="y"){
            arr.push("y");
            arr.push("n");
            document.getElementById('msg').placeholder="";
        }else if(userText=="n"){
            arr.push("y");
            arr.push("n");
            document.getElementById('msg').placeholder="";
        }
    }else{
        let roboText="I don't understand you! Please respond as per given texts in chatbox.";
        let creatingRoboBlock = `<div class="roboside">
                                        <img src="./images/chatbot.png" class="avatar" alt="">
                                        <span class="robomsg">${roboText}</span>
                                    </div>`;
        chatbotArea.insertAdjacentHTML("beforeend", creatingRoboBlock);
    }
    textInput.value = '';

});