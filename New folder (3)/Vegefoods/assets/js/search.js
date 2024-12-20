let boxx = document.getElementById("boxx")
let loading = false;

async function getApi() {
    if (loading) return;
    loading = true;
    boxx.innerHTML += `<img id="loadgift" src="https://th.bing.com/th/id/OIP.ngNzwrRBDElDnf2CLF_RbgHaHf?rs=1&pid=ImgDetMain" alt="">`;

    try {
        let { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss`);
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
    } finally {
        loading = false;
    }
}

getApi()


let abcz = document.getElementById("abcz")
let cbza = document.getElementById("cbza")
let expensive = document.getElementById("expensive")
let cheap = document.getElementById("cheap")
let def = document.getElementById("def")


abcz.addEventListener("click", alfabe)
cbza.addEventListener("click", befaal)
expensive.addEventListener("click", expensiveToCheap)
cheap.addEventListener("click", cheapToExpensive)
async function alfabe() {
    try {
        boxx.innerHTML = ""
        let { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss`)
        let result = data.sort((a, b) => a.title.localeCompare(b.title))

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

    }
}

async function befaal() {
    try {
        boxx.innerHTML = ""
        let { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss`)
        let result = data.sort((a, b) => b.title.localeCompare(a.title))

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

    }
}

async function expensiveToCheap() {
    try {
        boxx.innerHTML = ""
        let { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss`)
        let result = data.sort((a, b) => b.price - a.price);


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

    }
}

async function cheapToExpensive() {
    try {
        boxx.innerHTML = ""
        let { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss`)
        let result = data.sort((a, b) => a.price - b.price);


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

    }
}