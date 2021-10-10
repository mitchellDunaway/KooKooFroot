# KooKooFroot

The idea is to have several concurrent timers and stopwatches going. 

## to do list

* [x] ensure all functionality and styles from v1 are replicated
	* [x] functionality outstanding
		* [x] reset all
			* [x] sets back to initial value
	* [x] styles outstanding
		* [x] icons on global actions
		* [x] main area needs to be 100% tall (so the zig zag is behind global actions)
* [ ] complete additional features
	* [ ] Implement in React
		* [x] convert the following to use public methods
			* [x] play
			* [x] stop
			* [x] reset
		* [ ] break into smallest components
	* [x] Adder toolbar should should how more options at smaller screen sizes
		* [x] Do not switch from toolbar to single add button
	* [ ] Play backward
		* [ ] on complete
			* [ ] notice
			* [ ] sound (implement sound API)
	* [ ] paired timers
		* [ ] play on one pauses other
		* [ ] when both reach zero they both reset
		* [ ] visually paired
	* [ ] preset timers
		* [ ] Pomodoro (tomato)
		* [ ] chess timer 
		* [ ] play/work
	* [ ] improve styles
		* [ ] remove black color for active button
		* [ ] make it more clear what direction a timer is going
		* [ ] stopping is either uniformly "pause" or "stop"
		* [ ] improve discoverability of timer name edit feature
* [ ] remove all bugs and clean up code
	* [ ] Bugs
		* [x] some timers do not stop at Zero (still referencing props.isRunning)
		* [x] when a timer plays, it will briefly shows 23:59:59 (sometimes the current and initial are so close, it's a negative number (depending on which was made first))
		* [ ] when pressing play while playing it will lose its current interval and resume playing from its last cumulative amount.
		* [ ] playing backward from zero starts you at 23:59:59. It should instead prevent playing backward while at zero.
	* [ ] Code clean up
		* [ ] rename all functions, properties, etc.
			* [ ] prefix with current scope
			* [ ] indicate type (ex. booleans begin with "is")
			* [ ] uniformity (ex. either play or start, either stop or pause)
		* [ ] put methods in logical order
* [x] publish and make a build publicly available 