//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const avatar = document.querySelector(".avatar");
const exit_btn = document.getElementById("info_box").querySelector(".buttons .quit");
const continue_btn = document.getElementById("info_box").querySelector(".buttons .restart");


const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    //info_box.classList.add("activeInfo");
	avatar.classList.add("activeAvatar");
	avatar.style.display = "block";//show info box
    start_btn.style.display = "none";
    //document.getElementById("quiz_box").classList.add("activeQuiz");
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    document.getElementById("info_box").classList.remove("activeInfo"); //hide info box
	start_btn.style.display = "block";
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    document.getElementById("info_box").classList.remove("activeInfo"); //hide info box
    document.getElementById("level_1F").classList.add("activeQuiz"); //show quiz box
	document.getElementById("level_1").classList.add("activeQuiz"); //show quiz box
}

let counter;
let counterLine;
let widthValue = 0;
let gender="male";
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    widthValue = 0;
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function playMusicCorrect(){
  var music = new Audio('music/correct.mp3');
  music.play();
  }
 function playMusicFalse(){
  var music = new Audio('music/false.mp3');
  music.play();
  }
  
function back(id){
hide(id);
if(id=="quiz_box2"){
document.getElementById("quiz_box").classList.add("activeQuiz");
}
else if(id=="quiz_box3"){
document.getElementById("level_2").classList.add("activeQuiz");
}
else if(id=="quiz_box4"){
document.getElementById("quiz_box3").classList.add("activeQuiz");
}
else if(id=="quiz_box5"){
document.getElementById("quiz_box4").classList.add("activeQuiz");
}
else if(id=="quiz_box6"){
document.getElementById("level_3").classList.add("activeQuiz");
}
else if(id=="quiz_box7"){
document.getElementById("quiz_box6").classList.add("activeQuiz");
}
else if(id=="quiz_box8"){
document.getElementById("quiz_box7").classList.add("activeQuiz");
}
else if(id=="quiz_box9"){
document.getElementById("level_3").classList.add("activeQuiz");
}
else if(id=="quiz_box10"){
document.getElementById("level_4").classList.add("activeQuiz");
}
else if(id=="quiz_box11"){
document.getElementById("level_5").classList.add("activeQuiz");
}
else if(id=="quiz_box12"){
document.getElementById("level_6").classList.add("activeQuiz");
}
else if(id=="quiz_box13"){
document.getElementById("level_7").classList.add("activeQuiz");
}
else if(id=="quiz_box14"){
document.getElementById("level_8").classList.add("activeQuiz");
}
else if(id=="quiz_box15"){
document.getElementById("level_9").classList.add("activeQuiz");
}
else if(id=="quiz_box16"){
document.getElementById("level_9").classList.add("activeQuiz");
}
else if(id=="quiz_box17"){
document.getElementById("level_10").classList.add("activeQuiz");
}
else if(id=="quiz_box18"){
document.getElementById("level_11").classList.add("activeQuiz");
}
else if(id=="quiz_box19"){
document.getElementById("level_11").classList.add("activeQuiz");
}
else if(id=="quiz_box20"){
document.getElementById("level_12").classList.add("activeQuiz");
}


//Female:
else if(id=="quiz_box2F"){
document.getElementById("quiz_box").classList.add("activeQuiz");
}
else if(id=="quiz_box3F"){
document.getElementById("level_2F").classList.add("activeQuiz");
}
else if(id=="quiz_box4F"){
document.getElementById("quiz_box3F").classList.add("activeQuiz");
}
else if(id=="quiz_box5F"){
document.getElementById("quiz_box4F").classList.add("activeQuiz");
}
else if(id=="quiz_box6F"){
document.getElementById("level_3F").classList.add("activeQuiz");
}
else if(id=="quiz_box7F"){
document.getElementById("quiz_box6F").classList.add("activeQuiz");
}
else if(id=="quiz_box8F"){
document.getElementById("quiz_box7F").classList.add("activeQuiz");
}
else if(id=="quiz_box9F"){
document.getElementById("level_3F").classList.add("activeQuiz");
}
else if(id=="quiz_box10F"){
document.getElementById("level_4F").classList.add("activeQuiz");
}
else if(id=="quiz_box11F"){
document.getElementById("level_5F").classList.add("activeQuiz");
}
else if(id=="quiz_box12F"){
document.getElementById("level_6F").classList.add("activeQuiz");
}
else if(id=="quiz_box13F"){
document.getElementById("level_7F").classList.add("activeQuiz");
}
else if(id=="quiz_box14F"){
document.getElementById("level_8F").classList.add("activeQuiz");
}
else if(id=="quiz_box15F"){
document.getElementById("level_9F").classList.add("activeQuiz");
}
else if(id=="quiz_box16F"){
document.getElementById("level_9F").classList.add("activeQuiz");
}
else if(id=="quiz_box17F"){
document.getElementById("level_10F").classList.add("activeQuiz");
}
else if(id=="quiz_box18F"){
document.getElementById("level_11F").classList.add("activeQuiz");
}
else if(id=="quiz_box19F"){
document.getElementById("level_11F").classList.add("activeQuiz");
}
else if(id=="quiz_box20F"){
document.getElementById("level_12F").classList.add("activeQuiz");
}
}

