

let boxx = document.getElementById("boxx")
let page = 0;
let limit = 4;
let loading = false;

async function getApi() {
    if(loading) return;
    loading = true;
    boxx.innerHTML += `<img id="loadgift" src="https://th.bing.com/th/id/OIP.ngNzwrRBDElDnf2CLF_RbgHaHf?rs=1&pid=ImgDetMain" alt="">`;
    
    try {
     page++;
     let {data} = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss?page=${page}&limit=${limit}`);
     document.getElementById("loadgift").remove();

     data.forEach((item) => {
      boxx.innerHTML += `
       <div class="inbox">
                        <div class="imgbox">
                            <img src="${item.image}" alt="">
                        </div>
                        <p>${item.title}</p>
                        <div class="text">
                            <div class="money">
                                <p>$${item.price}</p>
                            </div>
                            <div class="boxs">
                                <div class="box">
                                    <i class="fa-solid fa-bars"></i>
                                </div>
                                <div class="box">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                                <div class="box">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                            </div>
                        </div>
                    </div>
      `

     });
     
      
    } catch (error) {
      console.log(error);     
    } finally{
      loading = false;
    }
}

getApi()

let morebtn = document.getElementById("morebtn");
morebtn.addEventListener("click",getApi)

function updateTime() {
    const targetDate = new Date("2024-12-31T23:59:59");
  
    const now = new Date();
    const time = targetDate - now;
  
    if (time > 0) {
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hour = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minute = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((time % (1000 * 60)) / 1000)
      document.getElementById("day").innerHTML = `${days}`;
      document.getElementById("hour").innerHTML = `${hour}`;
      document.getElementById("minute").innerHTML = `${minute}`;
      document.getElementById("second").innerHTML = `${second}`;
    }
    
  }
  
  setInterval(() => {
    updateTime()
  }, 1000)