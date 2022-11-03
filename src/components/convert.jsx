import { useState, useEffect, useRef } from 'react';
// import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
// import { Button } from 'primereact/button';
// import { Checkbox } from 'primereact/checkbox';
// import { RadioButton } from 'primereact/radiobutton';
import { AutoComplete } from 'primereact/autocomplete';
// import { CountryService } from '../CountryService';
import { countries } from '../data/countries.js';
import { Dropdown } from 'primereact/dropdown';
import { Skeleton } from 'primereact/skeleton';
import { Button } from 'primereact/button';
import axios from 'axios';


const Convert = () => {

    // const [selectedItem, setSelectedItem] = useState(null);
    // const [filteredItems, setFilteredItems] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCountry2, setSelectedCountry2] = useState(null);
    const [amount, setAmount] = useState(null);
    const [result, setResult] = useState(null)



    // const items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));
    // const items = currencies.symbols
    // const items = ["AED", "AFN","ALL", "AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTC","BTN","BWP","BYN","BYR","BZD","CAD","CDF","CHF","CLF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VEF","VND","VUV","WST","XAF","XAG","XAU","XCD","XDR","XOF","XPF","YER","ZAR","ZMK","ZMW","ZWL"]



    const onCountryChange = (e) => {
        setSelectedCountry(e.value);
    }
    const onCountryChange2 = (e) => {
        setSelectedCountry2(e.value);
    }

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <div>{option.symbol} - {option.name}</div>
                </div>
            );
        }
        return (
            <span>
                {props.placeholder}
            </span>
        );
    }

    const countryOptionTemplate = (option) => {
        return (
            <div className="country-item">
                <div>{option.symbol} - {option.name}</div>
            </div>
        );
    }

    const handleChange = event => {
        setAmount(event.target.value);

        console.log('value is:', event.target.value);
    };

    const interChange = () => {
        const aTemp = selectedCountry;
        const bTemp = selectedCountry2;
        setSelectedCountry(bTemp);
        setSelectedCountry2(aTemp);
    }
    // ========================================API LEvel ===================================




    const options = {
        method: 'GET',
        url: 'https://currency-exchange.p.rapidapi.com/exchange',
        params: { from: (selectedCountry ? selectedCountry.symbol : "USD"), to: (selectedCountry2 ? selectedCountry2.symbol : "USD"), q: amount },
        headers: {
            'X-RapidAPI-Key': '7734f3d561mshce5a804f437e5ecp1890d4jsn6577c3a2e961',
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
    };

    const api = () => {
        axios.request(options)
            .then(function (response) {
                console.log(response.data);
                setResult(response.data)
            }).catch(function (error) {
                console.error(error);
            });
    }

    return (
        <>
            <div className="convertContainer">
                <div className="convertForm">
                    <h1>Convert currencies</h1>
                    <div className="convertInput">
                        <div className="currency">
                            <Dropdown value={selectedCountry} options={countries} onChange={onCountryChange} optionLabel="name" filter filterBy="symbol,name" placeholder="Select a Currency" valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className='dropdown' />
                            <h2>TO</h2>
                            <Dropdown value={selectedCountry2} options={countries} onChange={onCountryChange2} optionLabel="name" filter filterBy="symbol,name" placeholder="Select a Currency" valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className='dropdown' />

                        </div>
                        <Button icon="pi pi-arrows-h" className="p-button-rounded p-button-outlined" aria-label="Submit" on onClick={interChange} />
                        <div className="col-12 md:col-4 amount">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">{selectedCountry ? selectedCountry.symbol : 'USD'}</span>
                                <InputNumber placeholder="Price" onValueChange={handleChange} value={amount} />
                            </div>
                        </div>
                        <Button className='submit' label="Submit" icon="pi pi-check" iconPos="right" onClick={api} />
                    </div>
                    <h1>Result</h1>
                    <h1>{(result * amount).toFixed(2)} {selectedCountry2 ? selectedCountry2.symbol : ''}</h1>
                </div>
            </div>
        </>
    );
};
export default Convert;