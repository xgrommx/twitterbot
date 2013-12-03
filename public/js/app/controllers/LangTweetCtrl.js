(function (ng, $) {
    // Very bad experience, but I need country info in my code.
    // TODO: Fix it later.
    var countryInfo = [
        {
            "alpha2": "AC",
            "alpha3": "",
            "countryCallingCodes": [
                "+247"
            ],
            "currencies": [
                "USD"
            ],
            "ioc": "SHP",
            "name": "Ascension Island",
            "status": "reserved"
        },
        {
            "alpha2": "AD",
            "alpha3": "AND",
            "countryCallingCodes": [
                "+376"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "AND",
            "name": "Andorra",
            "status": "assigned"
        },
        {
            "alpha2": "AE",
            "alpha3": "ARE",
            "countryCallingCodes": [
                "+971"
            ],
            "currencies": [
                "AED"
            ],
            "ioc": "UAE",
            "name": "United Arab Emirates",
            "status": "assigned"
        },
        {
            "alpha2": "AF",
            "alpha3": "AFG",
            "countryCallingCodes": [
                "+93"
            ],
            "currencies": [
                "AFN"
            ],
            "ioc": "AFG",
            "name": "Afghanistan",
            "status": "assigned"
        },
        {
            "alpha2": "AG",
            "alpha3": "ATG",
            "countryCallingCodes": [
                "+1 268"
            ],
            "currencies": [
                "XCD"
            ],
            "ioc": "ANT",
            "name": "Antigua And Barbuda",
            "status": "assigned"
        },
        {
            "alpha2": "AI",
            "alpha3": "AIA",
            "countryCallingCodes": [
                "+1 264"
            ],
            "currencies": [
                "XCD"
            ],
            "ioc": "",
            "name": "Anguilla",
            "status": "assigned"
        },
        {
            "alpha2": "AL",
            "alpha3": "ALB",
            "countryCallingCodes": [
                "+355"
            ],
            "currencies": [
                "ALL"
            ],
            "ioc": "ALB",
            "name": "Albania",
            "status": "assigned"
        },
        {
            "alpha2": "AM",
            "alpha3": "ARM",
            "countryCallingCodes": [
                "+374"
            ],
            "currencies": [
                "AMD"
            ],
            "ioc": "ARM",
            "name": "Armenia",
            "status": "assigned"
        },
        {
            "alpha2": "AO",
            "alpha3": "AGO",
            "countryCallingCodes": [
                "+244"
            ],
            "currencies": [
                "AOA"
            ],
            "ioc": "ANG",
            "name": "Angola",
            "status": "assigned"
        },
        {
            "alpha2": "AQ",
            "alpha3": "ATA",
            "countryCallingCodes": [
                "+672"
            ],
            "currencies": [],
            "ioc": "",
            "name": "Antarctica",
            "status": "assigned"
        },
        {
            "alpha2": "AR",
            "alpha3": "ARG",
            "countryCallingCodes": [
                "+54"
            ],
            "currencies": [
                "ARS"
            ],
            "ioc": "ARG",
            "name": "Argentina",
            "status": "assigned"
        },
        {
            "alpha2": "AS",
            "alpha3": "ASM",
            "countryCallingCodes": [
                "+1 684"
            ],
            "currencies": [
                "USD"
            ],
            "ioc": "ASA",
            "name": "American Samoa",
            "status": "assigned"
        },
        {
            "alpha2": "AT",
            "alpha3": "AUT",
            "countryCallingCodes": [
                "+43"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "AUT",
            "name": "Austria",
            "status": "assigned"
        },
        {
            "alpha2": "AU",
            "alpha3": "AUS",
            "countryCallingCodes": [
                "+61"
            ],
            "currencies": [
                "AUD"
            ],
            "ioc": "AUS",
            "name": "Australia",
            "status": "assigned"
        },
        {
            "alpha2": "AW",
            "alpha3": "ABW",
            "countryCallingCodes": [
                "+297"
            ],
            "currencies": [
                "AWG"
            ],
            "ioc": "ARU",
            "name": "Aruba",
            "status": "assigned"
        },
        {
            "alpha2": "AZ",
            "alpha3": "AZE",
            "countryCallingCodes": [
                "+994"
            ],
            "currencies": [
                "AZN"
            ],
            "ioc": "AZE",
            "name": "Azerbaijan",
            "status": "assigned"
        },
        {
            "alpha2": "BA",
            "alpha3": "BIH",
            "countryCallingCodes": [
                "+387"
            ],
            "currencies": [
                "BAM"
            ],
            "ioc": "BIH",
            "name": "Bosnia & Herzegovina",
            "status": "assigned"
        },
        {
            "alpha2": "BB",
            "alpha3": "BRB",
            "countryCallingCodes": [
                "+1 246"
            ],
            "currencies": [
                "BBD"
            ],
            "ioc": "BAR",
            "name": "Barbados",
            "status": "assigned"
        },
        {
            "alpha2": "BD",
            "alpha3": "BGD",
            "countryCallingCodes": [
                "+880"
            ],
            "currencies": [
                "BDT"
            ],
            "ioc": "BAN",
            "name": "Bangladesh",
            "status": "assigned"
        },
        {
            "alpha2": "BE",
            "alpha3": "BEL",
            "countryCallingCodes": [
                "+32"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "BEL",
            "name": "Belgium",
            "status": "assigned"
        },
        {
            "alpha2": "BF",
            "alpha3": "BFA",
            "countryCallingCodes": [
                "+226"
            ],
            "currencies": [
                "XOF"
            ],
            "ioc": "BUR",
            "name": "Burkina Faso",
            "status": "assigned"
        },
        {
            "alpha2": "BG",
            "alpha3": "BGR",
            "countryCallingCodes": [
                "+359"
            ],
            "currencies": [
                "BGN"
            ],
            "ioc": "BUL",
            "name": "Bulgaria",
            "status": "assigned"
        },
        {
            "alpha2": "BH",
            "alpha3": "BHR",
            "countryCallingCodes": [
                "+973"
            ],
            "currencies": [
                "BHD"
            ],
            "ioc": "BRN",
            "name": "Bahrain",
            "status": "assigned"
        },
        {
            "alpha2": "BI",
            "alpha3": "BDI",
            "countryCallingCodes": [
                "+257"
            ],
            "currencies": [
                "BIF"
            ],
            "ioc": "BDI",
            "name": "Burundi",
            "status": "assigned"
        },
        {
            "alpha2": "BJ",
            "alpha3": "BEN",
            "countryCallingCodes": [
                "+229"
            ],
            "currencies": [
                "XOF"
            ],
            "ioc": "BEN",
            "name": "Benin",
            "status": "assigned"
        },
        {
            "alpha2": "BL",
            "alpha3": "BLM",
            "countryCallingCodes": [
                "+590"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "",
            "name": "Saint Barthélemy",
            "status": "assigned"
        },
        {
            "alpha2": "BM",
            "alpha3": "BMU",
            "countryCallingCodes": [
                "+1 441"
            ],
            "currencies": [
                "BMD"
            ],
            "ioc": "BER",
            "name": "Bermuda",
            "status": "assigned"
        },
        {
            "alpha2": "BN",
            "alpha3": "BRN",
            "countryCallingCodes": [
                "+673"
            ],
            "currencies": [
                "BND"
            ],
            "ioc": "BRU",
            "name": "Brunei Darussalam",
            "status": "assigned"
        },
        {
            "alpha2": "BO",
            "alpha3": "BOL",
            "countryCallingCodes": [
                "+591"
            ],
            "currencies": [
                "BOB",
                "BOV"
            ],
            "ioc": "BOL",
            "name": "Bolivia, Plurinational State Of",
            "status": "assigned"
        },
        {
            "alpha2": "BQ",
            "alpha3": "BES",
            "countryCallingCodes": [
                "+599"
            ],
            "currencies": [
                "USD"
            ],
            "ioc": "",
            "name": "Bonaire, Saint Eustatius And Saba",
            "status": "assigned"
        },
        {
            "alpha2": "BR",
            "alpha3": "BRA",
            "countryCallingCodes": [
                "+55"
            ],
            "currencies": [
                "BRL"
            ],
            "ioc": "BRA",
            "name": "Brazil",
            "status": "assigned"
        },
        {
            "alpha2": "BS",
            "alpha3": "BHS",
            "countryCallingCodes": [
                "+1 242"
            ],
            "currencies": [
                "BSD"
            ],
            "ioc": "BAH",
            "name": "Bahamas",
            "status": "assigned"
        },
        {
            "alpha2": "BT",
            "alpha3": "BTN",
            "countryCallingCodes": [
                "+975"
            ],
            "currencies": [
                "INR",
                "BTN"
            ],
            "ioc": "BHU",
            "name": "Bhutan",
            "status": "assigned"
        },
        {
            "alpha2": "BV",
            "alpha3": "BVT",
            "countryCallingCodes": [],
            "currencies": [
                "NOK"
            ],
            "ioc": "",
            "name": "Bouvet Island",
            "status": "assigned"
        },
        {
            "alpha2": "BW",
            "alpha3": "BWA",
            "countryCallingCodes": [
                "+267"
            ],
            "currencies": [
                "BWP"
            ],
            "ioc": "BOT",
            "name": "Botswana",
            "status": "assigned"
        },
        {
            "alpha2": "BY",
            "alpha3": "BLR",
            "countryCallingCodes": [
                "+375"
            ],
            "currencies": [
                "BYR"
            ],
            "ioc": "BLR",
            "name": "Belarus",
            "status": "assigned"
        },
        {
            "alpha2": "BZ",
            "alpha3": "BLZ",
            "countryCallingCodes": [
                "+501"
            ],
            "currencies": [
                "BZD"
            ],
            "ioc": "BIZ",
            "name": "Belize",
            "status": "assigned"
        },
        {
            "alpha2": "CA",
            "alpha3": "CAN",
            "countryCallingCodes": [
                "+1"
            ],
            "currencies": [
                "CAD"
            ],
            "ioc": "CAN",
            "name": "Canada",
            "status": "assigned"
        },
        {
            "alpha2": "CC",
            "alpha3": "CCK",
            "countryCallingCodes": [
                "+61"
            ],
            "currencies": [
                "AUD"
            ],
            "ioc": "",
            "name": "Cocos (Keeling) Islands",
            "status": "assigned"
        },
        {
            "alpha2": "CD",
            "alpha3": "COD",
            "countryCallingCodes": [
                "+243"
            ],
            "currencies": [
                "CDF"
            ],
            "ioc": "COD",
            "name": "Democratic Republic Of Congo",
            "status": "assigned"
        },
        {
            "alpha2": "CF",
            "alpha3": "CAF",
            "countryCallingCodes": [
                "+236"
            ],
            "currencies": [
                "XAF"
            ],
            "ioc": "CAF",
            "name": "Central African Republic",
            "status": "assigned"
        },
        {
            "alpha2": "CG",
            "alpha3": "COG",
            "countryCallingCodes": [
                "+242"
            ],
            "currencies": [
                "XAF"
            ],
            "ioc": "CGO",
            "name": "Republic Of Congo",
            "status": "assigned"
        },
        {
            "alpha2": "CH",
            "alpha3": "CHE",
            "countryCallingCodes": [
                "+41"
            ],
            "currencies": [
                "CHF",
                "CHE",
                "CHW"
            ],
            "ioc": "SUI",
            "name": "Switzerland",
            "status": "assigned"
        },
        {
            "alpha2": "CI",
            "alpha3": "CIV",
            "countryCallingCodes": [
                "+225"
            ],
            "currencies": [
                "XOF"
            ],
            "ioc": "CIV",
            "name": "Cote d'Ivoire",
            "status": "assigned"
        },
        {
            "alpha2": "CK",
            "alpha3": "COK",
            "countryCallingCodes": [
                "+682"
            ],
            "currencies": [
                "NZD"
            ],
            "ioc": "COK",
            "name": "Cook Islands",
            "status": "assigned"
        },
        {
            "alpha2": "CL",
            "alpha3": "CHL",
            "countryCallingCodes": [
                "+56"
            ],
            "currencies": [
                "CLP",
                "CLF"
            ],
            "ioc": "CHI",
            "name": "Chile",
            "status": "assigned"
        },
        {
            "alpha2": "CM",
            "alpha3": "CMR",
            "countryCallingCodes": [
                "+237"
            ],
            "currencies": [
                "XAF"
            ],
            "ioc": "CMR",
            "name": "Cameroon",
            "status": "assigned"
        },
        {
            "alpha2": "CN",
            "alpha3": "CHN",
            "countryCallingCodes": [
                "+86"
            ],
            "currencies": [
                "CNY"
            ],
            "ioc": "CHN",
            "name": "China",
            "status": "assigned"
        },
        {
            "alpha2": "CO",
            "alpha3": "COL",
            "countryCallingCodes": [
                "+57"
            ],
            "currencies": [
                "COP",
                "COU"
            ],
            "ioc": "COL",
            "name": "Colombia",
            "status": "assigned"
        },
        {
            "alpha2": "CP",
            "alpha3": "",
            "countryCallingCodes": [],
            "currencies": [
                "EUR"
            ],
            "ioc": "",
            "name": "Clipperton Island",
            "status": "reserved"
        },
        {
            "alpha2": "CR",
            "alpha3": "CRI",
            "countryCallingCodes": [
                "+506"
            ],
            "currencies": [
                "CRC"
            ],
            "ioc": "CRC",
            "name": "Costa Rica",
            "status": "assigned"
        },
        {
            "alpha2": "CU",
            "alpha3": "CUB",
            "countryCallingCodes": [
                "+53"
            ],
            "currencies": [
                "CUP",
                "CUC"
            ],
            "ioc": "CUB",
            "name": "Cuba",
            "status": "assigned"
        },
        {
            "alpha2": "CV",
            "alpha3": "CPV",
            "countryCallingCodes": [
                "+238"
            ],
            "currencies": [
                "CVE"
            ],
            "ioc": "CPV",
            "name": "Cape Verde",
            "status": "assigned"
        },
        {
            "alpha2": "CW",
            "alpha3": "CUW",
            "countryCallingCodes": [
                "+599"
            ],
            "currencies": [
                "ANG"
            ],
            "ioc": "",
            "name": "Curacao",
            "status": "assigned"
        },
        {
            "alpha2": "CX",
            "alpha3": "CXR",
            "countryCallingCodes": [
                "+61"
            ],
            "currencies": [
                "AUD"
            ],
            "ioc": "",
            "name": "Christmas Island",
            "status": "assigned"
        },
        {
            "alpha2": "CY",
            "alpha3": "CYP",
            "countryCallingCodes": [
                "+357"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "CYP",
            "name": "Cyprus",
            "status": "assigned"
        },
        {
            "alpha2": "CZ",
            "alpha3": "CZE",
            "countryCallingCodes": [
                "+420"
            ],
            "currencies": [
                "CZK"
            ],
            "ioc": "CZE",
            "name": "Czech Republic",
            "status": "assigned"
        },
        {
            "alpha2": "DE",
            "alpha3": "DEU",
            "countryCallingCodes": [
                "+49"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "GER",
            "name": "Germany",
            "status": "assigned"
        },
        {
            "alpha2": "DG",
            "alpha3": "",
            "countryCallingCodes": [],
            "currencies": [
                "USD"
            ],
            "ioc": "",
            "name": "Diego Garcia",
            "status": "reserved"
        },
        {
            "alpha2": "DJ",
            "alpha3": "DJI",
            "countryCallingCodes": [
                "+253"
            ],
            "currencies": [
                "DJF"
            ],
            "ioc": "DJI",
            "name": "Djibouti",
            "status": "assigned"
        },
        {
            "alpha2": "DK",
            "alpha3": "DNK",
            "countryCallingCodes": [
                "+45"
            ],
            "currencies": [
                "DKK"
            ],
            "ioc": "DEN",
            "name": "Denmark",
            "status": "assigned"
        },
        {
            "alpha2": "DM",
            "alpha3": "DMA",
            "countryCallingCodes": [
                "+1 767"
            ],
            "currencies": [
                "XCD"
            ],
            "ioc": "DMA",
            "name": "Dominica",
            "status": "assigned"
        },
        {
            "alpha2": "DO",
            "alpha3": "DOM",
            "countryCallingCodes": [
                "+1 809",
                "+1 829",
                "+1 849"
            ],
            "currencies": [
                "DOP"
            ],
            "ioc": "DOM",
            "name": "Dominican Republic",
            "status": "assigned"
        },
        {
            "alpha2": "DZ",
            "alpha3": "DZA",
            "countryCallingCodes": [
                "+213"
            ],
            "currencies": [
                "DZD"
            ],
            "ioc": "ALG",
            "name": "Algeria",
            "status": "assigned"
        },
        {
            "alpha2": "EA",
            "alpha3": "",
            "countryCallingCodes": [],
            "currencies": [
                "EUR"
            ],
            "ioc": "",
            "name": "Ceuta, Mulilla",
            "status": "reserved"
        },
        {
            "alpha2": "EC",
            "alpha3": "ECU",
            "countryCallingCodes": [
                "+593"
            ],
            "currencies": [
                "USD"
            ],
            "ioc": "ECU",
            "name": "Ecuador",
            "status": "assigned"
        },
        {
            "alpha2": "EE",
            "alpha3": "EST",
            "countryCallingCodes": [
                "+372"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "EST",
            "name": "Estonia",
            "status": "assigned"
        },
        {
            "alpha2": "EG",
            "alpha3": "EGY",
            "countryCallingCodes": [
                "+20"
            ],
            "currencies": [
                "EGP"
            ],
            "ioc": "EGY",
            "name": "Egypt",
            "status": "assigned"
        },
        {
            "alpha2": "EH",
            "alpha3": "ESH",
            "countryCallingCodes": [
                "+212"
            ],
            "currencies": [
                "MAD"
            ],
            "ioc": "",
            "name": "Western Sahara",
            "status": "assigned"
        },
        {
            "alpha2": "ER",
            "alpha3": "ERI",
            "countryCallingCodes": [
                "+291"
            ],
            "currencies": [
                "ERN"
            ],
            "ioc": "ERI",
            "name": "Eritrea",
            "status": "assigned"
        },
        {
            "alpha2": "ES",
            "alpha3": "ESP",
            "countryCallingCodes": [
                "+34"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "ESP",
            "name": "Spain",
            "status": "assigned"
        },
        {
            "alpha2": "ET",
            "alpha3": "ETH",
            "countryCallingCodes": [
                "+251"
            ],
            "currencies": [
                "ETB"
            ],
            "ioc": "ETH",
            "name": "Ethiopia",
            "status": "assigned"
        },
        {
            "alpha2": "EU",
            "alpha3": "",
            "countryCallingCodes": [
                "+388"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "",
            "name": "European Union",
            "status": "reserved"
        },
        {
            "alpha2": "FI",
            "alpha3": "FIN",
            "countryCallingCodes": [
                "+358"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "FIN",
            "name": "Finland",
            "status": "assigned"
        },
        {
            "alpha2": "FJ",
            "alpha3": "FJI",
            "countryCallingCodes": [
                "+679"
            ],
            "currencies": [
                "FJD"
            ],
            "ioc": "FIJ",
            "name": "Fiji",
            "status": "assigned"
        },
        {
            "alpha2": "FK",
            "alpha3": "FLK",
            "countryCallingCodes": [
                "+500"
            ],
            "currencies": [
                "FKP"
            ],
            "ioc": "",
            "name": "Falkland Islands",
            "status": "assigned"
        },
        {
            "alpha2": "FM",
            "alpha3": "FSM",
            "countryCallingCodes": [
                "+691"
            ],
            "currencies": [
                "USD"
            ],
            "ioc": "",
            "name": "Micronesia, Federated States Of",
            "status": "assigned"
        },
        {
            "alpha2": "FO",
            "alpha3": "FRO",
            "countryCallingCodes": [
                "+298"
            ],
            "currencies": [
                "DKK"
            ],
            "ioc": "FAI",
            "name": "Faroe Islands",
            "status": "assigned"
        },
        {
            "alpha2": "FR",
            "alpha3": "FRA",
            "countryCallingCodes": [
                "+33"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "FRA",
            "name": "France",
            "status": "assigned"
        },
        {
            "alpha2": "FX",
            "alpha3": "",
            "countryCallingCodes": [
                "+241"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "",
            "name": "France, Metropolitan",
            "status": "reserved"
        },
        {
            "alpha2": "GA",
            "alpha3": "GAB",
            "countryCallingCodes": [
                "+241"
            ],
            "currencies": [
                "XAF"
            ],
            "ioc": "GAB",
            "name": "Gabon",
            "status": "assigned"
        },
        {
            "alpha2": "GB",
            "alpha3": "GBR",
            "countryCallingCodes": [
                "+44"
            ],
            "currencies": [
                "GBP"
            ],
            "ioc": "GBR",
            "name": "United Kingdom",
            "status": "assigned"
        },
        {
            "alpha2": "GD",
            "alpha3": "GRD",
            "countryCallingCodes": [
                "+473"
            ],
            "currencies": [
                "XCD"
            ],
            "ioc": "GRN",
            "name": "Grenada",
            "status": "assigned"
        },
        {
            "alpha2": "GE",
            "alpha3": "GEO",
            "countryCallingCodes": [
                "+995"
            ],
            "currencies": [
                "GEL"
            ],
            "ioc": "GEO",
            "name": "Georgia",
            "status": "assigned"
        },
        {
            "alpha2": "GF",
            "alpha3": "GUF",
            "countryCallingCodes": [
                "+594"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "",
            "name": "French Guiana",
            "status": "assigned"
        },
        {
            "alpha2": "GG",
            "alpha3": "GGY",
            "countryCallingCodes": [
                "+44"
            ],
            "currencies": [
                "GBP"
            ],
            "ioc": "GCI",
            "name": "Guernsey",
            "status": "assigned"
        },
        {
            "alpha2": "GH",
            "alpha3": "GHA",
            "countryCallingCodes": [
                "+233"
            ],
            "currencies": [
                "GHS"
            ],
            "ioc": "GHA",
            "name": "Ghana",
            "status": "assigned"
        },
        {
            "alpha2": "GI",
            "alpha3": "GIB",
            "countryCallingCodes": [
                "+350"
            ],
            "currencies": [
                "GIP"
            ],
            "ioc": "",
            "name": "Gibraltar",
            "status": "assigned"
        },
        {
            "alpha2": "GL",
            "alpha3": "GRL",
            "countryCallingCodes": [
                "+299"
            ],
            "currencies": [
                "DKK"
            ],
            "ioc": "",
            "name": "Greenland",
            "status": "assigned"
        },
        {
            "alpha2": "GM",
            "alpha3": "GMB",
            "countryCallingCodes": [
                "+220"
            ],
            "currencies": [
                "GMD"
            ],
            "ioc": "GAM",
            "name": "Gambia",
            "status": "assigned"
        },
        {
            "alpha2": "GN",
            "alpha3": "GIN",
            "countryCallingCodes": [
                "+224"
            ],
            "currencies": [
                "GNF"
            ],
            "ioc": "GUI",
            "name": "Guinea",
            "status": "assigned"
        },
        {
            "alpha2": "GP",
            "alpha3": "GLP",
            "countryCallingCodes": [
                "+590"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "",
            "name": "Guadeloupe",
            "status": "assigned"
        },
        {
            "alpha2": "GQ",
            "alpha3": "GNQ",
            "countryCallingCodes": [
                "+240"
            ],
            "currencies": [
                "XAF"
            ],
            "ioc": "GEQ",
            "name": "Equatorial Guinea",
            "status": "assigned"
        },
        {
            "alpha2": "GR",
            "alpha3": "GRC",
            "countryCallingCodes": [
                "+30"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "GRE",
            "name": "Greece",
            "status": "assigned"
        },
        {
            "alpha2": "GS",
            "alpha3": "SGS",
            "countryCallingCodes": [],
            "currencies": [
                "GBP"
            ],
            "ioc": "",
            "name": "South Georgia And The South Sandwich Islands",
            "status": "assigned"
        },
        {
            "alpha2": "GT",
            "alpha3": "GTM",
            "countryCallingCodes": [
                "+502"
            ],
            "currencies": [
                "GTQ"
            ],
            "ioc": "GUA",
            "name": "Guatemala",
            "status": "assigned"
        },
        {
            "alpha2": "GU",
            "alpha3": "GUM",
            "countryCallingCodes": [
                "+1 671"
            ],
            "currencies": [
                "USD"
            ],
            "ioc": "GUM",
            "name": "Guam",
            "status": "assigned"
        },
        {
            "alpha2": "GW",
            "alpha3": "GNB",
            "countryCallingCodes": [
                "+245"
            ],
            "currencies": [
                "XOF"
            ],
            "ioc": "GBS",
            "name": "Guinea-bissau",
            "status": "assigned"
        },
        {
            "alpha2": "GY",
            "alpha3": "GUY",
            "countryCallingCodes": [
                "+592"
            ],
            "currencies": [
                "GYD"
            ],
            "ioc": "GUY",
            "name": "Guyana",
            "status": "assigned"
        },
        {
            "alpha2": "HK",
            "alpha3": "HKG",
            "countryCallingCodes": [
                "+852"
            ],
            "currencies": [
                "HKD"
            ],
            "ioc": "HKG",
            "name": "Hong Kong",
            "status": "assigned"
        },
        {
            "alpha2": "HM",
            "alpha3": "HMD",
            "countryCallingCodes": [],
            "currencies": [
                "AUD"
            ],
            "ioc": "",
            "name": "Heard Island And McDonald Islands",
            "status": "assigned"
        },
        {
            "alpha2": "HN",
            "alpha3": "HND",
            "countryCallingCodes": [
                "+504"
            ],
            "currencies": [
                "HNL"
            ],
            "ioc": "HON",
            "name": "Honduras",
            "status": "assigned"
        },
        {
            "alpha2": "HR",
            "alpha3": "HRV",
            "countryCallingCodes": [
                "+385"
            ],
            "currencies": [
                "HRK"
            ],
            "ioc": "CRO",
            "name": "Croatia",
            "status": "assigned"
        },
        {
            "alpha2": "HT",
            "alpha3": "HTI",
            "countryCallingCodes": [
                "+509"
            ],
            "currencies": [
                "HTG",
                "USD"
            ],
            "ioc": "HAI",
            "name": "Haiti",
            "status": "assigned"
        },
        {
            "alpha2": "HU",
            "alpha3": "HUN",
            "countryCallingCodes": [
                "+36"
            ],
            "currencies": [
                "HUF"
            ],
            "ioc": "HUN",
            "name": "Hungary",
            "status": "assigned"
        },
        {
            "alpha2": "IC",
            "alpha3": "",
            "countryCallingCodes": [],
            "currencies": [
                "EUR"
            ],
            "ioc": "",
            "name": "Canary Islands",
            "status": "reserved"
        },
        {
            "alpha2": "ID",
            "alpha3": "IDN",
            "countryCallingCodes": [
                "+62"
            ],
            "currencies": [
                "IDR"
            ],
            "ioc": "INA",
            "name": "Indonesia",
            "status": "assigned"
        },
        {
            "alpha2": "IE",
            "alpha3": "IRL",
            "countryCallingCodes": [
                "+353"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "IRL",
            "name": "Ireland",
            "status": "assigned"
        },
        {
            "alpha2": "IL",
            "alpha3": "ISR",
            "countryCallingCodes": [
                "+972"
            ],
            "currencies": [
                "ILS"
            ],
            "ioc": "ISR",
            "name": "Israel",
            "status": "assigned"
        },
        {
            "alpha2": "IM",
            "alpha3": "IMN",
            "countryCallingCodes": [
                "+44"
            ],
            "currencies": [
                "GBP"
            ],
            "ioc": "",
            "name": "Isle Of Man",
            "status": "assigned"
        },
        {
            "alpha2": "IN",
            "alpha3": "IND",
            "countryCallingCodes": [
                "+91"
            ],
            "currencies": [
                "INR"
            ],
            "ioc": "IND",
            "name": "India",
            "status": "assigned"
        },
        {
            "alpha2": "IO",
            "alpha3": "IOT",
            "countryCallingCodes": [
                "+246"
            ],
            "currencies": [
                "USD"
            ],
            "ioc": "",
            "name": "British Indian Ocean Territory",
            "status": "assigned"
        },
        {
            "alpha2": "IQ",
            "alpha3": "IRQ",
            "countryCallingCodes": [
                "+964"
            ],
            "currencies": [
                "IQD"
            ],
            "ioc": "IRQ",
            "name": "Iraq",
            "status": "assigned"
        },
        {
            "alpha2": "IR",
            "alpha3": "IRN",
            "countryCallingCodes": [
                "+98"
            ],
            "currencies": [
                "IRR"
            ],
            "ioc": "IRI",
            "name": "Iran, Islamic Republic Of",
            "status": "assigned"
        },
        {
            "alpha2": "IS",
            "alpha3": "ISL",
            "countryCallingCodes": [
                "+354"
            ],
            "currencies": [
                "ISK"
            ],
            "ioc": "ISL",
            "name": "Iceland",
            "status": "assigned"
        },
        {
            "alpha2": "IT",
            "alpha3": "ITA",
            "countryCallingCodes": [
                "+39"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "ITA",
            "name": "Italy",
            "status": "assigned"
        },
        {
            "alpha2": "JE",
            "alpha3": "JEY",
            "countryCallingCodes": [
                "+44"
            ],
            "currencies": [
                "GBP"
            ],
            "ioc": "JCI",
            "name": "Jersey",
            "status": "assigned"
        },
        {
            "alpha2": "JM",
            "alpha3": "JAM",
            "countryCallingCodes": [
                "+1 876"
            ],
            "currencies": [
                "JMD"
            ],
            "ioc": "JAM",
            "name": "Jamaica",
            "status": "assigned"
        },
        {
            "alpha2": "JO",
            "alpha3": "JOR",
            "countryCallingCodes": [
                "+962"
            ],
            "currencies": [
                "JOD"
            ],
            "ioc": "JOR",
            "name": "Jordan",
            "status": "assigned"
        },
        {
            "alpha2": "JP",
            "alpha3": "JPN",
            "countryCallingCodes": [
                "+81"
            ],
            "currencies": [
                "JPY"
            ],
            "ioc": "JPN",
            "name": "Japan",
            "status": "assigned"
        },
        {
            "alpha2": "KE",
            "alpha3": "KEN",
            "countryCallingCodes": [
                "+254"
            ],
            "currencies": [
                "KES"
            ],
            "ioc": "KEN",
            "name": "Kenya",
            "status": "assigned"
        },
        {
            "alpha2": "KG",
            "alpha3": "KGZ",
            "countryCallingCodes": [
                "+996"
            ],
            "currencies": [
                "KGS"
            ],
            "ioc": "KGZ",
            "name": "Kyrgyzstan",
            "status": "assigned"
        },
        {
            "alpha2": "KH",
            "alpha3": "KHM",
            "countryCallingCodes": [
                "+855"
            ],
            "currencies": [
                "KHR"
            ],
            "ioc": "CAM",
            "name": "Cambodia",
            "status": "assigned"
        },
        {
            "alpha2": "KI",
            "alpha3": "KIR",
            "countryCallingCodes": [
                "+686"
            ],
            "currencies": [
                "AUD"
            ],
            "ioc": "KIR",
            "name": "Kiribati",
            "status": "assigned"
        },
        {
            "alpha2": "KM",
            "alpha3": "COM",
            "countryCallingCodes": [
                "+269"
            ],
            "currencies": [
                "KMF"
            ],
            "ioc": "COM",
            "name": "Comoros",
            "status": "assigned"
        },
        {
            "alpha2": "KN",
            "alpha3": "KNA",
            "countryCallingCodes": [
                "+1 869"
            ],
            "currencies": [
                "XCD"
            ],
            "ioc": "SKN",
            "name": "Saint Kitts And Nevis",
            "status": "assigned"
        },
        {
            "alpha2": "KP",
            "alpha3": "PRK",
            "countryCallingCodes": [
                "+850"
            ],
            "currencies": [
                "KPW"
            ],
            "ioc": "PRK",
            "name": "Korea, Democratic People's Republic Of",
            "status": "assigned"
        },
        {
            "alpha2": "KR",
            "alpha3": "KOR",
            "countryCallingCodes": [
                "+82"
            ],
            "currencies": [
                "KRW"
            ],
            "ioc": "KOR",
            "name": "Korea, Republic Of",
            "status": "assigned"
        },
        {
            "alpha2": "KW",
            "alpha3": "KWT",
            "countryCallingCodes": [
                "+965"
            ],
            "currencies": [
                "KWD"
            ],
            "ioc": "KUW",
            "name": "Kuwait",
            "status": "assigned"
        },
        {
            "alpha2": "KY",
            "alpha3": "CYM",
            "countryCallingCodes": [
                "+1 345"
            ],
            "currencies": [
                "KYD"
            ],
            "ioc": "CAY",
            "name": "Cayman Islands",
            "status": "assigned"
        },
        {
            "alpha2": "KZ",
            "alpha3": "KAZ",
            "countryCallingCodes": [
                "+7",
                "+7 6",
                "+7 7"
            ],
            "currencies": [
                "KZT"
            ],
            "ioc": "KAZ",
            "name": "Kazakhstan",
            "status": "assigned"
        },
        {
            "alpha2": "LA",
            "alpha3": "LAO",
            "countryCallingCodes": [
                "+856"
            ],
            "currencies": [
                "LAK"
            ],
            "ioc": "LAO",
            "name": "Lao People's Democratic Republic",
            "status": "assigned"
        },
        {
            "alpha2": "LB",
            "alpha3": "LBN",
            "countryCallingCodes": [
                "+961"
            ],
            "currencies": [
                "LBP"
            ],
            "ioc": "LIB",
            "name": "Lebanon",
            "status": "assigned"
        },
        {
            "alpha2": "LC",
            "alpha3": "LCA",
            "countryCallingCodes": [
                "+1 758"
            ],
            "currencies": [
                "XCD"
            ],
            "ioc": "LCA",
            "name": "Saint Lucia",
            "status": "assigned"
        },
        {
            "alpha2": "LI",
            "alpha3": "LIE",
            "countryCallingCodes": [
                "+423"
            ],
            "currencies": [
                "CHF"
            ],
            "ioc": "LIE",
            "name": "Liechtenstein",
            "status": "assigned"
        },
        {
            "alpha2": "LK",
            "alpha3": "LKA",
            "countryCallingCodes": [
                "+94"
            ],
            "currencies": [
                "LKR"
            ],
            "ioc": "SRI",
            "name": "Sri Lanka",
            "status": "assigned"
        },
        {
            "alpha2": "LR",
            "alpha3": "LBR",
            "countryCallingCodes": [
                "+231"
            ],
            "currencies": [
                "LRD"
            ],
            "ioc": "LBR",
            "name": "Liberia",
            "status": "assigned"
        },
        {
            "alpha2": "LS",
            "alpha3": "LSO",
            "countryCallingCodes": [
                "+266"
            ],
            "currencies": [
                "LSL",
                "ZAR"
            ],
            "ioc": "LES",
            "name": "Lesotho",
            "status": "assigned"
        },
        {
            "alpha2": "LT",
            "alpha3": "LTU",
            "countryCallingCodes": [
                "+370"
            ],
            "currencies": [
                "LTL"
            ],
            "ioc": "LTU",
            "name": "Lithuania",
            "status": "assigned"
        },
        {
            "alpha2": "LU",
            "alpha3": "LUX",
            "countryCallingCodes": [
                "+352"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "LUX",
            "name": "Luxembourg",
            "status": "assigned"
        },
        {
            "alpha2": "LV",
            "alpha3": "LVA",
            "countryCallingCodes": [
                "+371"
            ],
            "currencies": [
                "LVL"
            ],
            "ioc": "LAT",
            "name": "Latvia",
            "status": "assigned"
        },
        {
            "alpha2": "LY",
            "alpha3": "LBY",
            "countryCallingCodes": [
                "+218"
            ],
            "currencies": [
                "LYD"
            ],
            "ioc": "LBA",
            "name": "Libya",
            "status": "assigned"
        },
        {
            "alpha2": "MA",
            "alpha3": "MAR",
            "countryCallingCodes": [
                "+212"
            ],
            "currencies": [
                "MAD"
            ],
            "ioc": "MAR",
            "name": "Morocco",
            "status": "assigned"
        },
        {
            "alpha2": "MC",
            "alpha3": "MCO",
            "countryCallingCodes": [
                "+377"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "MON",
            "name": "Monaco",
            "status": "assigned"
        },
        {
            "alpha2": "MD",
            "alpha3": "MDA",
            "countryCallingCodes": [
                "+373"
            ],
            "currencies": [
                "MDL"
            ],
            "ioc": "MDA",
            "name": "Moldova",
            "status": "assigned"
        },
        {
            "alpha2": "ME",
            "alpha3": "MNE",
            "countryCallingCodes": [
                "+382"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "MNE",
            "name": "Montenegro",
            "status": "assigned"
        },
        {
            "alpha2": "MF",
            "alpha3": "MAF",
            "countryCallingCodes": [
                "+590"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "",
            "name": "Saint Martin",
            "status": "assigned"
        },
        {
            "alpha2": "MG",
            "alpha3": "MDG",
            "countryCallingCodes": [
                "+261"
            ],
            "currencies": [
                "MGA"
            ],
            "ioc": "MAD",
            "name": "Madagascar",
            "status": "assigned"
        },
        {
            "alpha2": "MH",
            "alpha3": "MHL",
            "countryCallingCodes": [
                "+692"
            ],
            "currencies": [
                "USD"
            ],
            "ioc": "MHL",
            "name": "Marshall Islands",
            "status": "assigned"
        },
        {
            "alpha2": "MK",
            "alpha3": "MKD",
            "countryCallingCodes": [
                "+389"
            ],
            "currencies": [
                "MKD"
            ],
            "ioc": "MKD",
            "name": "Macedonia, The Former Yugoslav Republic Of",
            "status": "assigned"
        },
        {
            "alpha2": "ML",
            "alpha3": "MLI",
            "countryCallingCodes": [
                "+223"
            ],
            "currencies": [
                "XOF"
            ],
            "ioc": "MLI",
            "name": "Mali",
            "status": "assigned"
        },
        {
            "alpha2": "MM",
            "alpha3": "MMR",
            "countryCallingCodes": [
                "+95"
            ],
            "currencies": [
                "MMK"
            ],
            "ioc": "MYA",
            "name": "Myanmar",
            "status": "assigned"
        },
        {
            "alpha2": "MN",
            "alpha3": "MNG",
            "countryCallingCodes": [
                "+976"
            ],
            "currencies": [
                "MNT"
            ],
            "ioc": "MGL",
            "name": "Mongolia",
            "status": "assigned"
        },
        {
            "alpha2": "MO",
            "alpha3": "MAC",
            "countryCallingCodes": [
                "+853"
            ],
            "currencies": [
                "MOP"
            ],
            "ioc": "MAC",
            "name": "Macao",
            "status": "assigned"
        },
        {
            "alpha2": "MP",
            "alpha3": "MNP",
            "countryCallingCodes": [
                "+1 670"
            ],
            "currencies": [
                "USD"
            ],
            "ioc": "",
            "name": "Northern Mariana Islands",
            "status": "assigned"
        },
        {
            "alpha2": "MQ",
            "alpha3": "MTQ",
            "countryCallingCodes": [
                "+596"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "",
            "name": "Martinique",
            "status": "assigned"
        },
        {
            "alpha2": "MR",
            "alpha3": "MRT",
            "countryCallingCodes": [
                "+222"
            ],
            "currencies": [
                "MRO"
            ],
            "ioc": "MTN",
            "name": "Mauritania",
            "status": "assigned"
        },
        {
            "alpha2": "MS",
            "alpha3": "MSR",
            "countryCallingCodes": [
                "+1 664"
            ],
            "currencies": [
                "XCD"
            ],
            "ioc": "",
            "name": "Montserrat",
            "status": "assigned"
        },
        {
            "alpha2": "MT",
            "alpha3": "MLT",
            "countryCallingCodes": [
                "+356"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "MLT",
            "name": "Malta",
            "status": "assigned"
        },
        {
            "alpha2": "MU",
            "alpha3": "MUS",
            "countryCallingCodes": [
                "+230"
            ],
            "currencies": [
                "MUR"
            ],
            "ioc": "MRI",
            "name": "Mauritius",
            "status": "assigned"
        },
        {
            "alpha2": "MV",
            "alpha3": "MDV",
            "countryCallingCodes": [
                "+960"
            ],
            "currencies": [
                "MVR"
            ],
            "ioc": "MDV",
            "name": "Maldives",
            "status": "assigned"
        },
        {
            "alpha2": "MW",
            "alpha3": "MWI",
            "countryCallingCodes": [
                "+265"
            ],
            "currencies": [
                "MWK"
            ],
            "ioc": "MAW",
            "name": "Malawi",
            "status": "assigned"
        },
        {
            "alpha2": "MX",
            "alpha3": "MEX",
            "countryCallingCodes": [
                "+52"
            ],
            "currencies": [
                "MXN",
                "MXV"
            ],
            "ioc": "MEX",
            "name": "Mexico",
            "status": "assigned"
        },
        {
            "alpha2": "MY",
            "alpha3": "MYS",
            "countryCallingCodes": [
                "+60"
            ],
            "currencies": [
                "MYR"
            ],
            "ioc": "MAS",
            "name": "Malaysia",
            "status": "assigned"
        },
        {
            "alpha2": "MZ",
            "alpha3": "MOZ",
            "countryCallingCodes": [
                "+258"
            ],
            "currencies": [
                "MZN"
            ],
            "ioc": "MOZ",
            "name": "Mozambique",
            "status": "assigned"
        },
        {
            "alpha2": "NA",
            "alpha3": "NAM",
            "countryCallingCodes": [
                "+264"
            ],
            "currencies": [
                "NAD",
                "ZAR"
            ],
            "ioc": "NAM",
            "name": "Namibia",
            "status": "assigned"
        },
        {
            "alpha2": "NC",
            "alpha3": "NCL",
            "countryCallingCodes": [
                "+687"
            ],
            "currencies": [
                "XPF"
            ],
            "ioc": "",
            "name": "New Caledonia",
            "status": "assigned"
        },
        {
            "alpha2": "NE",
            "alpha3": "NER",
            "countryCallingCodes": [
                "+227"
            ],
            "currencies": [
                "XOF"
            ],
            "ioc": "NIG",
            "name": "Niger",
            "status": "assigned"
        },
        {
            "alpha2": "NF",
            "alpha3": "NFK",
            "countryCallingCodes": [
                "+672"
            ],
            "currencies": [
                "AUD"
            ],
            "ioc": "",
            "name": "Norfolk Island",
            "status": "assigned"
        },
        {
            "alpha2": "NG",
            "alpha3": "NGA",
            "countryCallingCodes": [
                "+234"
            ],
            "currencies": [
                "NGN"
            ],
            "ioc": "NGR",
            "name": "Nigeria",
            "status": "assigned"
        },
        {
            "alpha2": "NI",
            "alpha3": "NIC",
            "countryCallingCodes": [
                "+505"
            ],
            "currencies": [
                "NIO"
            ],
            "ioc": "NCA",
            "name": "Nicaragua",
            "status": "assigned"
        },
        {
            "alpha2": "NL",
            "alpha3": "NLD",
            "countryCallingCodes": [
                "+31"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "NED",
            "name": "Netherlands",
            "status": "assigned"
        },
        {
            "alpha2": "NO",
            "alpha3": "NOR",
            "countryCallingCodes": [
                "+47"
            ],
            "currencies": [
                "NOK"
            ],
            "ioc": "NOR",
            "name": "Norway",
            "status": "assigned"
        },
        {
            "alpha2": "NP",
            "alpha3": "NPL",
            "countryCallingCodes": [
                "+977"
            ],
            "currencies": [
                "NPR"
            ],
            "ioc": "NEP",
            "name": "Nepal",
            "status": "assigned"
        },
        {
            "alpha2": "NR",
            "alpha3": "NRU",
            "countryCallingCodes": [
                "+674"
            ],
            "currencies": [
                "AUD"
            ],
            "ioc": "NRU",
            "name": "Nauru",
            "status": "assigned"
        },
        {
            "alpha2": "NU",
            "alpha3": "NIU",
            "countryCallingCodes": [
                "+683"
            ],
            "currencies": [
                "NZD"
            ],
            "ioc": "",
            "name": "Niue",
            "status": "assigned"
        },
        {
            "alpha2": "NZ",
            "alpha3": "NZL",
            "countryCallingCodes": [
                "+64"
            ],
            "currencies": [
                "NZD"
            ],
            "ioc": "NZL",
            "name": "New Zealand",
            "status": "assigned"
        },
        {
            "alpha2": "OM",
            "alpha3": "OMN",
            "countryCallingCodes": [
                "+968"
            ],
            "currencies": [
                "OMR"
            ],
            "ioc": "OMA",
            "name": "Oman",
            "status": "assigned"
        },
        {
            "alpha2": "PA",
            "alpha3": "PAN",
            "countryCallingCodes": [
                "+507"
            ],
            "currencies": [
                "PAB",
                "USD"
            ],
            "ioc": "PAN",
            "name": "Panama",
            "status": "assigned"
        },
        {
            "alpha2": "PE",
            "alpha3": "PER",
            "countryCallingCodes": [
                "+51"
            ],
            "currencies": [
                "PEN"
            ],
            "ioc": "PER",
            "name": "Peru",
            "status": "assigned"
        },
        {
            "alpha2": "PF",
            "alpha3": "PYF",
            "countryCallingCodes": [
                "+689"
            ],
            "currencies": [
                "XPF"
            ],
            "ioc": "",
            "name": "French Polynesia",
            "status": "assigned"
        },
        {
            "alpha2": "PG",
            "alpha3": "PNG",
            "countryCallingCodes": [
                "+675"
            ],
            "currencies": [
                "PGK"
            ],
            "ioc": "PNG",
            "name": "Papua New Guinea",
            "status": "assigned"
        },
        {
            "alpha2": "PH",
            "alpha3": "PHL",
            "countryCallingCodes": [
                "+63"
            ],
            "currencies": [
                "PHP"
            ],
            "ioc": "PHI",
            "name": "Philippines",
            "status": "assigned"
        },
        {
            "alpha2": "PK",
            "alpha3": "PAK",
            "countryCallingCodes": [
                "+92"
            ],
            "currencies": [
                "PKR"
            ],
            "ioc": "PAK",
            "name": "Pakistan",
            "status": "assigned"
        },
        {
            "alpha2": "PL",
            "alpha3": "POL",
            "countryCallingCodes": [
                "+48"
            ],
            "currencies": [
                "PLN"
            ],
            "ioc": "POL",
            "name": "Poland",
            "status": "assigned"
        },
        {
            "alpha2": "PM",
            "alpha3": "SPM",
            "countryCallingCodes": [
                "+508"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "",
            "name": "Saint Pierre And Miquelon",
            "status": "assigned"
        },
        {
            "alpha2": "PN",
            "alpha3": "PCN",
            "countryCallingCodes": [],
            "currencies": [
                "NZD"
            ],
            "ioc": "",
            "name": "Pitcairn",
            "status": "assigned"
        },
        {
            "alpha2": "PR",
            "alpha3": "PRI",
            "countryCallingCodes": [
                "+1 787",
                "+1 939"
            ],
            "currencies": [
                "USD"
            ],
            "ioc": "PUR",
            "name": "Puerto Rico",
            "status": "assigned"
        },
        {
            "alpha2": "PS",
            "alpha3": "PSE",
            "countryCallingCodes": [
                "+970"
            ],
            "currencies": [
                "JOD",
                "EGP",
                "ILS"
            ],
            "ioc": "PLE",
            "name": "Palestinian Territory, Occupied",
            "status": "assigned"
        },
        {
            "alpha2": "PT",
            "alpha3": "PRT",
            "countryCallingCodes": [
                "+351"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "POR",
            "name": "Portugal",
            "status": "assigned"
        },
        {
            "alpha2": "PW",
            "alpha3": "PLW",
            "countryCallingCodes": [
                "+680"
            ],
            "currencies": [
                "USD"
            ],
            "ioc": "PLW",
            "name": "Palau",
            "status": "assigned"
        },
        {
            "alpha2": "PY",
            "alpha3": "PRY",
            "countryCallingCodes": [
                "+595"
            ],
            "currencies": [
                "PYG"
            ],
            "ioc": "PAR",
            "name": "Paraguay",
            "status": "assigned"
        },
        {
            "alpha2": "QA",
            "alpha3": "QAT",
            "countryCallingCodes": [
                "+974"
            ],
            "currencies": [
                "QAR"
            ],
            "ioc": "QAT",
            "name": "Qatar",
            "status": "assigned"
        },
        {
            "alpha2": "RE",
            "alpha3": "REU",
            "countryCallingCodes": [
                "+262"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "",
            "name": "Reunion",
            "status": "assigned"
        },
        {
            "alpha2": "RO",
            "alpha3": "ROU",
            "countryCallingCodes": [
                "+40"
            ],
            "currencies": [
                "RON"
            ],
            "ioc": "ROU",
            "name": "Romania",
            "status": "assigned"
        },
        {
            "alpha2": "RS",
            "alpha3": "SRB",
            "countryCallingCodes": [
                "+381"
            ],
            "currencies": [
                "RSD"
            ],
            "ioc": "SRB",
            "name": "Serbia",
            "status": "assigned"
        },
        {
            "alpha2": "RU",
            "alpha3": "RUS",
            "countryCallingCodes": [
                "+7",
                "+7 3",
                "+7 4",
                "+7 8"
            ],
            "currencies": [
                "RUB"
            ],
            "ioc": "RUS",
            "name": "Russian Federation",
            "status": "assigned"
        },
        {
            "alpha2": "RW",
            "alpha3": "RWA",
            "countryCallingCodes": [
                "+250"
            ],
            "currencies": [
                "RWF"
            ],
            "ioc": "RWA",
            "name": "Rwanda",
            "status": "assigned"
        },
        {
            "alpha2": "SA",
            "alpha3": "SAU",
            "countryCallingCodes": [
                "+966"
            ],
            "currencies": [
                "SAR"
            ],
            "ioc": "KSA",
            "name": "Saudi Arabia",
            "status": "assigned"
        },
        {
            "alpha2": "SB",
            "alpha3": "SLB",
            "countryCallingCodes": [
                "+677"
            ],
            "currencies": [
                "SBD"
            ],
            "ioc": "SOL",
            "name": "Solomon Islands",
            "status": "assigned"
        },
        {
            "alpha2": "SC",
            "alpha3": "SYC",
            "countryCallingCodes": [
                "+248"
            ],
            "currencies": [
                "SCR"
            ],
            "ioc": "SEY",
            "name": "Seychelles",
            "status": "assigned"
        },
        {
            "alpha2": "SD",
            "alpha3": "SDN",
            "countryCallingCodes": [
                "+249"
            ],
            "currencies": [
                "SDG"
            ],
            "ioc": "SUD",
            "name": "Sudan",
            "status": "assigned"
        },
        {
            "alpha2": "SE",
            "alpha3": "SWE",
            "countryCallingCodes": [
                "+46"
            ],
            "currencies": [
                "SEK"
            ],
            "ioc": "SWE",
            "name": "Sweden",
            "status": "assigned"
        },
        {
            "alpha2": "SG",
            "alpha3": "SGP",
            "countryCallingCodes": [
                "+65"
            ],
            "currencies": [
                "SGD"
            ],
            "ioc": "SIN",
            "name": "Singapore",
            "status": "assigned"
        },
        {
            "alpha2": "SH",
            "alpha3": "SHN",
            "countryCallingCodes": [
                "+290"
            ],
            "currencies": [
                "SHP"
            ],
            "ioc": "",
            "name": "Saint Helena, Ascension And Tristan Da Cunha",
            "status": "assigned"
        },
        {
            "alpha2": "SI",
            "alpha3": "SVN",
            "countryCallingCodes": [
                "+386"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "SLO",
            "name": "Slovenia",
            "status": "assigned"
        },
        {
            "alpha2": "SJ",
            "alpha3": "SJM",
            "countryCallingCodes": [
                "+47"
            ],
            "currencies": [
                "NOK"
            ],
            "ioc": "",
            "name": "Svalbard And Jan Mayen",
            "status": "assigned"
        },
        {
            "alpha2": "SK",
            "alpha3": "SVK",
            "countryCallingCodes": [
                "+421"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "SVK",
            "name": "Slovakia",
            "status": "assigned"
        },
        {
            "alpha2": "SL",
            "alpha3": "SLE",
            "countryCallingCodes": [
                "+232"
            ],
            "currencies": [
                "SLL"
            ],
            "ioc": "SLE",
            "name": "Sierra Leone",
            "status": "assigned"
        },
        {
            "alpha2": "SM",
            "alpha3": "SMR",
            "countryCallingCodes": [
                "+378"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "SMR",
            "name": "San Marino",
            "status": "assigned"
        },
        {
            "alpha2": "SN",
            "alpha3": "SEN",
            "countryCallingCodes": [
                "+221"
            ],
            "currencies": [
                "XOF"
            ],
            "ioc": "SEN",
            "name": "Senegal",
            "status": "assigned"
        },
        {
            "alpha2": "SO",
            "alpha3": "SOM",
            "countryCallingCodes": [
                "+252"
            ],
            "currencies": [
                "SOS"
            ],
            "ioc": "SOM",
            "name": "Somalia",
            "status": "assigned"
        },
        {
            "alpha2": "SR",
            "alpha3": "SUR",
            "countryCallingCodes": [
                "+597"
            ],
            "currencies": [
                "SRD"
            ],
            "ioc": "SUR",
            "name": "Suriname",
            "status": "assigned"
        },
        {
            "alpha2": "SS",
            "alpha3": "SSD",
            "countryCallingCodes": [
                "+211"
            ],
            "currencies": [
                "SSP"
            ],
            "ioc": "",
            "name": "South Sudan",
            "status": "assigned"
        },
        {
            "alpha2": "ST",
            "alpha3": "STP",
            "countryCallingCodes": [
                "+239"
            ],
            "currencies": [
                "STD"
            ],
            "ioc": "STP",
            "name": "São Tomé and Príncipe",
            "status": "assigned"
        },
        {
            "alpha2": "SU",
            "alpha3": "",
            "countryCallingCodes": [],
            "currencies": [
                "RUB"
            ],
            "ioc": "",
            "name": "USSR",
            "status": "reserved"
        },
        {
            "alpha2": "SV",
            "alpha3": "SLV",
            "countryCallingCodes": [
                "+503"
            ],
            "currencies": [
                "USD"
            ],
            "ioc": "ESA",
            "name": "El Salvador",
            "status": "assigned"
        },
        {
            "alpha2": "SX",
            "alpha3": "SXM",
            "countryCallingCodes": [
                "+1 721"
            ],
            "currencies": [
                "ANG"
            ],
            "ioc": "",
            "name": "Sint Maarten",
            "status": "assigned"
        },
        {
            "alpha2": "SY",
            "alpha3": "SYR",
            "countryCallingCodes": [
                "+963"
            ],
            "currencies": [
                "SYP"
            ],
            "ioc": "SYR",
            "name": "Syrian Arab Republic",
            "status": "assigned"
        },
        {
            "alpha2": "SZ",
            "alpha3": "SWZ",
            "countryCallingCodes": [
                "+268"
            ],
            "currencies": [
                "SZL"
            ],
            "ioc": "SWZ",
            "name": "Swaziland",
            "status": "assigned"
        },
        {
            "alpha2": "TA",
            "alpha3": "",
            "countryCallingCodes": [
                "+290"
            ],
            "currencies": [
                "GBP"
            ],
            "ioc": "",
            "name": "Tristan de Cunha",
            "status": "reserved"
        },
        {
            "alpha2": "TC",
            "alpha3": "TCA",
            "countryCallingCodes": [
                "+1 649"
            ],
            "currencies": [
                "USD"
            ],
            "ioc": "",
            "name": "Turks And Caicos Islands",
            "status": "assigned"
        },
        {
            "alpha2": "TD",
            "alpha3": "TCD",
            "countryCallingCodes": [
                "+235"
            ],
            "currencies": [
                "XAF"
            ],
            "ioc": "CHA",
            "name": "Chad",
            "status": "assigned"
        },
        {
            "alpha2": "TF",
            "alpha3": "ATF",
            "countryCallingCodes": [],
            "currencies": [
                "EUR"
            ],
            "ioc": "",
            "name": "French Southern Territories",
            "status": "assigned"
        },
        {
            "alpha2": "TG",
            "alpha3": "TGO",
            "countryCallingCodes": [
                "+228"
            ],
            "currencies": [
                "XOF"
            ],
            "ioc": "TOG",
            "name": "Togo",
            "status": "assigned"
        },
        {
            "alpha2": "TH",
            "alpha3": "THA",
            "countryCallingCodes": [
                "+66"
            ],
            "currencies": [
                "THB"
            ],
            "ioc": "THA",
            "name": "Thailand",
            "status": "assigned"
        },
        {
            "alpha2": "TJ",
            "alpha3": "TJK",
            "countryCallingCodes": [
                "+992"
            ],
            "currencies": [
                "TJS"
            ],
            "ioc": "TJK",
            "name": "Tajikistan",
            "status": "assigned"
        },
        {
            "alpha2": "TK",
            "alpha3": "TKL",
            "countryCallingCodes": [
                "+690"
            ],
            "currencies": [
                "NZD"
            ],
            "ioc": "",
            "name": "Tokelau",
            "status": "assigned"
        },
        {
            "alpha2": "TL",
            "alpha3": "TLS",
            "countryCallingCodes": [
                "+670"
            ],
            "currencies": [
                "USD"
            ],
            "ioc": "TLS",
            "name": "East Timor",
            "status": "assigned"
        },
        {
            "alpha2": "TM",
            "alpha3": "TKM",
            "countryCallingCodes": [
                "+993"
            ],
            "currencies": [
                "TMT"
            ],
            "ioc": "TKM",
            "name": "Turkmenistan",
            "status": "assigned"
        },
        {
            "alpha2": "TN",
            "alpha3": "TUN",
            "countryCallingCodes": [
                "+216"
            ],
            "currencies": [
                "TND"
            ],
            "ioc": "TUN",
            "name": "Tunisia",
            "status": "assigned"
        },
        {
            "alpha2": "TO",
            "alpha3": "TON",
            "countryCallingCodes": [
                "+676"
            ],
            "currencies": [
                "TOP"
            ],
            "ioc": "TGA",
            "name": "Tonga",
            "status": "assigned"
        },
        {
            "alpha2": "TR",
            "alpha3": "TUR",
            "countryCallingCodes": [
                "+90"
            ],
            "currencies": [
                "TRY"
            ],
            "ioc": "TUR",
            "name": "Turkey",
            "status": "assigned"
        },
        {
            "alpha2": "TT",
            "alpha3": "TTO",
            "countryCallingCodes": [
                "+1 868"
            ],
            "currencies": [
                "TTD"
            ],
            "ioc": "TRI",
            "name": "Trinidad And Tobago",
            "status": "assigned"
        },
        {
            "alpha2": "TV",
            "alpha3": "TUV",
            "countryCallingCodes": [
                "+688"
            ],
            "currencies": [
                "AUD"
            ],
            "ioc": "TUV",
            "name": "Tuvalu",
            "status": "assigned"
        },
        {
            "alpha2": "TW",
            "alpha3": "TWN",
            "countryCallingCodes": [
                "+886"
            ],
            "currencies": [
                "TWD"
            ],
            "ioc": "TPE",
            "name": "Taiwan, Province Of China",
            "status": "assigned"
        },
        {
            "alpha2": "TZ",
            "alpha3": "TZA",
            "countryCallingCodes": [
                "+255"
            ],
            "currencies": [
                "TZS"
            ],
            "ioc": "TAN",
            "name": "Tanzania, United Republic Of",
            "status": "assigned"
        },
        {
            "alpha2": "UA",
            "alpha3": "UKR",
            "countryCallingCodes": [
                "+380"
            ],
            "currencies": [
                "UAH"
            ],
            "ioc": "UKR",
            "name": "Ukraine",
            "status": "assigned"
        },
        {
            "alpha2": "UG",
            "alpha3": "UGA",
            "countryCallingCodes": [
                "+256"
            ],
            "currencies": [
                "UGX"
            ],
            "ioc": "UGA",
            "name": "Uganda",
            "status": "assigned"
        },
        {
            "alpha2": "UK",
            "alpha3": "",
            "countryCallingCodes": [],
            "currencies": [
                "GBP"
            ],
            "ioc": "",
            "name": "United Kingdom",
            "status": "reserved"
        },
        {
            "alpha2": "UM",
            "alpha3": "UMI",
            "countryCallingCodes": [],
            "currencies": [
                "USD"
            ],
            "ioc": "",
            "name": "United States Minor Outlying Islands",
            "status": "assigned"
        },
        {
            "alpha2": "US",
            "alpha3": "USA",
            "countryCallingCodes": [
                "+1"
            ],
            "currencies": [
                "USD"
            ],
            "ioc": "USA",
            "name": "United States",
            "status": "assigned"
        },
        {
            "alpha2": "UY",
            "alpha3": "URY",
            "countryCallingCodes": [
                "+598"
            ],
            "currencies": [
                "UYU",
                "UYI"
            ],
            "ioc": "URU",
            "name": "Uruguay",
            "status": "assigned"
        },
        {
            "alpha2": "UZ",
            "alpha3": "UZB",
            "countryCallingCodes": [
                "+998"
            ],
            "currencies": [
                "UZS"
            ],
            "ioc": "UZB",
            "name": "Uzbekistan",
            "status": "assigned"
        },
        {
            "alpha2": "VA",
            "alpha3": "VAT",
            "countryCallingCodes": [
                "+379",
                "+39"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "",
            "name": "Vatican City State",
            "status": "assigned"
        },
        {
            "alpha2": "VC",
            "alpha3": "VCT",
            "countryCallingCodes": [
                "+1 784"
            ],
            "currencies": [
                "XCD"
            ],
            "ioc": "VIN",
            "name": "Saint Vincent And The Grenadines",
            "status": "assigned"
        },
        {
            "alpha2": "VE",
            "alpha3": "VEN",
            "countryCallingCodes": [
                "+58"
            ],
            "currencies": [
                "VEF"
            ],
            "ioc": "VEN",
            "name": "Venezuela, Bolivarian Republic Of",
            "status": "assigned"
        },
        {
            "alpha2": "VG",
            "alpha3": "VGB",
            "countryCallingCodes": [
                "+1 284"
            ],
            "currencies": [
                "USD"
            ],
            "ioc": "ISV",
            "name": "Virgin Islands (British)",
            "status": "assigned"
        },
        {
            "alpha2": "VI",
            "alpha3": "VIR",
            "countryCallingCodes": [
                "+1 340"
            ],
            "currencies": [
                "USD"
            ],
            "ioc": "ISV",
            "name": "Virgin Islands (US)",
            "status": "assigned"
        },
        {
            "alpha2": "VN",
            "alpha3": "VNM",
            "countryCallingCodes": [
                "+84"
            ],
            "currencies": [
                "VND"
            ],
            "ioc": "VIE",
            "name": "Viet Nam",
            "status": "assigned"
        },
        {
            "alpha2": "VU",
            "alpha3": "VUT",
            "countryCallingCodes": [
                "+678"
            ],
            "currencies": [
                "VUV"
            ],
            "ioc": "VAN",
            "name": "Vanuatu",
            "status": "assigned"
        },
        {
            "alpha2": "WF",
            "alpha3": "WLF",
            "countryCallingCodes": [
                "+681"
            ],
            "currencies": [
                "XPF"
            ],
            "ioc": "",
            "name": "Wallis And Futuna",
            "status": "assigned"
        },
        {
            "alpha2": "WS",
            "alpha3": "WSM",
            "countryCallingCodes": [
                "+685"
            ],
            "currencies": [
                "WST"
            ],
            "ioc": "SAM",
            "name": "Samoa",
            "status": "assigned"
        },
        {
            "alpha2": "YE",
            "alpha3": "YEM",
            "countryCallingCodes": [
                "+967"
            ],
            "currencies": [
                "YER"
            ],
            "ioc": "YEM",
            "name": "Yemen",
            "status": "assigned"
        },
        {
            "alpha2": "YT",
            "alpha3": "MYT",
            "countryCallingCodes": [
                "+262"
            ],
            "currencies": [
                "EUR"
            ],
            "ioc": "",
            "name": "Mayotte",
            "status": "assigned"
        },
        {
            "alpha2": "ZA",
            "alpha3": "ZAF",
            "countryCallingCodes": [
                "+27"
            ],
            "currencies": [
                "ZAR"
            ],
            "ioc": "RSA",
            "name": "South Africa",
            "status": "assigned"
        },
        {
            "alpha2": "ZM",
            "alpha3": "ZMB",
            "countryCallingCodes": [
                "+260"
            ],
            "currencies": [
                "ZMW"
            ],
            "ioc": "ZAM",
            "name": "Zambia",
            "status": "assigned"
        },
        {
            "alpha2": "ZW",
            "alpha3": "ZWE",
            "countryCallingCodes": [
                "+263"
            ],
            "currencies": [
                "USD",
                "ZAR",
                "BWP",
                "GBP",
                "EUR"
            ],
            "ioc": "ZIM",
            "name": "Zimbabwe",
            "status": "assigned"
        }
    ];

    var languages = {
        "aa": ["Afar", "Afar"],
        "ab": ["Abkhazian", "Аҧсуа"],
        "af": ["Afrikaans", "Afrikaans"],
        "ak": ["Akan", "Akana"],
        "am": ["Amharic", "አማርኛ"],
        "an": ["Aragonese", "Aragonés"],
        "ar": ["Arabic", "العربية"],
        "as": ["Assamese", "অসমীয়া"],
        "av": ["Avar", "Авар"],
        "ay": ["Aymara", "Aymar"],
        "az": ["Azerbaijani", "Azərbaycanca / آذربايجان"],
        "ba": ["Bashkir", "Башҡорт"],
        "be": ["Belarusian", "Беларуская"],
        "bg": ["Bulgarian", "Български"],
        "bh": ["Bihari", "भोजपुरी"],
        "bi": ["Bislama", "Bislama"],
        "bm": ["Bambara", "Bamanankan"],
        "bn": ["Bengali", "বাংলা"],
        "bo": ["Tibetan", "བོད་ཡིག / Bod skad"],
        "br": ["Breton", "Brezhoneg"],
        "bs": ["Bosnian", "Bosanski"],
        "ca": ["Catalan", "Català"],
        "ce": ["Chechen", "Нохчийн"],
        "ch": ["Chamorro", "Chamoru"],
        "co": ["Corsican", "Corsu"],
        "cr": ["Cree", "Nehiyaw"],
        "cs": ["Czech", "Česky"],
        "cu": ["Old Church Slavonic / Old Bulgarian", "словѣньскъ / slověnĭskŭ"],
        "cv": ["Chuvash", "Чăваш"],
        "cy": ["Welsh", "Cymraeg"],
        "da": ["Danish", "Dansk"],
        "de": ["German", "Deutsch"],
        "dv": ["Divehi", "ދިވެހިބަސް"],
        "dz": ["Dzongkha", "ཇོང་ཁ"],
        "ee": ["Ewe", "Ɛʋɛ"],
        "el": ["Greek", "Ελληνικά"],
        "en": ["English", "English"],
        "eo": ["Esperanto", "Esperanto"],
        "es": ["Spanish", "Español"],
        "et": ["Estonian", "Eesti"],
        "eu": ["Basque", "Euskara"],
        "fa": ["Persian", "فارسی"],
        "ff": ["Peul", "Fulfulde"],
        "fi": ["Finnish", "Suomi"],
        "fj": ["Fijian", "Na Vosa Vakaviti"],
        "fo": ["Faroese", "Føroyskt"],
        "fr": ["French", "Français"],
        "fy": ["West Frisian", "Frysk"],
        "ga": ["Irish", "Gaeilge"],
        "gd": ["Scottish Gaelic", "Gàidhlig"],
        "gl": ["Galician", "Galego"],
        "gn": ["Guarani", "Avañe'ẽ"],
        "gu": ["Gujarati", "ગુજરાતી"],
        "gv": ["Manx", "Gaelg"],
        "ha": ["Hausa", "هَوُسَ"],
        "he": ["Hebrew", "עברית"],
        "hi": ["Hindi", "हिन्दी"],
        "ho": ["Hiri Motu", "Hiri Motu"],
        "hr": ["Croatian", "Hrvatski"],
        "ht": ["Haitian", "Krèyol ayisyen"],
        "hu": ["Hungarian", "Magyar"],
        "hy": ["Armenian", "Հայերեն"],
        "hz": ["Herero", "Otsiherero"],
        "ia": ["Interlingua", "Interlingua"],
        "id": ["Indonesian", "Bahasa Indonesia"],
        "ie": ["Interlingue", "Interlingue"],
        "ig": ["Igbo", "Igbo"],
        "ii": ["Sichuan Yi", "ꆇꉙ / 四川彝语"],
        "ik": ["Inupiak", "Iñupiak"],
        "io": ["Ido", "Ido"],
        "is": ["Icelandic", "Íslenska"],
        "it": ["Italian", "Italiano"],
        "iu": ["Inuktitut", "ᐃᓄᒃᑎᑐᑦ"],
        "ja": ["Japanese", "日本語"],
        "jv": ["Javanese", "Basa Jawa"],
        "ka": ["Georgian", "ქართული"],
        "kg": ["Kongo", "KiKongo"],
        "ki": ["Kikuyu", "Gĩkũyũ"],
        "kj": ["Kuanyama", "Kuanyama"],
        "kk": ["Kazakh", "Қазақша"],
        "kl": ["Greenlandic", "Kalaallisut"],
        "km": ["Cambodian", "ភាសាខ្មែរ"],
        "kn": ["Kannada", "ಕನ್ನಡ"],
        "ko": ["Korean", "한국어"],
        "kr": ["Kanuri", "Kanuri"],
        "ks": ["Kashmiri", "कश्मीरी / كشميري"],
        "ku": ["Kurdish", "Kurdî / كوردی"],
        "kv": ["Komi", "Коми"],
        "kw": ["Cornish", "Kernewek"],
        "ky": ["Kirghiz", "Kırgızca / Кыргызча"],
        "la": ["Latin", "Latina"],
        "lb": ["Luxembourgish", "Lëtzebuergesch"],
        "lg": ["Ganda", "Luganda"],
        "li": ["Limburgian", "Limburgs"],
        "ln": ["Lingala", "Lingála"],
        "lo": ["Laotian", "ລາວ / Pha xa lao"],
        "lt": ["Lithuanian", "Lietuvių"],
        "lv": ["Latvian", "Latviešu"],
        "mg": ["Malagasy", "Malagasy"],
        "mh": ["Marshallese", "Kajin Majel / Ebon"],
        "mi": ["Maori", "Māori"],
        "mk": ["Macedonian", "Македонски"],
        "ml": ["Malayalam", "മലയാളം"],
        "mn": ["Mongolian", "Монгол"],
        "mo": ["Moldovan", "Moldovenească"],
        "mr": ["Marathi", "मराठी"],
        "ms": ["Malay", "Bahasa Melayu"],
        "mt": ["Maltese", "bil-Malti"],
        "my": ["Burmese", "Myanmasa"],
        "na": ["Nauruan", "Dorerin Naoero"],
        "nd": ["North Ndebele", "Sindebele"],
        "ne": ["Nepali", "नेपाली"],
        "ng": ["Ndonga", "Oshiwambo"],
        "nl": ["Dutch", "Nederlands"],
        "nn": ["Norwegian Nynorsk", "Norsk (nynorsk)"],
        "no": ["Norwegian", "Norsk (bokmål / riksmål)"],
        "nr": ["South Ndebele", "isiNdebele"],
        "nv": ["Navajo", "Diné bizaad"],
        "ny": ["Chichewa", "Chi-Chewa"],
        "oc": ["Occitan", "Occitan"],
        "oj": ["Ojibwa", "ᐊᓂᔑᓈᐯᒧᐎᓐ / Anishinaabemowin"],
        "om": ["Oromo", "Oromoo"],
        "or": ["Oriya", "ଓଡ଼ିଆ"],
        "os": ["Ossetian / Ossetic", "Иронау"],
        "pa": ["Panjabi / Punjabi", "ਪੰਜਾਬੀ / पंजाबी / پنجابي"],
        "pi": ["Pali", "Pāli / पाऴि"],
        "pl": ["Polish", "Polski"],
        "ps": ["Pashto", "پښتو"],
        "pt": ["Portuguese", "Português"],
        "qu": ["Quechua", "Runa Simi"],
        "rm": ["Raeto Romance", "Rumantsch"],
        "rn": ["Kirundi", "Kirundi"],
        "ro": ["Romanian", "Română"],
        "ru": ["Russian", "Русский"],
        "rw": ["Rwandi", "Kinyarwandi"],
        "sa": ["Sanskrit", "संस्कृतम्"],
        "sc": ["Sardinian", "Sardu"],
        "sd": ["Sindhi", "सिनधि"],
        "se": ["Northern Sami", "Sámegiella"],
        "sg": ["Sango", "Sängö"],
        "sh": ["Serbo-Croatian", "Srpskohrvatski / Српскохрватски"],
        "si": ["Sinhalese", "සිංහල"],
        "sk": ["Slovak", "Slovenčina"],
        "sl": ["Slovenian", "Slovenščina"],
        "sm": ["Samoan", "Gagana Samoa"],
        "sn": ["Shona", "chiShona"],
        "so": ["Somalia", "Soomaaliga"],
        "sq": ["Albanian", "Shqip"],
        "sr": ["Serbian", "Српски"],
        "ss": ["Swati", "SiSwati"],
        "st": ["Southern Sotho", "Sesotho"],
        "su": ["Sundanese", "Basa Sunda"],
        "sv": ["Swedish", "Svenska"],
        "sw": ["Swahili", "Kiswahili"],
        "ta": ["Tamil", "தமிழ்"],
        "te": ["Telugu", "తెలుగు"],
        "tg": ["Tajik", "Тоҷикӣ"],
        "th": ["Thai", "ไทย / Phasa Thai"],
        "ti": ["Tigrinya", "ትግርኛ"],
        "tk": ["Turkmen", "Туркмен / تركمن"],
        "tl": ["Tagalog / Filipino", "Tagalog"],
        "tn": ["Tswana", "Setswana"],
        "to": ["Tonga", "Lea Faka-Tonga"],
        "tr": ["Turkish", "Türkçe"],
        "ts": ["Tsonga", "Xitsonga"],
        "tt": ["Tatar", "Tatarça"],
        "tw": ["Twi", "Twi"],
        "ty": ["Tahitian", "Reo Mā`ohi"],
        "ug": ["Uyghur", "Uyƣurqə / ئۇيغۇرچە"],
        "uk": ["Ukrainian", "Українська"],
        "ur": ["Urdu", "اردو"],
        "uz": ["Uzbek", "Ўзбек"],
        "ve": ["Venda", "Tshivenḓa"],
        "vi": ["Vietnamese", "Tiếng Việt"],
        "vo": ["Volapük", "Volapük"],
        "wa": ["Walloon", "Walon"],
        "wo": ["Wolof", "Wollof"],
        "xh": ["Xhosa", "isiXhosa"],
        "yi": ["Yiddish", "ייִדיש"],
        "yo": ["Yoruba", "Yorùbá"],
        "za": ["Zhuang", "Cuengh / Tôô / 壮语"],
        "zh": ["Chinese", "中文"],
        "zu": ["Zulu", "isiZulu"]
    };

    var LangTweetCtrl = function ($scope, $rootScope, TransferService, socket) {
        var tweets = [];
        $scope.tweetsByLang = [];
        $scope.$onRootScope('broadcast:tweets', function () {
            tweets = TransferService.tweets;
            $scope.tweetsByLang = tweets.distinct(function(n) { return n.id; }).groupBy(function (n) {
                return n.lang;
            },function (n) {
                return n;
            },function (key, enumObj) {
                return {
                    lang: languages[key][0],
                    count: enumObj.count()
                }
            }).toArray();

            getTweetFromSocket(socket, $rootScope.hashtag, function (tweet) {
                tweets.push(tweet);
                $scope.tweetsByLang = tweets.distinct(function(n) {
                    return n.id;
                }).groupBy(function (n) {
                    return n.lang;
                },function (n) {
                    return n;
                },function (key, enumObj) {
                    return {
                        lang: languages[key][0],
                        count: enumObj.count()
                    }
                }).toArray();
            });
        });
    };
    LangTweetCtrl.$inject = ['$scope', '$rootScope', 'TransferService', 'socket'];

    ng.module('app.LangTweetCtrl', []).controller('LangTweetCtrl', LangTweetCtrl);
}(angular, jQuery));