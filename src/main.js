import {getTemperature} from './weather.js';

async function main() {
    const temp = await getTemperature(64130);
    console.log(temp);
}

main();