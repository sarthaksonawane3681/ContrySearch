
let maincontainer=document.querySelector(".container")
// console.log(maincontainer.innerHTML)
let gotdetailsofApi=getdetailsOfApi();

gotdetailsofApi();
  let search =document.querySelector('.searchbr')
function getdetailsOfApi(){
  let contrylist=document.querySelector(".contrylist")
  let showtotal=document.querySelector("button")
  let search =document.querySelector('.searchbr')
  let restContriesDetails=JSON.parse(localStorage.getItem('restContriesDetails'))||[];

  // console.log(restContriesDetails)
  function AppendToDiv(){
    
      if(!restContriesDetails.length){
      let dd= fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,population,languages,flags,currency")
      dd.then((response)=>{
        return response.json()
      } 
      ).then(json => {
        let num=0;
        json.forEach(element => {
          restContriesDetails[num]=element;
          num++;    
        });
        localStorage.setItem('restContriesDetails',JSON.stringify(restContriesDetails))
        restContriesDetails=JSON.parse(localStorage.getItem('restContriesDetails'))
        contry("",restContriesDetails);
          }
        ).catch(err=>{
          contry(err)
          location.reload()
        
        })
      }else{
        contry("",restContriesDetails);
      }
      
      search.addEventListener('keyup',(e)=>{
        console.log(e)
        console.log(e.target.value)
        let newDL=restContriesDetails.filter((el)=>{
          // console.log(el.name.common.toLowerCase().startsWith(e.target.value.toLowerCase()))
          return el.name.common.toLowerCase().startsWith(e.target.value.toLowerCase())

        })
        contry("",newDL)
        console.log(newDL)


      })

      function contry(err="",ContrySearchlist=[]){
        // console.log(ContrySearchlist)
        showtotal.innerHTML=`<b>${ContrySearchlist.length} In-List</b>`
          if(err!==""){
            showtotal.innerHTML=`Waiting...`
            contrylist.innerHTML=`<h3>${err}</h3><br>
            <h1>Please Check Your Internet Connection</h1>`

          }else{
            contrylist.innerHTML=``
            ContrySearchlist.forEach(element => {
              // console.log(element.name.common)
                  let card=document.createElement('div')
                  card.classList.add('card')
                  card.innerHTML=`<div class="img-container">
                      <a href="./detailedinfo.html?name=${element.name.common}" target="_black">
                      <img src=${element.flags.png} alt="#">
                      </a>
                    </div>
                    <div class="contry-info">
                      <h2>Contry-${element.name.common}</h2>
                      </br>
                      <a href="./detailedinfo.html?name=${element.name.common}" target="_black">
                        <h3><span>Population : </span> <span class="populaion">${element.population.toLocaleString('en-IN')}</span></h3>
                        <h3><span>Capital : </span><span class="Capital">${element.capital}</span></h3>
                        <h3><span>Region : </span><span class="Region">${element.region}</span></h3>
                        </a>
                        </div>`
                        contrylist.append(card);
                        
                      }  )
                    }
          }
        }
        return AppendToDiv;

}
    