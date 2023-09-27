const inputArray = [
  {
    City: "Bagerhat",
    Area: [
      "Bagerhat Sadar",
      "Chitalmari",
      "Fakirhat",
      "Kachua",
      "Mollahat",
      "Mongla",
      "Morrelganj",
      "Rampal",
      "Sarankhola",
    ],
  },
  {
    City: "Bandarban",
    Area: [
      "Ali Kadam",
      "Bandarban Sadar",
      "Lama",
      "Naikhongchhari",
      "Rowangchhari",
      "Ruma",
      "Thanchi",
    ],
  },
  {
    City: "Barguna",
    Area: [
      "Amtali",
      "Bamna",
      "Barguna Sadar",
      "Betagi",
      "Patharghata",
      "Taltoli",
    ],
  },
  {
    City: "Barisal",
    Area: [
      "Agailjhara",
      "Babuganj",
      "Bakerganj",
      "Banaripara",
      "Gaurnadi",
      "Hizla",
      "Barisal Sadar",
      "Mehendiganj",
      "Muladi",
      "Wazirpur",
    ],
  },
  {
    City: "Bhola",
    Area: [
      "Bhola Sadar",
      "Burhanuddin",
      "Char Fasson",
      "Daulatkhan",
      "Lalmohan",
      "Manpura",
      "Tazumuddin",
    ],
  },
  {
    City: "Bogra",
    Area: [
      "Adamdighi",
      "Bogra Sadar",
      "Dhunat",
      "Dhupchanchia",
      "Gabtali",
      "Kahaloo",
      "Nandigram",
      "Sariakandi",
      "Shajahanpur",
      "Sherpur",
      "Shibganj",
      "Sonatola",
    ],
  },
  {
    City: "Brahmanbaria",
    Area: [
      "Akhaura",
      "Bancharampur",
      "Brahmanbaria Sadar",
      "Kasba",
      "Nabinagar",
      "Nasirnagar",
      "Sarail",
      "Ashuganj",
      "Bijoynagar",
    ],
  },
  {
    City: "Chandpur",
    Area: [
      "Chandpur Sadar",
      "Faridganj",
      "Haimchar",
      "Haziganj",
      "Kachua",
      "Matlab Dakshin",
      "Matlab Uttar",
      "Shahrasti",
    ],
  },
  {
    City: "Chittagong",
    Area: [
      "Anwara",
      "Banshkhali",
      "Boalkhali",
      "Chandanaish",
      "Fatikchhari",
      "Hathazari",
      "Lohagara",
      "Mirsharai",
      "Patiya",
      "Rangunia",
      "Raozan",
      "Sandwip",
      "Satkania",
      "Sitakunda",
      "Bandor (Chittagong Port) Thana",
      "Chandgaon Thana",
      "Double Mooring Thana",
      "Kotwali Thana",
      "Pahartali Thana",
      "Panchlaish Thana",
    ],
  },
  {
    City: "Chuadanga",
    Area: ["Alamdanga", "Chuadanga Sadar", "Damurhuda", "Jibannagar"],
  },
  {
    City: "Comilla",
    Area: [
      "Barura",
      "Brahmanpara",
      "Burichang",
      "Chandina",
      "Chauddagram",
      "Daudkandi",
      "Debidwar",
      "Homna",
      "Laksam",
      "Muradnagar",
      "Nangalkot",
      "Comilla Adarsha Sadar",
      "Meghna",
      "Titas",
      "Monohargonj",
      "Comilla Sadar Dakshin",
    ],
  },
  {
    City: "Cox's Bazar",
    Area: [
      "Chakaria",
      "Cox's Bazar Sadar",
      "Kutubdia",
      "Maheshkhali",
      "Ramu",
      "Teknaf",
      "Ukhia",
      "Pekua",
    ],
  },
  {
    City: "Dhaka",
    Area: [
      "Adabor",
      "Airport",
      "Ati Bazar (Keraniganj)",
      "Azompur",
      "Badda",
      "Banani",
      "Bangshal",
      "Bashundhara R/A",
      "Bhashantek",
      "Cantonment",
      "Chalkbazar",
      "Dakshin khan",
      "Darus Salam",
      "Demra",
      "Dhanmondi",
      "Gandaria",
      "Gulistan",
      "Gulshan",
      "Hatirjheel",
      "Hazaribag",
      "Jattrabari",
      "Kadamtali",
      "Kafrul",
      "Kalabagan",
      "Kalabagan",
      "Kamrangirchar",
      "Khilgaon",
      "Khilkhet",
      "Kodomtali",
      "Kotwali",
      "Lalbagh",
      "Mirpur",
      "Mohammadpur",
      "Motijheel",
      "Mugda",
      "New Market",
      "Pallabi",
      "Paltan",
      "Panthapath",
      "Purbachal",
      "Ramna",
      "Rampura",
      "Rupnagar",
      "Sabujbag",
      "Shah Ali",
      "Shahbag",
      "Shahjahanpur",
      "Sher-e-Bangla Nagar",
      "Shyampur",
      "Sutrapur",
      "Tejgaon",
      "Tejgaon Industrial Area",
      "Turag",
      "Uttara",
      "Uttarkhan",
      "Vasantek",
      "Vatara",
      "Wari",
      "Ashulia",
      "Dhamrai",
      "Dohar",
      "Hemayetpur",
      "Keraniganj",
      "Nawabganj",
      "Savar",
    ],
  },
  {
    City: "Dinajpur",
    Area: [
      "Birampur",
      "Birganj",
      "Biral",
      "Bochaganj",
      "Chirirbandar",
      "Phulbari",
      "Ghoraghat",
      "Hakimpur",
      "Kaharole",
      "Khansama",
      "Dinajpur Sadar",
      "Nawabganj",
      "Parbatipur",
    ],
  },
  {
    City: "Faridpur",
    Area: [
      "Alfadanga",
      "Bhanga",
      "Boalmari",
      "Charbhadrasan",
      "Faridpur Sadar",
      "Madhukhali",
      "Nagarkanda",
      "Sadarpur",
      "Saltha",
    ],
  },
  {
    City: "Feni",
    Area: [
      "Chhagalnaiya",
      "Daganbhuiyan",
      "Feni Sadar",
      "Parshuram",
      "Sonagazi",
      "Fulgazi",
    ],
  },
  {
    City: "Gaibandha",
    Area: [
      "Phulchhari",
      "Gaibandha Sadar",
      "Gobindaganj",
      "Palashbari",
      "Sadullapur",
      "Sughatta",
      "Sundarganj",
    ],
  },
  {
    City: "Gazipur",
    Area: ["Gazipur Sadar", "Kaliakair", "Kaliganj", "Kapasia", "Sreepur"],
  },
  {
    City: "Gopalganj",
    Area: [
      "Gopalganj Sadar",
      "Kashiani",
      "Kotalipara",
      "Muksudpur",
      "Tungipara",
    ],
  },
  {
    City: "Habiganj",
    Area: [
      "Ajmiriganj",
      "Bahubal",
      "Baniyachong",
      "Chunarughat",
      "Habiganj Sadar",
      "Lakhai",
      "Madhabpur",
      "Nabiganj",
      "Shayestaganj",
    ],
  },
  {
    City: "Jamalpur",
    Area: [
      "Baksiganj",
      "Dewanganj",
      "Islampur",
      "Jamalpur Sadar",
      "Madarganj",
      "Melandaha",
      "Sarishabari",
    ],
  },
  {
    City: "Jessore",
    Area: [
      "Abhaynagar",
      "Bagherpara",
      "Chaugachha",
      "Jhikargachha",
      "Keshabpur",
      "Jessore Sadar",
      "Manirampur",
      "Sharsha",
    ],
  },
  {
    City: "Jhalokati",
    Area: ["Jhalokati Sadar", "Kathalia", "Nalchity", "Rajapur"],
  },
  {
    City: "Jhenaida",
    Area: [
      "Harinakunda",
      "Jhenaidah Sadar",
      "Kaliganj",
      "Kotchandpur",
      "Maheshpur",
      "Shailkupa",
    ],
  },
  {
    City: "Joypurhat",
    Area: ["Akkelpur", "Joypurhat Sadar", "Kalai", "Khetlal", "Panchbibi"],
  },
  {
    City: "Khagrachhari",
    Area: [
      "Dighinala",
      "Khagrachhari",
      "Lakshmichhari",
      "Mahalchhari",
      "Manikchhari",
      "Matiranga",
      "Panchhari",
      "Ramgarh",
    ],
  },
  {
    City: "Khulna",
    Area: [
      "Batiaghata",
      "Dacope",
      "Dumuria",
      "Dighalia",
      "Koyra",
      "Paikgachha",
      "Phultala",
      "Rupsha",
      "Terokhada",
      "Daulatpur Thana",
      "Khalishpur Thana",
      "Khan Jahan Ali Thana",
      "Kotwali Thana",
      "Sonadanga Thana",
      "Harintana Thana",
    ],
  },
  {
    City: "Kishoreganj",
    Area: [
      "Astagram",
      "Bajitpur",
      "Bhairab",
      "Hossainpur",
      "Itna",
      "Karimganj",
      "Katiadi",
      "Kishoreganj Sadar",
      "Kuliarchar",
      "Mithamain",
      "Nikli",
      "Pakundia",
      "Tarail",
    ],
  },
  {
    City: "Kurigram",
    Area: [
      "Bhurungamari",
      "Char Rajibpur",
      "Chilmari",
      "Phulbari",
      "Kurigram Sadar",
      "Nageshwari",
      "Rajarhat",
      "Raomari",
      "Ulipur",
    ],
  },
  {
    City: "Kushtia",
    Area: [
      "Bheramara",
      "Daulatpur",
      "Khoksa",
      "Kumarkhali",
      "Kushtia Sadar",
      "Mirpur",
      "Shekhpara",
    ],
  },
  {
    City: "Lakshmipur",
    Area: ["Lakshmipur Sadar", "Raipur", "Ramganj", "Ramgati", "Kamalnagar"],
  },
  {
    City: "Lalmonirhat",
    Area: [
      "Aditmari",
      "Hatibandha",
      "Kaliganj",
      "Lalmonirhat Sadar",
      "Patgram",
    ],
  },
  {
    City: "Madaripur",
    Area: ["Rajoir", "Madaripur Sadar", "Kalkini", "Shibchar"],
  },
  {
    City: "Magura",
    Area: ["Magura Sadar", "Mohammadpur", "Shalikha", "Sreepur"],
  },
  {
    City: "Manikganj",
    Area: [
      "Daulatpur",
      "Ghior",
      "Harirampur",
      "Manikgonj Sadar",
      "Saturia",
      "Shivalaya",
      "Singair",
    ],
  },
  {
    City: "Meherpur",
    Area: ["Gangni", "Meherpur Sadar", "Mujibnagar"],
  },
  {
    City: "Moulvibazar",
    Area: [
      "Barlekha",
      "Kamalganj",
      "Kulaura",
      "Moulvibazar Sadar",
      "Rajnagar",
      "Sreemangal",
      "Juri",
    ],
  },
  {
    City: "Munshiganj",
    Area: [
      "Gazaria",
      "Lohajang",
      "Munshiganj Sadar",
      "Sirajdikhan",
      "Sreenagar",
      "Tongibari",
    ],
  },
  {
    City: "Mymensingh",
    Area: [
      "Bhaluka",
      "Dhobaura",
      "Fulbaria",
      "Gaffargaon",
      "Gauripur",
      "Haluaghat",
      "Ishwarganj",
      "Mymensingh Sadar",
      "Muktagachha",
      "Nandail",
      "Phulpur",
      "Trishal",
      "Tara Khanda",
    ],
  },
  {
    City: "Naogaon",
    Area: [
      "Atrai",
      "Badalgachhi",
      "Manda",
      "Dhamoirhat",
      "Mohadevpur",
      "Naogaon Sadar",
      "Niamatpur",
      "Patnitala",
      "Porsha",
      "Raninagar",
      "Sapahar",
    ],
  },
  {
    City: "Narail",
    Area: ["Kalia", "Lohagara", "Narail Sadar", "Naragati Thana"],
  },
  {
    City: "Narayanganj",
    Area: ["Araihazar", "Bandar", "Narayanganj Sadar", "Rupganj", "Sonargaon"],
  },
  {
    City: "Natore",
    Area: [
      "Bagatipara",
      "Baraigram",
      "Gurudaspur",
      "Lalpur",
      "Natore Sadar",
      "Singra",
      "Naldanga",
    ],
  },
  {
    City: "Nawabganj",
    Area: ["Bholahat", "Gomastapur", "Nachole", "Nawabganj Sadar", "Shibganj"],
  },
  {
    City: "Netrokona",
    Area: [
      "Atpara",
      "Barhatta",
      "Durgapur",
      "Khaliajuri",
      "Kalmakanda",
      "Kendua",
      "Madan",
      "Mohanganj",
      "Netrokona Sadar",
      "Purbadhala",
    ],
  },
  {
    City: "Nilphamari",
    Area: [
      "Dimla",
      "Domar",
      "Jaldhaka",
      "Kishoreganj",
      "Nilphamari Sadar",
      "Saidpur",
    ],
  },
  {
    City: "Noakhali",
    Area: [
      "Begumganj",
      "Noakhali Sadar",
      "Chatkhil",
      "Companiganj",
      "Hatiya",
      "Senbagh",
      "Sonaimuri",
      "Subarnachar",
      "Kabirhat",
    ],
  },
  {
    City: "Pabna",
    Area: [
      "Ataikula",
      "Atgharia",
      "Bera",
      "Bhangura",
      "Chatmohar",
      "Faridpur",
      "Ishwardi",
      "Pabna Sadar",
      "Santhia",
      "Sujanagar",
    ],
  },
  {
    City: "Panchagarh",
    Area: ["Atwari", "Boda", "Debiganj", "Panchagarh Sadar", "Tetulia"],
  },
  {
    City: "Patuakhali",
    Area: [
      "Bauphal",
      "Dashmina",
      "Galachipa",
      "Kalapara",
      "Mirzaganj",
      "Patuakhali Sadar",
      "Rangabali",
      "Dumki",
    ],
  },
  {
    City: "Pirojpur",
    Area: [
      "Bhandaria",
      "Kawkhali",
      "Mathbaria",
      "Nazirpur",
      "Pirojpur Sadar",
      "Nesarabad (Swarupkati)",
      "Zianagor",
    ],
  },
  {
    City: "Rajbari",
    Area: [
      "Baliakandi",
      "Goalandaghat",
      "Pangsha",
      "Rajbari Sadar",
      "Kalukhali",
    ],
  },
  {
    City: "Rajshahi",
    Area: [
      "Bagha",
      "Bagmara",
      "Charghat",
      "Durgapur",
      "Godagari",
      "Mohanpur",
      "Paba",
      "Puthia",
      "Tanore",
      "Boalia Thana",
      "Matihar Thana",
      "Rajpara Thana",
      "Shah Mokdum Thana",
    ],
  },
  {
    City: "Rangamati",
    Area: [
      "Bagaichhari",
      "Barkal",
      "Kawkhali (Betbunia)",
      "Belaichhari",
      "Kaptai",
      "Juraichhari",
      "Langadu",
      "Naniyachar",
      "Rajasthali",
      "Rangamati Sadar",
    ],
  },
  {
    City: "Rangpur",
    Area: [
      "Badarganj",
      "Gangachhara",
      "Kaunia",
      "Rangpur Sadar",
      "Mithapukur",
      "Pirgachha",
      "Pirganj",
      "Taraganj",
    ],
  },
  {
    City: "Satkhira",
    Area: [
      "Assasuni",
      "Debhata",
      "Kalaroa",
      "Kaliganj",
      "Satkhira Sadar",
      "Shyamnagar",
      "Tala",
    ],
  },
  {
    City: "Shariatpur",
    Area: [
      "Bhedarganj",
      "Damudya",
      "Gosairhat",
      "Naria",
      "Shariatpur Sadar",
      "Zanjira",
      "Shakhipur",
    ],
  },
  {
    City: "Sherpur",
    Area: ["Jhenaigati", "Nakla", "Nalitabari", "Sherpur Sadar", "Sreebardi"],
  },
  {
    City: "Sirajganj",
    Area: [
      "Belkuchi",
      "Chauhali",
      "Kamarkhanda",
      "Kazipur",
      "Raiganj",
      "Shahjadpur",
      "Sirajganj Sadar",
      "Tarash",
      "Ullahpara",
    ],
  },
  {
    City: "Sunamganj",
    Area: [
      "Bishwamvarpur",
      "Chhatak",
      "Derai",
      "Dharampasha",
      "Dowarabazar",
      "Jagannathpur",
      "Jamalganj",
      "Sullah",
      "Sunamganj Sadar",
      "Tahirpur",
      "South Sunamganj",
    ],
  },
  {
    City: "Sylhet",
    Area: [
      "Balaganj",
      "Beanibazar",
      "Bishwanath",
      "Companigonj",
      "Fenchuganj",
      "Golapganj",
      "Gowainghat",
      "Jaintiapur",
      "Kanaighat",
      "Sylhet Sadar",
      "Zakiganj",
      "South Shurma",
    ],
  },
  {
    City: "Tangail",
    Area: [
      "Gopalpur",
      "Basail",
      "Bhuapur",
      "Delduar",
      "Ghatail",
      "Kalihati",
      "Madhupur",
      "Mirzapur",
      "Nagarpur",
      "Sakhipur",
      "Dhanbari",
      "Tangail Sadar",
    ],
  },
  {
    City: "Narsingdi",
    Area: [
      "Narsingdi Sadar",
      "Belabo",
      "Monohardi",
      "Palash",
      "Raipura",
      "Shibpur",
    ],
  },
  {
    City: "Thakurgaon",
    Area: [
      "Baliadangi",
      "Haripur",
      "Pirganj",
      "Ranisankail",
      "Thakurgaon Sadar",
    ],
  },
];

export default inputArray;