let array;
async function getdata()
{
    let res = await fetch('https://fakestoreapi.com/products');
    return await res.json();
}
async function waitdata()
{
    array = await getdata();
    let addproduct = document.getElementById('cards');
    let categories = "categories";
    addproduct.innerHTML = '';
    array.forEach(a => {
        if(categories != a.category)
        {
            addproduct.innerHTML += `<div class="col-md-4">
                <a href="prodetails.html?id=${a.id}">
                    <div class="card" style="width: 18rem;">
                        <img src="${a.image}" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${a.title}</h5>
                            <p class="card-text">${a.category}</p>
                            <p class="card-text">$${a.price}</p>
                        </div>
                    </div>
                </a>
            </div>`;
        }
    });
}
waitdata();