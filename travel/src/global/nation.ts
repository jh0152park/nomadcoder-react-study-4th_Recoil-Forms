interface INations {
    [key: string]: string;
}

const NATIONS: INations = {
    Ghana: "GH",
    Gabon: "GA",
    Guyana: "GY",
    Gambia: "GM",
    "Bailiwick of Guernsey": "GG",
    Guadeloupe: "GP",
    Guatemala: "GT",
    Guam: "GU",
    Grenada: "GD",
    Greece: "GR",
    Greenland: "GL",
    Guinea: "GN",
    "Guinea-Bissau": "GW",
    Namibia: "NA",
    Nauru: "NR",
    Nigeria: "NG",
    "South Sudan": "SS",
    "South Africa": "ZA",
    Netherlands: "NL",
    "Netherlands Antilles": "AN",
    Nepal: "NP",
    Norway: "NO",
    "New Caledonia": "NC",
    "New Zealand": "NZ",
    Niue: "NU",
    Niger: "NE",
    Nicaragua: "NI",
    Denmark: "DK",
    "Dominican Republic": "DO",
    Dominica: "DM",
    Germany: "DE",
    "Timor-Leste": "TL",
    Laos: "LA",
    Liberia: "LR",
    Latvia: "LV",
    Russia: "RU",
    Lebanon: "LB",
    Lesotho: "LS",
    "R¡¤union": "RE",
    Romania: "RO",
    Luxembourg: "LU",
    Rwanda: "RW",
    Libya: "LY",
    Lithuania: "LT",
    Liechtenstein: "LI",
    Madagascar: "MG",
    Martinique: "MQ",
    "Marshall Islands": "MH",
    Mayotte: "YT",
    "Federated States of Micronesia": "FM",
    Malawi: "MW",
    Malaysia: "MY",
    Mali: "ML",
    "Isle of Man": "IM",
    Mexico: "MX",
    Monaco: "MC",
    Morocco: "MA",
    Mauritius: "MU",
    Mauritania: "MR",
    Mazambique: "MZ",
    Montenegro: "ME",
    Montserrat: "MS",
    Moldova: "MD",
    Maldives: "MV",
    Malta: "MT",
    Mongolia: "MN",
    "United States of America": "US",
    Myanmar: "MM",
    Vanuatu: "VU",
    Bahrain: "BH",
    Barbados: "BB",
    Vatican: "VA",
    Bahamas: "BS",
    Bangladesh: "BD",
    Bermuda: "BM",
    Benin: "BJ",
    Venezuela: "VE",
    Vietnam: "VN",
    Belgium: "BE",
    Belarus: "BY",
    Belize: "BZ",
    "Bosnia-Herzegovina": "BA",
    Botswana: "BW",
    Bolivia: "BO",
    Burundi: "BI",
    "Burkina Faso": "BF",
    Bhutan: "BT",
    "Northern Mariana Islands": "MP",
    "North Macedonia": "MK",
    Bulgaria: "BG",
    Brazil: "BR",
    Brunei: "BN",
    Samoa: "WS",
    "Saudi Arabia": "SA",
    Cyprus: "CY",
    "Sahara Arab Democratic Republic": "EH",
    "San Marino": "SM",
    "S¡¤o Tom¡¤ & Principe": "ST",
    "St. Pierre and Miquelon": "PM",
    Senegal: "SN",
    Serbia: "RS",
    Seychelles: "SC",
    "St. Lucia": "LC",
    "St. Vincent & the Grenadines": "VC",
    "St. Kitts-Nevis": "KN",
    "St Helena": "SH",
    Somalia: "SO",
    "Solomon Islands": "SB",
    Sudan: "SD",
    Suriname: "SR",
    "Sri Lanka": "LK",
    Sweden: "SE",
    Swiss: "CH",
    Spain: "ES",
    Slovakia: "SK",
    Slovenia: "SI",
    Syria: "SY",
    "Sierra Leone": "SL",
    Singapore: "SG",
    UAE: "AE",
    Aruba: "AW",
    Armenia: "AM",
    Argentina: "AR",
    Iceland: "IS",
    Haiti: "HT",
    Ireland: "IE",
    Azerbaijan: "AZ",
    Afghanistan: "AF",
    Andorra: "AD",
    Albania: "AL",
    Algeria: "DZ",
    Angola: "AO",
    "Antigua and Barbuda": "AG",
    Anguilla: "AI",
    Eritrea: "ER",
    Eswatini: "SZ",
    Estonia: "EE",
    Ecuador: "EC",
    Ethiopia: "ET",
    "El Salvador": "SV",
    "United Kingdom": "GB",
    "British Antarctic Territory": "AQ",
    "British Virgin Islands": "VG",
    "British Indian Ocean Territory": "IO",
    Yemen: "YE",
    Oman: "OM",
    Austria: "AT",
    Honduras: "HN",
    "Wallis and Futuna": "WF",
    Jordan: "JO",
    Uganda: "UG",
    Uruguay: "UY",
    Uzbekistan: "UZ",
    Ukraine: "UA",
    Iraq: "IQ",
    Iran: "IR",
    Israel: "IL",
    Egypt: "EG",
    Italia: "IT",
    India: "IN",
    Indonesia: "ID",
    Japan: "JP",
    Jamaica: "JM",
    Zambia: "ZM",
    "Bailiwick of Jersey": "JE",
    "Equatorial Guinea": "GQ",
    Georgia: "GE",
    China: "CN",
    "Central African Republic": "CF",
    Djibouti: "DJ",
    Gibraltar: "GI",
    Zimbabwe: "ZW",
    Chad: "TD",
    Czech: "CZ",
    Chile: "CL",
    Cameroon: "CM",
    "Cape Verde": "CV",
    Kazakhstan: "KZ",
    Qatar: "QA",
    Cambodia: "KH",
    Canada: "CA",
    Kenya: "KE",
    "Cayman Islands": "KY",
    Comoros: "KM",
    Kosovo: "XK",
    "Costa Rica": "CR",
    "C¡¤te D'Ivoire": "CI",
    Colombia: "CO",
    Congo: "CG",
    "Democratic Republic of Congo": "CD",
    Cuba: "CU",
    Kuwait: "KW",
    "Cook Islands": "CK",
    Croatia: "HR",
    Kyrgyz: "KG",
    Kiribati: "KI",
    Taiwan: "TW",
    Tajikistan: "TJ",
    Tanzania: "TZ",
    Thailand: "TH",
    "Turks and Caicos Islands": "TC",
    Turkey: "TR",
    Togo: "TG",
    Tonga: "TO",
    Turkmenistan: "TM",
    Tuvalu: "TV",
    Tunisia: "TN",
    "Trinidad & Tobago": "TT",
    Panama: "PA",
    Paraguay: "PY",
    Pakistan: "PK",
    "Papua New Guinea :PNG": "PG",
    Palau: "PW",
    Palestine: "PS",
    Peru: "PE",
    Portugal: "PT",
    Poland: "PL",
    France: "FR",
    "French Guiana": "GF",
    "French Polynesia": "PF",
    Fiji: "FJ",
    Finland: "FI",
    Philippines: "PH",
    "Pitcairn Islands": "PN",
    Hungary: "HU",
    Australia: "AU",
};

export function isCorrectNation(nation: string): boolean {
    return !!NATIONS[nation];
}

export function getFlagCode(nation: string): string | null {
    return NATIONS[nation];
}
