
const row1_col1 = document.getElementById("row1-col1");
const row1_col2 = document.getElementById("row1-col2");
const row1_col3 = document.getElementById("row1-col3");

const row2_col1 = document.getElementById("row2-col1");
const row2_col2 = document.getElementById("row2-col2");
const row2_col3 = document.getElementById("row2-col3");

const row3_col1 = document.getElementById("row3-col1");
const row3_col2 = document.getElementById("row3-col2");
const row3_col3 = document.getElementById("row3-col3");


const button = document.querySelectorAll('div.col-4 > button');

const gotoMenu = document.getElementById("gotoMenu");
const restartButton = document.getElementById("restartButton")
const user = document.getElementById("user");
const computer = document.getElementById("computer");
const winner = document.getElementById("winner");
const color1 = '#007bff';
const color2 = '#000000';

let turn = true;
let tic_tac = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
let colum = {"1": [], "2": [], "3": []};
let crosses_right = [];
let crosses_left = [];
let i = 0;
let j = 2;
let tic = 0;

const userTurn = (users, colors) => {
	users.style.color = colors;	
} 




const initialstate = () => {
	tic_tac = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
	/*colum = [];*/
	crosses_right = [];
	crosses_left = [];
	i = 0;
	j =2;
	turn= true;
	userTurn(user,color1);
	userTurn(computer,color2);
	tic =0;
} 

initialstate()


const rule1 = (rows) => {
	if (rows.every(row => row === rows[0] && row!= 0)) {
		(turn === true) ?  winner.innerHTML = "PLAYER 2 WINS" : winner.innerHTML = "PLAYER 1 WINS";
		$("#myModal").modal();
		button.forEach(restart);
		initialstate()
		

	}
}


const rule2 = (rows) => {

	for (k=0;k<3;k++) {
		const position = String(k+1);
		colum[position].push(rows[k]);
		if (colum[position].length > 3) {
			colum[position].splice(0,3);
		}
	}		
}

const rule3 = (rows) => {
	
	crosses_right.push(rows[i]);
	if (crosses_right.length > 3) {
		crosses_right.splice(0,3);
		i= 0;
	}
	i++;
}
const rule4 = (rows) => {
	crosses_left.push(rows[j]);
	if (crosses_left.length > 3) {
		crosses_left.splice(0,3);
		j= 2;
	}
	j--;
}
const rules = () => {
	i=0;
	j=2;
	tic_tac.forEach(rule1);
	tic_tac.forEach(rule2);
	for (iterator=0;iterator<3;iterator++) {
		rule1(colum[String(iterator+1)]);
	}
	tic_tac.forEach(rule3);
	rule1(crosses_right);
	tic_tac.forEach(rule4);
	rule1(crosses_left);	
}




clickXO = () => {
	
	const button = this.document.activeElement;
	const position_row = button.id[3]-1;
	const position_col = button.id[8]-1;
	if (button.value === '') {
		if ( turn === true) {
			button.value = 'X';
			button.innerHTML = 'X';
			tic_tac[position_row][position_col]='X';
			turn = false;
			userTurn(user,color2);
			userTurn(computer,color1)
		} else {
			button.value = 'O';
			button.innerHTML = 'O';
			tic_tac[position_row][position_col]="O";
			turn = true;
			userTurn(user,color1);
			userTurn(computer,color2);
		}
		rules()
		tic++;
		
	}	 else {
		winner.innerHTML = "YA JUGASTE ALLI";
		$("#myModal").modal();
	}
	if (tic > 8) {
			winner.innerHTML = "TIE";
			$("#myModal").modal();
			again();
	} 
	
	
}

const router = () => {
	location.href = "../../index.html";
}


gotoMenu.addEventListener("click", router);

const restart = (element) => {
	element.value = '';
	element.innerHTML= '';

}

const again = () => {
	button.forEach(restart); 
	initialstate();
}

restartButton.addEventListener("click",again);



row1_col1.addEventListener("click", clickXO );
row1_col2.addEventListener("click", clickXO );
row1_col3.addEventListener("click", clickXO );

row2_col1.addEventListener("click", clickXO );
row2_col2.addEventListener("click", clickXO );
row2_col3.addEventListener("click", clickXO );

row3_col1.addEventListener("click", clickXO );
row3_col2.addEventListener("click", clickXO );
row3_col3.addEventListener("click", clickXO );