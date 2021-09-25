

export default function Counter() {

	var
		initialDate,
		currentDate,
		intervalDate,
		cumulativeDate,
		totalDate,
		secondsDisplay,
		minutesDisplay,
		hoursDisplay,
		totalDisplay,
		getHours,
		getMinutes,
		getSeconds,
		running = false,
		beginNewInterval = function () {
			initialDate = new Date();
			currentDate = new Date();
			intervalDate = new Date(0);
		},
		runCounter = function () {
			currentDate = new Date();
			intervalDate.setTime( currentDate.getTime() - initialDate.getTime() );
			printTotal();
			if (running) {
				setTimeout(runCounter, 1);
			}
		},
		printTotal = function(){
			if(totalDate){
				totalDate.setTime(cumulativeDate.getTime() + intervalDate.getTime());
			} else {
				totalDate = new Date(0);
			}
			
			getSeconds = totalDate.toISOString().substr(17, 2);
			getMinutes = totalDate.toISOString().substr(14, 2);
			getHours = totalDate.toISOString().substr(11, 2);
			
			if(typeof totalDisplay !== 'undefined'){
				totalDisplay.innerText = totalDate.toISOString().substr(11, 8);
			}
		},
		updateCumulative = function(){
			cumulativeDate.setTime(totalDate.getTime());
		},
		resetCumulativeDate = function () {
			cumulativeDate = new Date(0);
		},
		start = function (event) {
			running = true;	
			beginNewInterval();
			runCounter();
		},
		stop = function (event) {
			running = false;
			updateCumulative();
			beginNewInterval();
			printTotal();
		},
		reset = function(){
			beginNewInterval();
			resetCumulativeDate();
			printTotal();
		},
		getRunning = function(){
			return running;
		},
		setSecondsDisplay = function(element){
			secondsDisplay = element;
		},
		setMinutesDisplay = function(element){
			minutesDisplay = element;
		},
		setHoursDisplay = function(element){
			hoursDisplay = element;
		},
		setTotalDisplay = function(element){
			totalDisplay = element;
		},
		incrementHours = function(){
			cumulativeDate.setHours(cumulativeDate.getHours() + 1);
			printTotal();
		},
		decrementHours = function(){
			cumulativeDate.setHours(cumulativeDate.getHours() - 1);
			printTotal();
		},
		incrementMinutes = function(){
			cumulativeDate.setMinutes(cumulativeDate.getMinutes() + 1);
			printTotal();
		},
		decrementMinutes = function(){
			cumulativeDate.setMinutes(cumulativeDate.getMinutes() - 1);
			printTotal();
		},
		incrementSeconds = function(){
			cumulativeDate.setSeconds(cumulativeDate.getSeconds() + 1);
			printTotal();
		},
		decrementSeconds = function(){
			cumulativeDate.setSeconds(cumulativeDate.getSeconds() - 1);
			printTotal();
		}

	;

	return (
		<>
			<div className="timer__display-time timer__hoursDisplay">
				{getHours}
			</div>
			<div className="timer__display-time timer__minutesDisplay">
				{getMinutes}
			</div>
			<div className="timer__display-time timer__secondsDisplay">
				{getSeconds}
			</div>
		</>
	);
}
