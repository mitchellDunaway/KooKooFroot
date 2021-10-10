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
		* [ ] stopping is either unifomrly "pause" or "stop"
* [ ] remove all bugs and clean up code
	* [ ] rename all functions, properties, etc.
		* [ ] prefix with current scope
		* [ ] indicate type (ex. booleans begin with "is")
		* [ ] uniformity (ex. either play or start, either stop or pause)
	* [ ] reorder all items
	* [ ] when a timer plays, it will briefly show 23:59:59
	* [ ] when pressing play it will lose its current interval and resume playing from its last cumulative amount.
	* [ ] playing backward from zero starts you at 23:59:59. It should instead prevent playing backward while at zero.
* [ ] publish and make a build publicly available 