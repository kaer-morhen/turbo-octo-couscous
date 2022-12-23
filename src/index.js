const getSecondsLeft = require('@kaer-morhen/refactored-tribble');
const logger = require('@kaer-morhen/crispy-computing-machine');


const secondsLeft = getSecondsLeft();

logger(`Seconds left till new year ${secondsLeft}`);
