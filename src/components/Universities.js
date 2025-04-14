import React, { useState } from  "react";
import "./Universities.css"; // Import external CSS

// Universities grouped by province
const universitiesByProvince = {
  "Punjab": [
    { 
      name: "	COMSATS Institute of Information Technology", 
      link: "https://attock.comsats.edu.pk/",
      description: "BS-CS"
    },
    
    { 
      name: " Islamia University, Bahawalpur", 
      link: "https://www.iub.edu.pk/",
      description: "BS-CS, BS-IT, BS-SE"
    },
    { 
      name: " Government College University, Faisalabad ", 
      link: "https://www.gcu.edu.pk/",
      description: "BS-CS, BS-IT, BS-SE"
    },
    { 
      name: "	National Textile University ", 
      link: "https://www.ntu.edu.pk/",
      description: "BS-CS"
    },
    { 
      name: " National University of Computer and Emerging Sciences (FAST) (Faisalabad Campus)", 
      link: "https://www.nu.edu.pk/",
      description: "FAST-BS-CS"
    },
    { 
      name: " GIFT University", 
      link: "https://www.gift.edu.pk/",
      description: "BS-CS"
    },
    { 
      name: "	University of Gujrat", 
      link: "https://www.uog.edu.pk/",
      description: "BS-CS, BS-IT, BS-SE, M.Sc-IT, M.Sc-CS, M.Phil-IT, M.Phil-CS, PhD"
    },
    { 
      name: "	University of Lahore, (Gujrat Campus) ", 
      link: "https://www.uol.edu.pk/",
      description: "BS-CS, BS-IT, M.Sc-IT, M.Sc-CS, M.Phil-IT, M.Phil-CS"
    },
    { 
      name: "Lahore Garrison University, DHA", 
      link: "https://lgu.edu.pk/",
      description: "BS-DF, BS-IT, BS-SE, BS-CS, MS-CS, MCS"
    },
    { 
      name: "Bahria University (Lahore Campus)", 
      link: "https://www.bahria.edu.pk/",
      description: "BS-IT, BS-CS"
    },
    { 
      name: "Superior University, Lahore", 
      link: "https://www.superior.edu.pk/",
      description: "BS-CS, BS-IT, BS-SE, BS-CE"
    },
    { 
      name: "Beaconhouse National University", 
      link: "https://www.bnu.edu.pk/",
      description: "BS-SE"
    },
    { 
      name: "University of South-Asia, Lahore", 
      link: "https://www.usa.edu.pk/",
      description: "BS-IT, BS-CS, BS-IT, BS-SE"
    },
    { 
      name: "Government College University, Lahore", 
      link: "https://www.gcu.edu.pk/",
      description: "BS-CS"
    },
    { 
      name: "National University of Computer and Emerging Sciences (FAST) (Lahore Campus)", 
      link: "https://www.nu.edu.pk/",
      description: "BS-CS"
    },
    { 
      name: "Lahore College for Women University", 
      link: "https://www.lcwu.edu.pk/",
      description: "BS-CS, BS-SE"
    },
    { 
      name: "Punjab University College of Information Technology (PUCIT)", 
      link: "https://pucit.edu.pk/",
      description: "BS-CS, BS-IT, BS-SE"
    },
    { 
      name: "Institute of Business and Information Technology ", 
      link: "https://ibitpu.edu.pk/",
      description: "(IBIT)"
    },
    { 
      name: "University of Central Punjab ", 
      link: "https://www.ucp.edu.pk/",
      description: "BS-CS"
    },
    { 
      name: "University of Education (Lahore Campus) ", 
      link: "https://ue.edu.pk/",
      description: "BS-IT"
    }, 
    { 
      name: "University of Sargodha (Lahore Campus) ", 
      link: "https://uoslahore.edu.pk/",
      description: "BS-IT"
    }
  ],
  "Sindh": [
    { 
      name: " Isra University  ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS, BS-SE"
    },
    { 
      name: " SZABIST", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS"
    },
    { 
      name: " 	HIAST Affiliated with Mehran University of Engineering & Technology  ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-IT, MS-BIT"
    },
    { 
      name: " Sindh Agriculture University ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-IT, MS-IT, MS-SE"
    },
    { 
      name: " University of Sindh  ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS, BS-SE, BS-IT, M.Phil - CS, M.Phil - SE, M.Phil - IT"
    },
    { 
      name: " Mehran University of Engineering & Technology ", 
      link: "https://www.pieas.edu.pk",
      description: "BE-SE, BE-CS, ME-SE, ME-CIE, ME-IT"
    },
    { 
      name: " Aligarh Institute of Technology  ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS"
    },
    { 
      name: " Bahria University", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS, BS-IT"
    },
    { 
      name: " DHA Suffa University  ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	Habib University", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS"
    },
    { 
      name: " Hamdard University   ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS"
    },
    { 
      name: " Indus University", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS, BS-SE, BS-IT"
    },
    { 
      name: " Institute of Business Administration, Karachi  ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	Karachi School of Business & Leadership(KSBL)", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS, BS-IT"
    },
    { 
      name: " Institute of Business & Technology (Biztek)   ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	Institute of Business Management", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	Iqra University ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	Jinnah University for Women ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS, BS-SE, BS-IT"
    },
    { 
      name: " Karachi Institute of Economics and Technology  ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	Muhammad Ali Jinnah University (MAJU) ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	National University of Computer and Emerging Sciences (FAST)  ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	NED University of Engineering and Technology  ", 
      link: "https://www.pieas.edu.pk",
      description: "BE-CISE, BS-CSIT, BE-SE"
    },
    { 
      name: "	Pakistan Navy Engineering College ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-IS"
    },
    { 
      name: "	Shaheed Zulfiqar Ali Bhutto Institute of Science and Technology (SZABIST)  ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS"
    },
    { 
      name: " Sindh Madrasatul Islam University (SMI)   ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	Sir Syed University of Engineering and Technology (SSUET)  ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS, BS-CE"
    },
    { 
      name: "	University of Karachi (KU), UBIT  ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS, BS-SE"
    },
    { 
      name: " Usman Institute of Technology ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	Sukkur Institute of Business Administration ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS, BS-SE"
    }
  ],
  "Balochistan": [
    { 
      name: "	Balochistan University of Information Technology, Engineering and Management Sciences ", 
      link: "https://www.buitms.edu.pk",
      description: "BS-CS, BS-IT"
    },
    { 
      name: "	 Al-Hamd Islamic University ", 
      link: "https://www.aiu.edu.pk",
      description: "BS-CS, BS-IT"
    }
  ],
  "Khyber Pakhtunkhwa":[
    { 
      name: "	University of Engineering & Technology, Peshawar ", 
      link: "https://www.uetpeshawar.edu.pk",
      description: "BS-CS, BS-SE"
    },
    { 
      name: "	Abasyn University  ", 
      link: "https://www.abasyn.edu.pk",
      description: "BS-CS, BS-SE"
    },
    { 
      name: "	City University of Science and Information Technology, Peshawar  ", 
      link: "https://www.cityuniversity.edu.pk",
      description: "BS-CS, BS-SE"
    },
    { 
      name: "	National University of Computer and Emerging Sciences (FAST)   ", 
      link: "https://www.nu.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	Sarhad University of Science and Information Technology  ", 
      link: "https://www.suit.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	Shaheed Benazir Bhutto Women University ", 
      link: "http://www.sbbwu.edu.pk",
      description: "BS-Bioinformatics"
    },
    { 
      name: "	University of Peshawar ", 
      link: "http://www.uop.edu.pk",
      description: "BS-CS"
    },
    { 
      name: " Iqra National University, Peshawar ", 
      link: "https://www.inu.edu.pk",
      description: "BS-CS, BS-SE"
    },
    { 
      name: "	CECOS University  ", 
      link: "https://www.cecos.edu.pk",
      description: "BS-CS, BS-SE"
    },
    { 
      name: "	COMSATS Institute of Information Technology  ", 
      link: "https://www.comsats.edu.pk",
      description: "BS-CS, BS-SE, BS-TN"
    },
    { 
      name: "	University of Science and Technology (Bannu)  ", 
      link: "https://www.ustb.edu.pk",
      description: "BS-CS, BS-SE"
    },
    { 
      name: "	Gomal University  ", 
      link: "http://www.gu.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	Qurtuba University ", 
      link: "https://www.qurtuba.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	University of Haripur ", 
      link: "http://www.uoh.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	Pak-Austria Fachhochschule: Institute of Applied Sciences and Technology ", 
      link: "https://www.paf-iast.edu.pk",
      description: "BS-CS, BS-AI"
    },
    { 
      name: "	University of Engineering & Technology, (Mardan) ", 
      link: "https://www.uetmardan.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	Eurisko Institute of Science & Information Technology Mardan", 
      link: "https://euriskoinstitute.edu.pk",
      description: "BS-CS, BS-AI"
    },
    { 
      name: "	Ghulam Ishaq Khan Institute of Engineering Sciences and Technology ", 
      link: "https://www.giki.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	University of Swabi", 
      link: "http://www.uoswabi.edu.pk",
      description: "BS-BBA-MBA"
    }
  ],
  "Azad Jammu & Kashmir": [
    { 
      name: "	Mirpur University of Science and Technology (MUST) ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-SE"
    },
    { 
      name: " University of Azad Jammu and Kashmir  ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS, BS-SE"
    },
    { 
      name: "	University of Poonch  ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-CS"
    }  
  ],
  "Capital Territory":[
    { 
      name: " 	Virtual University of Pakistan  ", 
      link: "https://www.vu.edu.pk",
      description: "BS-CS, BS-SE"
    },
    { 
      name: "	Air University (Pakistan Air Force)  ", 
      link: "https://www.au.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	Bahria University ", 
      link: "https://www.bahria.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	Center for Advanced Studies in Engineering  ", 
      link: "https://case.edu.pk",
      description: "BS-CS"
    },
    { 
      name: " 	COMSATS Institute of Information Technology  ", 
      link: "https://www.comsats.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	Federal Urdu University  ", 
      link: " https://www.fuuast.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	Foundation University, Islamabad  ", 
      link: "https://www.fui.edu.pk",
      description: "BS-SE"
    },
    { 
      name: "	International Islamic University, Islamabad   ", 
      link: "https://www.iiu.edu.pk",
      description: "BS-CS, BS-SE"
    },
    { 
      name: "	Institute of Space Technology  ", 
      link: "https://www.ist.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	Iqra University  ", 
      link: "https://iqra.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	Capital University of Science & Technology  ", 
      link: "https://cust.edu.pk",
      description: "BS-CS, BS-SE"
    },
    { 
      name: "	National University of Computer and Emerging Sciences (FAST)   ", 
      link: "https://www.nu.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	National University of Modern Languages (NUML)   ", 
      link: "https://www.numl.edu.pk",
      description: "BS-CS, BS-SE"
    },
    { 
      name: "	Quaid-i-Azam University Islamabad  ", 
      link: "https://www.qau.edu.pk",
      description: "BS-CS, BS-IT"
    },
    { 
      name: "	Pakistan Institute of Engineering and Applied Sciences (PIEAS)  ", 
      link: "https://www.pieas.edu.pk",
      description: "BS-IS"
    },
    { 
      name: "	Preston University (Pakistan)   ", 
      link: "https://www.preston.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	Riphah International University  ", 
      link: "https://www.riphah.edu.pk",
      description: "BS-SE"
    },
    { 
      name: "	National University of Sciences and Technology (NUST)  ", 
      link: "https://www.nust.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	National Skills University (NSU)  ", 
      link: "https://nsu.edu.pk",
      description: "BS-CS"
    },
    { 
      name: "	Ibadat International University Islamabad(IIU) ", 
      link: "https://iiui.edu.pk",
      description: "BSSE-BSCS"
    }
  ],
};

const Universities = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="universities-section">
      {/* Heading Section */}
      <header>
        <h2>Top Universities Offering IT Programs in Pakistan</h2>
        
        {/* Search Bar */}
        <input
          type="text"
          className="search-bar"
          placeholder="Search university..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      {/* Universities by Province */}
      {Object.entries(universitiesByProvince).map(([province, universities]) => {
        const filteredUniversities = universities.filter((uni) =>
          uni.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
          filteredUniversities.length > 0 && (
            <div key={province}>
              <h2 className="province-heading">{province}</h2>
              <div className="university-container">
                {filteredUniversities.map((uni, index) => (
                  <div key={index} className="flip-card">
                    <div className="flip-card-inner">
                      {/* Front Side */}
                      <div className="flip-card-front">
                        <h3>{uni.name}</h3>
                      </div>

                      {/* Back Side */}
                      <div className="flip-card-back">
                        <p>{uni.description}</p>
                        <a href={uni.link} target="_blank" rel="noopener noreferrer">
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Universities;