function hide(id){
     document.getElementById(id).classList.remove("activeQuiz"); 
}
   
function hideAll(){
	
	hide('level_1');
	hide('level_2');
	hide('level_3');
	hide('level_4');
	hide('level_5');
	hide('level_6');
	hide('level_7');
	hide('level_8');
	hide('level_9');
	hide('level_10');
	hide('level_11');
	hide('level_12');
	
    hide('quiz_box3');
	hide('quiz_box6');
	hide('quiz_box9');
	hide('quiz_box10');
	hide('quiz_box11');
	hide('quiz_box12');
	hide('quiz_box13');
	hide('quiz_box14');
	hide('quiz_box15');
	hide('quiz_box16');
	hide('quiz_box17');
	hide('quiz_box18');
	hide('quiz_box19');
	hide('quiz_box20');
	
	hide('level_1F');
	hide('level_2F');
	hide('level_3F');
	hide('level_4F');
	hide('level_5F');
	hide('level_6F');
	hide('level_7F');
	hide('level_8F');
	hide('level_9F');
	hide('level_10F');
	hide('level_11F');
	hide('level_12F');
	
    hide('quiz_box3F');
	hide('quiz_box6F');
	hide('quiz_box9F');
	hide('quiz_box10F');
	hide('quiz_box11F');
	hide('quiz_box12F');
	hide('quiz_box13F');
	hide('quiz_box14F');
	hide('quiz_box15F');
	hide('quiz_box16F');
	hide('quiz_box17F');
	hide('quiz_box18F');
	hide('quiz_box19F');
	hide('quiz_box20F');
}
function writeName(gen){
	//const name=document.getElementById('name').value;
document.getElementById("info_box").classList.add("activeInfo");
document.getElementById("avatar").classList.remove("activeAvatar"); 

if(gen=="female"){
	
	 document.getElementById('quiz-formFemale').style.display = 'block';
	 document.getElementById('quiz-form').style.display = 'none';
}
else{
	document.getElementById('quiz-form').style.display = 'block';
	document.getElementById('quiz-formFemale').style.display = 'none';
}

const infoText = document.getElementById("info_box").querySelector(".info_text");

    let infoTag = "<span>Once upon a time, there lived a young boy with his mother on the outskirts of a small and peaceful village called Tomako. On a clear day early in the summer, Dalia, Majd’s mother, was preparing a cake for Majd’s birthday when the mail arrived with a bunch of letters. Majd sifted through the advertisements to pick up one special envelope addressed to him by name. Dalia asked Majd to open the envelope carefully and read it out loud. Majd did so, and read:</br>"+ 
"'My beloved Majd,"+
"It has been two years since we last celebrated your birthday together. You, your mom, and I. I am getting my work finished and can’t wait to see you both again. I still have that wool necklace that you made for me to keep me safe. I wear it all the time. Unfortunately, I am not going to make it in time for your birthday. However, I have a gift for you stashed in a chest under ‘The Sheereo Cliffs’. To get there, follow the path drawn in the map at the back of this letter. This will be a nice little adventure for you as I know you love wondering around through nature. I hope you find the gift and return to your mother safely using the skills you learned at school. And I look forward to reunite with you both soon.</br>"+
"Your yearning father,<br>"+
"Sami'<br>"+
"Majd flipped the letter with excitement to see the map his dad has drawn for him. Then, looking at Dalia she saw a smile on his mother face before she said ‘Better get ready if you want to start your journey early tomorrow’. Majd jumped to his room, packed some camping gear and necessities while in her mind already thinking of his father and the gift that awaits at the end of the adventure.</span>";
 
     let infoTagF = "<span>Once upon a time, there lived a young girl with his mother on the outskirts of a small and peaceful village called Tomako. On a clear day early in the summer, Dalia, Majd’s mother, was preparing a cake for Majd’s birthday when the mail arrived with a bunch of letters. Majd sifted through the advertisements to pick up one special envelope addressed to her by name. Dalia asked Majd to open the envelope carefully and read it out loud. Majd did so, and read:</br>"+ 
"'My beloved Majd,"+
"It has been two years since we last celebrated your birthday together. You, your mom, and I. I am getting my work finished and can’t wait to see you both again. I still have that wool necklace that you made for me to keep me safe. I wear it all the time. Unfortunately, I am not going to make it in time for your birthday. However, I have a gift for you stashed in a chest under ‘The Sheereo Cliffs’. To get there, follow the path drawn in the map at the back of this letter. This will be a nice little adventure for you as I know you love wondering around through nature. I hope you find the gift and return to your mother safely using the skills you learned at school. And I look forward to reunite with you both soon.</br>"+
"Your yearning father,<br>"+
"Sami'<br>"+
"Majd flipped the letter with excitement to see the map her dad has drawn for  her. Then, looking at Dalia  she saw a smile on her mother face before she said ‘Better get ready if you want to start your journey early tomorrow’. Majd jumped to her room, packed some camping gear and necessities while in her mind already thinking of  her father and the gift that awaits at the end of the adventure.</span>";
 
if(gen=="female"){
infoText.innerHTML = infoTagF;  //adding new span tag inside score_Text
}
else{
infoText.innerHTML = infoTag;  //adding new span tag inside score_Text
}	

}
	
	
function show(id,name){
    if(name=='#'){
			hideAll();
			document.getElementById(id).classList.add("activeQuiz");
	}
	else{
		const answer=document.querySelector('input[name='+name+']:checked').value;
   
		if(name=='q20'){
			//const answer2=document.querySelector('input[name=q20]:checked').value;
			if(answer=="true"){
			playMusicCorrect();
			showResult();
			}
			else{  
playMusicFalse();			
        //alert("Wrong Answer!");
        }
	}
	else if(name=='q20F'){
			//const answer2=document.querySelector('input[name=q20]:checked').value;
			if(answer=="true"){
			playMusicCorrect();
			showResultF();
			}
			else{     
playMusicFalse();			
        //alert("Wrong Answer!");
        }
	}
	else if(answer=="true"){
        hideAll();
		playMusicCorrect();
		document.getElementById(id).classList.add("activeQuiz"); 
        }
		
    else{   
playMusicFalse();
       // alert("Wrong Answer!");
        }
	}
  }

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
	hideAll();								 // hide all levels
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
	
    let scoreTag = '<span>‘I see you have found it’. Majd turned around to see who said that. He found that it was the mysterious man with the mask and the red sweater. The man then took off his sun glasses then his mask. Majd’s face brightened, he stood up and ran with tears flowing down his and embraced Sami in a passionate hug. While his father held Majd off the ground, he heard his kid whisper to him ‘It was you all along! This is the best gift ever dad’ and Sami wondered which gift Majd meant.</p></span>';
    scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
   
}
function showResultF(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
	hideAll();								 // hide all levels
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
	
    let scoreTag = '<span>‘I see you have found it’. Majd turned around to see who said that. She found that it was the mysterious man with the mask and the red sweater. The man then took off his sun glasses then his mask. Majd’s face brightened, she stood up and ran with tears flowing down her and embraced Sami in a passionate hug. While his father held Majd off the ground, she heard his kid whisper to him ‘It was you all along! This is the best gift ever dad’ and Sami wondered which gift Majd meant.</p></span>';
    scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
   
}