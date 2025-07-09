let maincontainer=document.querySelector(".container")
// console.log(maincontainer.innerHTML)

let container=document.querySelector(".contrydetails")

// Get the query string including the "?"
const queryString = window.location.search;// Parse it
const params = new URLSearchParams(queryString);// Get the 'name' value
let para = params.get("name");
console.log(para);  // → "Mayotte"
let cd=fetch(`https://restcountries.com/v3.1/name/${para}`)
    cd.then((res)=>{
    return res.json()
  }).
    then(json=>{
        maincontainer.innerHTML=''
        element=json[0]
        console.log(element)
        let lang=[]
        for (const [key, value] of Object.entries(element.languages)) {
           lang.push(value)
              }
        let currencies=[]
        for (const [key, value] of Object.entries(element.currencies)) {
           currencies.push(key)
              }
        let contrydetails=document.createElement('div')
                  contrydetails.classList.add('contrydetails')
                  contrydetails.innerHTML=`
                  <div class="card">
                      <div class="img-container">
                        <img src=${element.flags.png} alt="#">
                      </div>
                      <div class="contry-info">
                          <h2>Contry-${element.name.common}</h2>
                        </br>
                        <div class="contryPCN">
                          <h3><span>Population :</span> <span class="populaion">${element.population.toLocaleString('en-IN')}</span></h3>
                      
                          <h3><span>Capital :</span><span class="Capital">${element.capital[0]}</span></h3>
                      
                          <h3><span>Region:</span><span class="Name">${element.region}</span></h3>
                        </div>
                      </div>
                </div>
              <div class="card2">
                <div class="card2inner">
            <div class="card2innerchild">
              <div class="header">
                <p>${element.name.common}</p>
              </div>
              <div class="main">
              <p><span>Sub-Region: </span><span>${element.subregion}</span></p>
              <p><span>Capital: </span><span>${element.capital}</span></p>
              <p><span>Top Level Domain: </span><span>domain</span></p>
              <p><span>Currencies: </span><span>${currencies}</span></p>
              <p><span>Languages: </span><span>${lang}</span></p>
              <p><span>Time-Zone: </span><span>${element.timezones}</span></p>
                
              </div>
              <div class="footer">
                <div class="borderinfo"><h2>Border Contries</h2></div>
                <div>
                  <button><a href="./detailedinfo.html?name=${element.borders[0]}">${element.borders[0]}</a></button>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  `
                  // <button><a href="./detailedinfo.html?name=${element.borders[1]}">${element.borders}</a></button>
            // console.log(contrydetails)
            maincontainer.append(contrydetails);
    })



//   async function loadData() {
//   try {
//     const response = await fetch("https://restcountries.com/v3.1/name/");
//     console.log("Raw Response:", response);
    
//     if (!response.ok) {
//         throw new Error(`Status error: ${response.status}`);
//     }
    
//     const data = await response.json();
//     console.log("Parsed JSON:", data);
// } catch (err) {
//     console.log('hjk')
//     console.error("Fetch error:", err);
//   }
// }

// loadData();
