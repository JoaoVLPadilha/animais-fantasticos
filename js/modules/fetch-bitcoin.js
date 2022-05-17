
export default function fetchBitcoin(url, target) {
fetch(url)
.then(r => r.json())
.then(response => {
  const btcPreco = document.querySelector(target);
  btcPreco.innerText = (1000 /response.BRL.sell).toFixed(4)
}).catch(erro =>{
  console.log(Error(erro))
})

}

