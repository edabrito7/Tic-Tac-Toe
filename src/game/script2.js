const row1_col1 = document.getElementById("row1-col1");
const row1_col2 = document.getElementById("row1-col2");
const row1_col3 = document.getElementById("row1-col3");

const row2_col1 = document.getElementById("row2-col1");
const row2_col2 = document.getElementById("row2-col2");
const row2_col3 = document.getElementById("row2-col3");

const row3_col1 = document.getElementById("row3-col1");
const row3_col2 = document.getElementById("row3-col2");
const row3_col3 = document.getElementById("row3-col3");


const gotoMenu = document.getElementById("gotoMenu");
const user = document.getElementById("user");
const computer = document.getElementById("computer");
const color1 = '#007bff';
const color2 = '#000000';

let turn = true;
let tic_tac = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
let colum = [];
let crosses_right = [];
let crosses_left = [];
let i = 0;
let j = 2;



const rule1 = (rows) => {
	if (rows.every(row => row === rows[0] && row!= 0)) {
		alert("You WIN!")
	}
}


const rule2 = (rows) => {
	colum.push(rows[0]);
	if (colum.length > 3) {
		colum.splice(0,3);
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
	rule1(colum);
	tic_tac.forEach(rule3);
	rule1(crosses_right);
	tic_tac.forEach(rule4);
	rule1(crosses_left);

	
}


const userTurn = (users, colors) => {
	users.style.color = colors;
	
} 

userTurn(user,color1);
userTurn(computer,color2);

clickX = () => {
	
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
	} else {
		alert("Ya se jugo alli");
	}
	
	
}

const router = () => {
	location.href = "../template/index.html";
}


gotoMenu.addEventListener("click", router);




row1_col1.addEventListener("click", clickX );
row1_col2.addEventListener("click", clickX );
row1_col3.addEventListener("click", clickX );

row2_col1.addEventListener("click", clickX );
row2_col2.addEventListener("click", clickX );
row2_col3.addEventListener("click", clickX );

row3_col1.addEventListener("click", clickX );
row3_col2.addEventListener("click", clickX );
row3_col3.addEventListener("click", clickX );