import * as Openweather from '@cicciosgamino/openweather-apis';

const apikey="3aad45db1823692854e69062c76be1ad"
const client = await new Openweather.AsyncWeather();
client.setApiKey(apikey);
client.setUnits("imperial")
export async function getTemperature(zipCode){
    client.setZipCodeAndCountryCode(zipCode, "US")
    
    return client.getTemperature()

}