import { Component, OnInit, Input } from '@angular/core';
import { Settings } from '../../models/settings';
import { SharedMethods } from '../../shared/methods';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
    selector: 'setting-management',
    templateUrl: './setting-management.component.html',
    styleUrls: ['./setting-management.component.css']
})
export class SettingsManagementComponent implements OnInit {

    @Input()
    settings: FirebaseObjectObservable<Settings>;
    currency: string;
    currencyCodes: Array<CurrencyCode>;

    constructor() {

        this.InitDict();
    }

    ngOnInit() {
        if (this.currency == null) {
            this.settings.subscribe(snapshot => {
                this.currency = snapshot.currencycode;
            })
        };
    }

    updateSettings() {
        var promise = this.settings.update({
            currencycode: this.currency,
        });
        SharedMethods.showFirebaseResult(promise);
    }

    currencySeleted(currencyCode) {
        this.currency = currencyCode.code;

    }

    InitDict() {
        this.currencyCodes = new Array<CurrencyCode>();
        this.currencyCodes.push({ code: 'AED', countryname: 'United Arab Emirates Dirham' });
        this.currencyCodes.push({ code: 'AFN', countryname: 'Afghanistan Afghani' });
        this.currencyCodes.push({ code: 'ALL', countryname: 'Albania Lek' });
        this.currencyCodes.push({ code: 'AMD', countryname: 'Armenia Dram' });
        this.currencyCodes.push({ code: 'ANG', countryname: 'Netherlands Antilles Guilder' });
        this.currencyCodes.push({ code: 'AOA', countryname: 'Angola Kwanza' });
        this.currencyCodes.push({ code: 'ARS', countryname: 'Argentina Peso' });
        this.currencyCodes.push({ code: 'AUD', countryname: 'Australia Dollar' });
        this.currencyCodes.push({ code: 'AWG', countryname: 'Aruba Guilder' });
        this.currencyCodes.push({ code: 'AZN', countryname: 'Azerbaijan Manat' });
        this.currencyCodes.push({ code: 'BAM', countryname: 'Bosnia and Herzegovina Convertible Marka' });
        this.currencyCodes.push({ code: 'BBD', countryname: 'Barbados Dollar' });
        this.currencyCodes.push({ code: 'BDT', countryname: 'Bangladesh Taka' });
        this.currencyCodes.push({ code: 'BGN', countryname: 'Bulgaria Lev' });
        this.currencyCodes.push({ code: 'BHD', countryname: 'Bahrain Dinar' });
        this.currencyCodes.push({ code: 'BIF', countryname: 'Burundi Franc' });
        this.currencyCodes.push({ code: 'BMD', countryname: 'Bermuda Dollar' });
        this.currencyCodes.push({ code: 'BND', countryname: 'Brunei Darussalam Dollar' });
        this.currencyCodes.push({ code: 'BOB', countryname: 'Bolivia Bolíviano' });
        this.currencyCodes.push({ code: 'BRL', countryname: 'Brazil Real' });
        this.currencyCodes.push({ code: 'BSD', countryname: 'Bahamas Dollar' });
        this.currencyCodes.push({ code: 'BTN', countryname: 'Bhutan Ngultrum' });
        this.currencyCodes.push({ code: 'BWP', countryname: 'Botswana Pula' });
        this.currencyCodes.push({ code: 'BYN', countryname: 'Belarus Ruble' });
        this.currencyCodes.push({ code: 'BZD', countryname: 'Belize Dollar' });
        this.currencyCodes.push({ code: 'CAD', countryname: 'Canada Dollar' });
        this.currencyCodes.push({ code: 'CDF', countryname: 'Congo/Kinshasa Franc' });
        this.currencyCodes.push({ code: 'CHF', countryname: 'Switzerland Franc' });
        this.currencyCodes.push({ code: 'CLP', countryname: 'Chile Peso' });
        this.currencyCodes.push({ code: 'CNY', countryname: 'China Yuan Renminbi' });
        this.currencyCodes.push({ code: 'COP', countryname: 'Colombia Peso' });
        this.currencyCodes.push({ code: 'CRC', countryname: 'Costa Rica Colon' });
        this.currencyCodes.push({ code: 'CUC', countryname: 'Cuba Convertible Peso' });
        this.currencyCodes.push({ code: 'CUP', countryname: 'Cuba Peso' });
        this.currencyCodes.push({ code: 'CVE', countryname: 'Cape Verde Escudo' });
        this.currencyCodes.push({ code: 'CZK', countryname: 'Czech Republic Koruna' });
        this.currencyCodes.push({ code: 'DJF', countryname: 'Djibouti Franc' });
        this.currencyCodes.push({ code: 'DKK', countryname: 'Denmark Krone' });
        this.currencyCodes.push({ code: 'DOP', countryname: 'Dominican Republic Peso' });
        this.currencyCodes.push({ code: 'DZD', countryname: 'Algeria Dinar' });
        this.currencyCodes.push({ code: 'EGP', countryname: 'Egypt Pound' });
        this.currencyCodes.push({ code: 'ERN', countryname: 'Eritrea Nakfa' });
        this.currencyCodes.push({ code: 'ETB', countryname: 'Ethiopia Birr' });
        this.currencyCodes.push({ code: 'EUR', countryname: 'Euro Member Countries' });
        this.currencyCodes.push({ code: 'FJD', countryname: 'Fiji Dollar' });
        this.currencyCodes.push({ code: 'FKP', countryname: 'Falkland Islands (Malvinas) Pound' });
        this.currencyCodes.push({ code: 'GBP', countryname: 'United Kingdom Pound' });
        this.currencyCodes.push({ code: 'GEL', countryname: 'Georgia Lari' });
        this.currencyCodes.push({ code: 'GGP', countryname: 'Guernsey Pound' });
        this.currencyCodes.push({ code: 'GHS', countryname: 'Ghana Cedi' });
        this.currencyCodes.push({ code: 'GIP', countryname: 'Gibraltar Pound' });
        this.currencyCodes.push({ code: 'GMD', countryname: 'Gambia Dalasi' });
        this.currencyCodes.push({ code: 'GNF', countryname: 'Guinea Franc' });
        this.currencyCodes.push({ code: 'GTQ', countryname: 'Guatemala Quetzal' });
        this.currencyCodes.push({ code: 'GYD', countryname: 'Guyana Dollar' });
        this.currencyCodes.push({ code: 'HKD', countryname: 'Hong Kong Dollar' });
        this.currencyCodes.push({ code: 'HNL', countryname: 'Honduras Lempira' });
        this.currencyCodes.push({ code: 'HRK', countryname: 'Croatia Kuna' });
        this.currencyCodes.push({ code: 'HTG', countryname: 'Haiti Gourde' });
        this.currencyCodes.push({ code: 'HUF', countryname: 'Hungary Forint' });
        this.currencyCodes.push({ code: 'IDR', countryname: 'Indonesia Rupiah' });
        this.currencyCodes.push({ code: 'ILS', countryname: 'Israel Shekel' });
        this.currencyCodes.push({ code: 'IMP', countryname: 'Isle of Man Pound' });
        this.currencyCodes.push({ code: 'INR', countryname: 'India Rupee' });
        this.currencyCodes.push({ code: 'IQD', countryname: 'Iraq Dinar' });
        this.currencyCodes.push({ code: 'IRR', countryname: 'Iran Rial' });
        this.currencyCodes.push({ code: 'ISK', countryname: 'Iceland Krona' });
        this.currencyCodes.push({ code: 'JEP', countryname: 'Jersey Pound' });
        this.currencyCodes.push({ code: 'JMD', countryname: 'Jamaica Dollar' });
        this.currencyCodes.push({ code: 'JOD', countryname: 'Jordan Dinar' });
        this.currencyCodes.push({ code: 'JPY', countryname: 'Japan Yen' });
        this.currencyCodes.push({ code: 'KES', countryname: 'Kenya Shilling' });
        this.currencyCodes.push({ code: 'KGS', countryname: 'Kyrgyzstan Som' });
        this.currencyCodes.push({ code: 'KHR', countryname: 'Cambodia Riel' });
        this.currencyCodes.push({ code: 'KMF', countryname: 'Comorian Franc' });
        this.currencyCodes.push({ code: 'KPW', countryname: 'Korea (North) Won' });
        this.currencyCodes.push({ code: 'KRW', countryname: 'Korea (South) Won' });
        this.currencyCodes.push({ code: 'KWD', countryname: 'Kuwait Dinar' });
        this.currencyCodes.push({ code: 'KYD', countryname: 'Cayman Islands Dollar' });
        this.currencyCodes.push({ code: 'KZT', countryname: 'Kazakhstan Tenge' });
        this.currencyCodes.push({ code: 'LAK', countryname: 'Laos Kip' });
        this.currencyCodes.push({ code: 'LBP', countryname: 'Lebanon Pound' });
        this.currencyCodes.push({ code: 'LKR', countryname: 'Sri Lanka Rupee' });
        this.currencyCodes.push({ code: 'LRD', countryname: 'Liberia Dollar' });
        this.currencyCodes.push({ code: 'LSL', countryname: 'Lesotho Loti' });
        this.currencyCodes.push({ code: 'LYD', countryname: 'Libya Dinar' });
        this.currencyCodes.push({ code: 'MAD', countryname: 'Morocco Dirham' });
        this.currencyCodes.push({ code: 'MDL', countryname: 'Moldova Leu' });
        this.currencyCodes.push({ code: 'MGA', countryname: 'Madagascar Ariary' });
        this.currencyCodes.push({ code: 'MKD', countryname: 'Macedonia Denar' });
        this.currencyCodes.push({ code: 'MMK', countryname: 'Myanmar (Burma) Kyat' });
        this.currencyCodes.push({ code: 'MNT', countryname: 'Mongolia Tughrik' });
        this.currencyCodes.push({ code: 'MOP', countryname: 'Macau Pataca' });
        this.currencyCodes.push({ code: 'MRO', countryname: 'Mauritania Ouguiya' });
        this.currencyCodes.push({ code: 'MUR', countryname: 'Mauritius Rupee' });
        this.currencyCodes.push({ code: 'MVR', countryname: 'Maldives (Maldive Islands) Rufiyaa' });
        this.currencyCodes.push({ code: 'MWK', countryname: 'Malawi Kwacha' });
        this.currencyCodes.push({ code: 'MXN', countryname: 'Mexico Peso' });
        this.currencyCodes.push({ code: 'MYR', countryname: 'Malaysia Ringgit' });
        this.currencyCodes.push({ code: 'MZN', countryname: 'Mozambique Metical' });
        this.currencyCodes.push({ code: 'NAD', countryname: 'Namibia Dollar' });
        this.currencyCodes.push({ code: 'NGN', countryname: 'Nigeria Naira' });
        this.currencyCodes.push({ code: 'NIO', countryname: 'Nicaragua Cordoba' });
        this.currencyCodes.push({ code: 'NOK', countryname: 'Norway Krone' });
        this.currencyCodes.push({ code: 'NPR', countryname: 'Nepal Rupee' });
        this.currencyCodes.push({ code: 'NZD', countryname: 'New Zealand Dollar' });
        this.currencyCodes.push({ code: 'OMR', countryname: 'Oman Rial' });
        this.currencyCodes.push({ code: 'PAB', countryname: 'Panama Balboa' });
        this.currencyCodes.push({ code: 'PEN', countryname: 'Peru Sol' });
        this.currencyCodes.push({ code: 'PGK', countryname: 'Papua New Guinea Kina' });
        this.currencyCodes.push({ code: 'PHP', countryname: 'Philippines Peso' });
        this.currencyCodes.push({ code: 'PKR', countryname: 'Pakistan Rupee' });
        this.currencyCodes.push({ code: 'PLN', countryname: 'Poland Zloty' });
        this.currencyCodes.push({ code: 'PYG', countryname: 'Paraguay Guarani' });
        this.currencyCodes.push({ code: 'QAR', countryname: 'Qatar Riyal' });
        this.currencyCodes.push({ code: 'RON', countryname: 'Romania Leu' });
        this.currencyCodes.push({ code: 'RSD', countryname: 'Serbia Dinar' });
        this.currencyCodes.push({ code: 'RUB', countryname: 'Russia Ruble' });
        this.currencyCodes.push({ code: 'RWF', countryname: 'Rwanda Franc' });
        this.currencyCodes.push({ code: 'SAR', countryname: 'Saudi Arabia Riyal' });
        this.currencyCodes.push({ code: 'SBD', countryname: 'Solomon Islands Dollar' });
        this.currencyCodes.push({ code: 'SCR', countryname: 'Seychelles Rupee' });
        this.currencyCodes.push({ code: 'SDG', countryname: 'Sudan Pound' });
        this.currencyCodes.push({ code: 'SEK', countryname: 'Sweden Krona' });
        this.currencyCodes.push({ code: 'SGD', countryname: 'Singapore Dollar' });
        this.currencyCodes.push({ code: 'SHP', countryname: 'Saint Helena Pound' });
        this.currencyCodes.push({ code: 'SLL', countryname: 'Sierra Leone Leone' });
        this.currencyCodes.push({ code: 'SOS', countryname: 'Somalia Shilling' });
        this.currencyCodes.push({ code: 'SPL*', countryname: 'Seborga Luigino' });
        this.currencyCodes.push({ code: 'SRD', countryname: 'Suriname Dollar' });
        this.currencyCodes.push({ code: 'STD', countryname: 'São Tomé and Príncipe Dobra' });
        this.currencyCodes.push({ code: 'SVC', countryname: 'El Salvador Colon' });
        this.currencyCodes.push({ code: 'SYP', countryname: 'Syria Pound' });
        this.currencyCodes.push({ code: 'SZL', countryname: 'Swaziland Lilangeni' });
        this.currencyCodes.push({ code: 'THB', countryname: 'Thailand Baht' });
        this.currencyCodes.push({ code: 'TJS', countryname: 'Tajikistan Somoni' });
        this.currencyCodes.push({ code: 'TMT', countryname: 'Turkmenistan Manat' });
        this.currencyCodes.push({ code: 'TND', countryname: 'Tunisia Dinar' });
        this.currencyCodes.push({ code: 'TOP', countryname: "Tonga Pa'anga" });
        this.currencyCodes.push({ code: 'TRY', countryname: 'Turkey Lira' });
        this.currencyCodes.push({ code: 'TTD', countryname: 'Trinidad and Tobago Dollar' });
        this.currencyCodes.push({ code: 'TVD', countryname: 'Tuvalu Dollar' });
        this.currencyCodes.push({ code: 'TWD', countryname: 'Taiwan New Dollar' });
        this.currencyCodes.push({ code: 'TZS', countryname: 'Tanzania Shilling' });
        this.currencyCodes.push({ code: 'UAH', countryname: 'Ukraine Hryvnia' });
        this.currencyCodes.push({ code: 'UGX', countryname: 'Uganda Shilling' });
        this.currencyCodes.push({ code: 'USD', countryname: 'United States Dollar' });
        this.currencyCodes.push({ code: 'UYU', countryname: 'Uruguay Peso' });
        this.currencyCodes.push({ code: 'UZS', countryname: 'Uzbekistan Som' });
        this.currencyCodes.push({ code: 'VEF', countryname: 'Venezuela Bolívar' });
        this.currencyCodes.push({ code: 'VND', countryname: 'Viet Nam Dong' });
        this.currencyCodes.push({ code: 'VUV', countryname: 'Vanuatu Vatu' });
        this.currencyCodes.push({ code: 'WST', countryname: 'Samoa Tala' });
        this.currencyCodes.push({ code: 'XAF', countryname: 'Communauté Financière Africaine (BEAC) CFA Franc BEAC' });
        this.currencyCodes.push({ code: 'XCD', countryname: 'East Caribbean Dollar' });
        this.currencyCodes.push({ code: 'XDR', countryname: 'International Monetary Fund (IMF) Special Drawing Rights' });
        this.currencyCodes.push({ code: 'XOF', countryname: 'Communauté Financière Africaine (BCEAO) Franc' });
        this.currencyCodes.push({ code: 'XPF', countryname: 'Comptoirs Français du Pacifique (CFP) Franc' });
        this.currencyCodes.push({ code: 'YER', countryname: 'Yemen Rial' });
        this.currencyCodes.push({ code: 'ZAR', countryname: 'South Africa Rand' });
        this.currencyCodes.push({ code: 'ZMW', countryname: 'Zambia Kwacha' });
        this.currencyCodes.push({ code: 'ZWD', countryname: 'Zimbabwe Dollar' });

    }
}

class CurrencyCode {
    code: string;
    countryname: string;
}