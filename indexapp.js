const messages = [
  "Welcome ' MOROCCO INVEST ' beta version! ",
  "Our algorithms are made  just for YOU",
  "Make sure to fully understand every part before you answear, thanks  "
];

let currentIndex = 0;
const messageElement = document.getElementById('message');
const nextBtn = document.getElementById('nextBtn');
const overlay = document.getElementById('overlay');

function showMessage() {
  overlay.style.display = 'flex';
  messageElement.textContent = messages[currentIndex];
}

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex < messages.length) {
    messageElement.textContent = messages[currentIndex];
  } else {
    overlay.style.display = 'none';
  }
});

showMessage();




    // Get elements with specific class names
    const labelA = document.querySelector('.labelA');
    const labelB = document.querySelector('.labelB');
    const labelC = document.querySelector('.labelC');

    const labelD = document.querySelector('.labelD');
    const labelE = document.querySelector('.labelE');
    const labelF = document.querySelector('.labelF');

    const labelJ = document.querySelector('.labelJ');
    const labelH = document.querySelector('.labelH');
    const labelK = document.querySelector('.labelK');

    let a = 0

    let step1,step2,step3

    const azdazd = (var1,var2) => {

      return ;
    }

    
    /**
     * step 1
    */
    labelA.addEventListener('click', () => {
      step1 = 'tourism1'
      nextStep()
    });

    labelB.addEventListener('click', function() {
      step1 = 'tourism2'
      nextStep()
    });

    labelC.addEventListener('click', function() {
      step1 = 'tourism3'
      nextStep()
    });

    /**
     * step 2
    */
    labelD.addEventListener('click', function() {
      step2 = "risk1"
      nextStep()
    });

    labelE.addEventListener('click', function() {
      step2 = "risk2"
      nextStep()
    });

    labelF.addEventListener('click', function() {
      step2 = "risk3"
      nextStep()
    });

    
    /**
     * step 3
    */
    labelJ.addEventListener('click', function() {
      step3 = "budget1"
      submitForm()
    });

    labelH.addEventListener('click', function() {
      step3 = "budget2"
      submitForm()
    });

    labelK.addEventListener('click', function() {
      step3 = "budget3"
      submitForm()
    });

    let step = 1

    const nextStep = () => {
      if (step === 1) {
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'grid';
      } else if (step === 2) {
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step3').style.display = 'grid';
      }else if (step>2) return;
      step++;
    }

    const submitForm = () => {
      if(step1=='tourism1' && step2 =='risk1' && step3 =='budget1') {
        showPopup("Investing in Morocco's high-risk, high-reward tourism sector with $100,000 to $500,000 presents an exciting opportunity. The country's burgeoning tourism industry, rich cultural heritage, and diverse landscapes offer immense potential. Consider ventures like boutique hotels in Marrakech, adventure tourism in the Atlas Mountains, or niche experiences showcasing Morocco's culinary delights. While the industry's unpredictability poses risks, strategic partnerships with local businesses and innovative marketing strategies can mitigate these challenges. With a hands-on approach and a commitment to quality service, this investment has the potential to yield substantial returns in a rapidly growing market.")

      } else if(step1=='tourism1' && step2 =='risk1' && step3 =='budget2') {
        showPopup("Investing $500,000 to $800,000 in Morocco's high-risk tourism sector can offer significant growth potential. The country's burgeoning tourism industry presents opportunities in boutique hotels, adventure tourism, or niche experiences catering to unique markets. While the sector is promising, it's high-risk due to market volatility, regulatory changes, and global uncertainties. However, strategic partnerships with local businesses, innovative marketing approaches, and leveraging Morocco's cultural richness can mitigate risks. Prioritizing customer experience, sustainability, and adapting to evolving travel trends will be crucial for success. With diligent research, a strong business plan, and a proactive approach, this investment could yield substantial returns despite the inherent risks.")

      } else if(step1=='tourism1' && step2 =='risk1' && step3 =='budget3') {
        showPopup("Investing in Morocco's high-risk, high-reward tourism sector with $800,000 to $1 million could yield substantial returns. The country's tourism industry has immense potential, driven by its diverse cultural heritage, stunning landscapes, and growing appeal among international travelers. Consider boutique hotels, adventure tourism ventures, or niche experiences targeting luxury travelers or ecotourism enthusiasts. Collaborating with local experts and leveraging emerging trends like sustainable travel could maximize returns. While the sector poses risks due to market fluctuations and evolving trends, strategic planning, innovative offerings, and leveraging Morocco's unique attractions could pave the way for significant growth and success.")





      }
      else if(step1=='tourism1' && step2 =='risk2' && step3 =='budget1') {
        showPopup("Investing in Morocco's tourism sector with $100,000 to $500,000 offers promising potential in moderate-risk industries like boutique hotels or adventure tourism ventures. Boutique hotels cater to niche markets, providing unique experiences for travelers seeking personalized stays. Alternatively, adventure tourism, including activities like desert safaris or eco-friendly tours, taps into Morocco's diverse landscapes, attracting a growing segment of adventurous travelers. These sectors show steady growth, leveraging Morocco's rich culture and natural beauty, offering a moderate risk with potential for substantial returns due to increasing tourist interest in authentic, immersive experiences.")

      } else if(step1=='tourism1' && step2 =='risk2' && step3 =='budget2') {
        showPopup("Investing $500,000 to $800,000 in Morocco's tourism sector offers promising opportunities with moderate risk. Consider boutique hotels or eco-lodges catering to niche markets, leveraging Morocco's rich cultural heritage and stunning landscapes. Additionally, adventure tourism or wellness retreats could flourish due to rising interest. Collaborating with local communities for authentic experiences while implementing sustainable practices can enhance appeal. With moderate risk, thorough market research, and strategic partnerships, this investment range holds potential for solid returns within Morocco's burgeoning tourism industry.")

      } else if(step1=='tourism1' && step2 =='risk2' && step3 =='budget3') {
        showPopup("Investing $800,000 to $1 million in Morocco's tourism industry presents an enticing opportunity. With a moderate risk appetite, exploring boutique hotels or eco-friendly resorts could yield substantial returns. These segments often offer a balance between risk and growth potential, tapping into Morocco's rich cultural heritage and natural beauty. Diversifying the investment across accommodation, unique experiences, and sustainable practices could create a resilient portfolio. Leveraging Morocco's growing reputation as a tourist hotspot, strategic marketing and partnerships could ensure a steady influx of visitors, maximizing returns while mitigating risks.")
    } 




    else if(step1=='tourism1' && step2 =='risk3' && step3 =='budget1') {
      showPopup("Investing in Morocco's tourism sector with $100,000 to $500,000 presents opportunities in low-risk industries like boutique hotels, eco-tourism ventures, or cultural experiences. Consider establishing a boutique hotel in a high-demand area, capitalizing on Morocco's rich cultural heritage to attract tourists seeking authentic experiences. Eco-tourism initiatives promoting sustainable practices and showcasing Morocco's natural beauty could also be profitable and align with global trends. Partnering with local artisans to create unique cultural experiences or investing in guided tours focusing on historical sites can yield steady returns while minimizing risks in this vibrant and growing sector.")

    } else if(step1=='tourism1' && step2 =='risk3' && step3 =='budget2') {
      showPopup("Investing $500,000 to $800,000 in Morocco's low-risk tourism industry presents a promising opportunity. With its diverse landscapes, rich cultural heritage, and strategic location, Morocco has become a popular destination for international tourists. Consider allocating funds towards upscale accommodation, eco-friendly resorts, or guided tours that cater to the growing demand for experiential travel. Diversifying investments across multiple sectors such as hospitality, transportation, and sustainable tourism initiatives can mitigate risks. Leveraging Morocco's government initiatives and incentives for tourism development adds an additional layer of security. Collaborating with local communities and adhering to sustainable practices can enhance the long-term viability of your investment, tapping into the country's potential as a key player in the global tourism market.")

    } else if(step1=='tourism1' && step2 =='risk3' && step3 =='budget3') {
      showPopup("Investing in Morocco's tourism industry presents opportunities for growth within low-risk sectors. With $800,000 to $1 million, consider exploring boutique hotels or eco-friendly accommodations in popular tourist destinations like Marrakech or Fez. These segments often offer stable returns due to consistent tourist traffic. Alternatively, investing in tour operators specializing in unique experiences or adventure tourism could diversify your portfolio while tapping into Morocco's vibrant cultural landscape. Conducting thorough market research and forging strategic partnerships within the local tourism ecosystem will be crucial for maximizing returns while mitigating risks.")
  } 




  else if(step1=='tourism2' && step2 =='risk1' && step3 =='budget1') {
    showPopup("Investing $100,000 to $500,000 in Morocco's high-risk healthcare and pharmaceutical industry can be a strategic move. The country's evolving healthcare landscape presents growth potential, driven by rising demand for innovative treatments and expanding healthcare infrastructure. However, navigating this niche market requires meticulous due diligence due to regulatory complexities and market volatility. Investing in research-driven pharmaceutical startups or innovative healthcare technology ventures could yield substantial returns but entails high-risk exposure. Collaborating with local industry experts, closely monitoring regulatory changes, and diversifying across promising ventures can mitigate risks while tapping into the sector's growth prospects in Morocco.")

  } else if(step1=='tourism2' && step2 =='risk1' && step3 =='budget2') {
    showPopup("Investing $500,000 to $800,000 in Morocco's high-risk Healthcare and Pharmaceuticals sector presents an opportunity amidst evolving healthcare demands and emerging markets. This investment size allows for strategic positioning in research, development, or innovative healthcare solutions. Despite the inherent risks in this niche, the potential for substantial growth is considerable, given the region's expanding healthcare needs and government initiatives. Partnering with local pharmaceutical companies or startups pioneering novel treatments or technologies could yield substantial returns. However, it's crucial to conduct thorough market research, assess regulatory landscapes, and navigate potential challenges for a calculated yet rewarding venture in this dynamic industry.")

  } else if(step1=='tourism2' && step2 =='risk1' && step3 =='budget3') {
    showPopup("Investing $800,000 to $1 million in Morocco's high-risk Healthcare and Pharmaceuticals sector offers a promising opportunity. Despite its volatility, this niche holds potential for exponential growth due to evolving healthcare needs and market demands. Morocco's strategic location, burgeoning medical tourism, and government support for the pharmaceutical industry make it an enticing prospect. However, the high-risk nature necessitates thorough market analysis, strategic partnerships, and robust risk management. Leveraging this investment range can facilitate research, development, and manufacturing capabilities, enabling entry into niche therapeutic areas or innovative drug formulations. With a dynamic approach and a keen understanding of regulatory landscapes, this investment holds the promise of substantial returns while contributing to the advancement of healthcare solutions in Morocco.")
} 


else if(step1=='tourism2' && step2 =='risk2' && step3 =='budget1') {
  showPopup("Investing in Morocco's Healthcare and Pharmaceuticals industry presents an opportune moderate-risk venture with your capital ranging from $100,000 to $500,000. Morocco's growing healthcare sector, supported by government initiatives and a rising demand for quality medical services, offers promising prospects. The country's strategic location, favorable regulatory environment, and increasing investment in pharmaceutical manufacturing facilities create a conducive market for growth. With this investment range, you can explore opportunities in pharmaceutical manufacturing, distribution networks, or healthcare service providers, tapping into the nation's evolving healthcare landscape while balancing risk and potential returns.")

} else if(step1=='tourism2' && step2 =='risk2' && step3 =='budget2') {
  showPopup("Investing $500,000 to $800,000 in Morocco's Healthcare and Pharmaceuticals sector presents a promising opportunity within a medium/moderate risk industry. The country's growing healthcare market, coupled with favorable government policies and increasing demand for quality medical services, makes it an attractive investment landscape. With this capital, one could consider strategic investments in pharmaceutical manufacturing, healthcare infrastructure development, or innovative medical technology ventures. Partnering with established local companies or supporting research and development initiatives could yield substantial returns while contributing to advancing healthcare accessibility and quality in the region. Despite moderate risks inherent in any market, thorough market analysis and strategic partnerships can mitigate potential downsides, positioning this investment within a calculated risk framework.")

} else if(step1=='tourism2' && step2 =='risk2' && step3 =='budget3') {
  showPopup("Investing $800,000 to $1 million in Morocco's Healthcare and Pharmaceuticals sector presents a promising opportunity within a moderate risk bracket. Morocco's growing healthcare market, coupled with supportive government initiatives, offers a fertile ground for investment. Targeting areas like generic drug manufacturing, innovative healthcare solutions, or specialized clinics could yield substantial returns. With a focus on quality, compliance, and tapping into the country's evolving healthcare needs, this investment aligns with both financial growth potential and the societal impact of enhancing healthcare accessibility and services in the region.")
} 


else if(step1=='tourism2' && step2 =='risk3' && step3 =='budget1') {
  showPopup("Investing in Morocco's healthcare and pharmaceutical sector presents opportunities with moderate risk and promising returns within the region. With an investment range of $100,000 to $500,000, consider exploring segments such as generic pharmaceuticals or medical equipment distribution. Generic drugs have a growing demand due to cost-effectiveness, and Morocco's healthcare system relies on imported medical equipment, offering a niche for localized distribution. Partnering with established local companies or investing in facilities complying with international standards could mitigate risks while tapping into a market poised for growth. Government initiatives promoting healthcare infrastructure development also offer a favorable environment for investment. Conducting thorough market research and forming strategic partnerships will be crucial for successful penetration and sustained growth within this sector.")

} else if(step1=='tourism2' && step2 =='risk3' && step3 =='budget2') {
  showPopup("Investing in Morocco's healthcare and pharmaceuticals sector with $500,000 to $800,000 presents opportunities in a growing market with relatively lower risks. The Moroccan healthcare industry has shown steady expansion, driven by government initiatives and rising demand for quality healthcare services. The pharmaceutical sector benefits from a supportive regulatory environment and increasing domestic consumption. Investing in established pharmaceutical companies or healthcare infrastructure projects, such as hospitals or clinics, could offer stable returns. Additionally, exploring partnerships for manufacturing generic drugs or investing in distribution networks could be promising avenues within this budget range. With cautious yet strategic investment allocation, this sector in Morocco offers potential for steady growth and returns while mitigating higher risks associated with other industries.")

} else if(step1=='tourism2' && step2 =='risk3' && step3 =='budget3') {
  showPopup("Investing in Morocco's healthcare and pharmaceutical industries can offer stable returns with low risk. With $800,000 to $1 million, consider opportunities in established pharmaceutical companies or healthcare facilities experiencing steady growth. Look for companies with a strong market presence, consistent revenue streams, and a focus on innovation. Morocco's pharmaceutical sector has shown resilience and potential for expansion due to increasing healthcare demands. Diversifying investments across several established firms or projects within these industries can mitigate risks while capitalizing on the sector's stability and growth prospects in the region.")
} 


else if(step1=='tourism3' && step2 =='risk1' && step3 =='budget1') {
  showPopup("Investing $100,000 to $500,000 in Morocco's high-risk agriculture and agribusiness sector can yield promising returns. The industry shows potential due to emerging technologies, government support, and growing global demand for sustainable food sources. However, it comes with risks such as weather uncertainties, market fluctuations, and regulatory challenges. Consider diverse opportunities like precision farming, organic produce, or agri-tech innovations. Partnering with local farmers or agri-startups, implementing efficient irrigation systems, or exploring niche markets could optimize returns. Thorough market research, risk mitigation strategies, and a resilient approach are crucial for success in this potentially rewarding yet volatile landscape.")

} else if(step1=='tourism3' && step2 =='risk1' && step3 =='budget2') {
  showPopup("Investing $500,000 to $800,000 in Morocco's high-risk agricultural and agribusiness sectors holds promising potential despite the inherent challenges. The country's fertile land, conducive climate, and government support for agriculture create opportunities for high returns. Targeting innovative farming techniques, such as precision agriculture or organic farming, can mitigate risks while enhancing yield. Additionally, investing in value-added agribusiness ventures like food processing or agricultural technology can diversify the portfolio and amplify profitability. While the sector faces uncertainties like weather fluctuations and market volatility, strategic partnerships, thorough market analysis, and leveraging technology for efficiency can optimize the investment for substantial long-term growth.")

} else if(step1=='tourism3' && step2 =='risk1' && step3 =='budget3') {
  showPopup("Investing $800,000 to $1 million in Morocco's high-risk agriculture and agribusiness sector offers promising potential despite its challenges. This industry presents lucrative opportunities due to evolving technologies, increasing demand for sustainable practices, and growing global interest in Moroccan produce. However, navigating this terrain demands a strategic approach, given the sector's volatility, market fluctuations, and susceptibility to external factors like climate changes and geopolitical shifts. Investing in high-risk ventures within this niche could involve initiatives like modernizing farming techniques, introducing innovative crop varieties, or establishing value-added agribusiness enterprises. Partnering with local experts, leveraging technological advancements, and fostering resilient supply chains will be pivotal for success. The investment's high-risk nature warrants comprehensive due diligence, adaptable strategies, and a long-term vision to mitigate risks and capitalize on the sector's immense potential.")
} 


else if(step1=='tourism3' && step2 =='risk2' && step3 =='budget1') {
  showPopup("Investing in Morocco's agricultural sector presents promising opportunities within a moderate risk bracket, especially in agribusiness ventures. With an investment range of $100,000 to $500,000, you can explore diverse avenues such as modernizing farming techniques, introducing innovative technologies for irrigation or crop management, or participating in value-added processing and export of agricultural produce. Morocco's favorable climate, government incentives, and growing international demand for its agricultural products make it an attractive landscape for investment. Collaborating with local farmers or establishing processing units can yield sustainable returns while contributing to the country's agricultural growth. While moderate risk is inherent in any investment, strategic planning and leveraging local expertise can mitigate potential challenges and ensure a promising investment in Morocco's flourishing agribusiness sector.")

} else if(step1=='tourism3' && step2 =='risk2' && step3 =='budget2') {
  showPopup("Investing $500,000 to $800,000 in Morocco's Agriculture and Agribusiness sector offers a promising opportunity with moderate risk. The country's fertile lands, diverse climate, and government support make it an attractive market. Consider ventures like olive oil production, high-value crops, or agro-processing facilities, leveraging Morocco's growing demand for quality agricultural products. Collaborating with local farmers, investing in modern technology, and establishing efficient supply chains can optimize returns. While there are market fluctuations and operational challenges, prudent management and strategic partnerships can mitigate risks and yield substantial growth in this dynamic and rewarding industry.")

} else if(step1=='tourism3' && step2 =='risk2' && step3 =='budget3') {
  showPopup("Investing $800,000 to $1 million in Morocco's agriculture and agribusiness sector presents a strategic opportunity in a moderate-risk industry. Morocco boasts fertile land, a favorable climate, and governmental support, making it conducive for agribusiness. Opting for medium-risk ventures like greenhouse farming or specialized crop cultivation can yield lucrative returns. Consider diversified agricultural projects, such as high-value crops or modernized farming techniques. Leveraging technology for irrigation systems or eco-friendly practices can enhance efficiency and sustainability, mitigating risks while maximizing the potential for substantial returns in this thriving sector.")
} 


else if(step1=='tourism3' && step2 =='risk3' && step3 =='budget1') {
  showPopup("Investing in Moroccan agriculture and agribusiness presents promising opportunities within low-risk industries. With a budget ranging from $100,000 to $500,000, consider avenues like olive oil production, date farming, or high-value crops such as saffron. Morocco's favorable climate and government support for agriculture offer stability. Partnering with established local cooperatives or investing in modern irrigation systems can enhance yields and mitigate risks. Additionally, exploring agro-processing ventures like food packaging or organic products could yield higher returns while contributing to the country's burgeoning export market. Overall, this investment range allows for strategic diversification and growth within Morocco's thriving agricultural sector.")

} else if(step1=='tourism3' && step2 =='risk3' && step3 =='budget2') {
  showPopup("Morocco offers promising opportunities in agriculture and agribusiness for investors seeking low-risk ventures. With your investment of $500,000 to $800,000, you could consider investing in high-value crops like olives, citrus fruits, or dates, leveraging Morocco's favorable climate for these products. Another avenue could be agribusiness ventures such as food processing or packaging facilities, tapping into the growing demand for processed agricultural goods both domestically and for export. Additionally, investing in sustainable farming practices or technology to improve agricultural yield and efficiency could be a strategic move, given the global emphasis on sustainable practices. Morocco's stable political environment and government support for agricultural development make it an attractive and relatively low-risk option for such investments.")

} else if(step1=='tourism3' && step2 =='risk3' && step3 =='budget3') {
  showPopup("Investing in Morocco's agriculture and agribusiness sector offers promising opportunities with relatively low risk. With an allocated budget of $800,000 to $1 million, focusing on high-demand crops like olives, citrus fruits, or almonds could be lucrative. Consider vertical integration, such as establishing a small-scale processing facility for value-added products like olive oil or citrus extracts. Investing in modern irrigation systems or sustainable farming practices could optimize yields and reduce risks associated with climate fluctuations. Leveraging Morocco's favorable agribusiness policies and access to international markets, alongside local partnerships for distribution, can further mitigate risks while maximizing returns on your investment.")
} 
      
    
    
    else {
        showPopup("if you see this you successfully hacked us :o")
      }

      return;
    }


 
    const showPopup = (title, body) => {
      document.getElementById('popupTitle').textContent = title;
      document.getElementById('popupText').textContent = body;
      document.getElementById('popup').style.display = 'block';
    }

    const hidePopup = () => {
      step = 1
      document.getElementById('step3').style.display = 'none';
      document.getElementById('step1').style.display = 'grid';

      document.getElementById('popup').style.display = 'none';
    }

  





























