
export class CountryService {

    async getCountries() {
        const res = await fetch('./data/countries.json');
        const d = await res.json();
        return d.data;
    }
}
  