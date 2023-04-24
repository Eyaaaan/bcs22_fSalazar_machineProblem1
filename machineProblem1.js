// ITCS227 Source Code Template for 2T AY 2022-2023

/*
	Program: 	Computation of Grades using Function
	Programmer: Francis Ian Salazar
	Section: 	BCS22
	Start Date: April 17, 2023
	End Date: 	April 24, 2023
*/

let student_Table = [];

for (i = 0; i<5; i++){

function containsNumber(str_Check){
	return /\d/.test(str_Check);
}
	let sName = prompt(`Enter the name of the student: `);
	while(containsNumber(sName) == true || sName == ""){
		sName = prompt(`Please input a valid name! Enter the name of the student: `)
	}

	let eA = []; 
	let sA = [];
	let mExamGrade = 0;

	function enablingAssessment(){
		for (let i=0; i<5; i++){
			let temp = parseInt(prompt(`Enter enabling assessment ${i+1}: `));
			innerloop:while(isNaN(temp) || temp < 0 || temp > 100){
				temp = parseInt(prompt(`Invalid Input! Please enter a number. Enter enabling assessment ${i+1}: `));
				if (false){ 
					break innerloop;
				}
			}
			eA.push(temp);
		}
	}

	function summativeAssessment(){
		for (let i=0; i<3; i++){
			let temp = parseInt(prompt(`Enter summative assessment ${i+1}: `));
			innerloop:while(isNaN(temp) || temp < 0 || temp > 100){
				temp = parseInt(prompt(`Invalid Input! Please enter a number. Enter summative assessment ${i+1}: `));
				if (false){ 
					break innerloop;
				}
			}
			sA.push(temp);
		}
	}

	enablingAssessment();
	summativeAssessment();
	mExamGrade = (parseInt(prompt(`Enter major exam grade: `)));

	let ave_eA = 0
	for (let y of eA){
		ave_eA += y;
	}	
		ave_eA = ave_eA / 5 ;
	let ave_sA = 0
	for (let y of sA){
		ave_sA += y;
	}
		ave_sA = ave_sA / 3;

	let finGradeScore = (ave_eA * 0.3) + (ave_sA * 0.3) + (mExamGrade * 0.4);

	student_Table.push({"Name of Student: ": sName,
		"Class Participation: ": ave_eA.toFixed(2),
		"Summative Assessment: ": ave_sA.toFixed(2),
		"Exam Grade: ": mExamGrade.toFixed(2),
		"Grade Score: ": finGradeScore.toFixed(2),
		"Letter Grade: ": computeLetterGrade(finGradeScore)
	});

	function computeLetterGrade(finGradeScore) {
		if(finGradeScore >= 90){
			return "A";
		} else if (finGradeScore >= 80) {
			return "B";
		} else if (finGradeScore >= 70) {
			return "C";
		} else if (finGradeScore >= 60) {
			return "D";
		} else {
			return "F";
		}
	}
}

	console.table(student_Table);