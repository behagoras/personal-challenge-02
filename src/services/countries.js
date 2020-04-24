import getData from '../utils/getData';

const BASE_URL = 'https://restcountries.eu/rest/v2';
export default class Countries {
  constructor() {
    this.getData = getData;
  }

  async getCountries() {
    const countries = await this.getData(`${BASE_URL}/all`);
    return countries;
  }

  async getFullCountries() {
    const countries = await this.getCountries();
    const fullCountries = await countries.map((country) => this.getCountry(country.name));
    return fullCountries;
  }

  async getCountry(name) {
    const country = await this.getData(`${BASE_URL}/name/${name}`);
    // console.log(country);
    return country;
  }

}
