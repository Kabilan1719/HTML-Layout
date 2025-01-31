const loc = new URLSearchParams(window.location.search);
console.log("Location:", window.location.search);
let id = loc.get('id');
console.log("Fetched ID:", id);
async function getdata()
{
    try
    {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if(res.status != 200)
        {
            throw new Error('Product not found');
        }
        return res.json();
    }
    catch(err)
    {
        alert(err.message);
    }
}
async function calldata()
{
    let data = await getdata();
    let viewproduct = document.getElementsByClassName('prodetails')[0];
    if(data)
    {
        let star = document.createElement('p');
        for(let i=1;i<=5;i++)
        {
            if(i <= Number(data.rating.rate))
            {
                star.innerHTML += '<i class="fa-solid fa-star" style="color: gold"></i>';
            }
            else if(i- Number(data.rating.rate) < 1)
            {
                star.innerHTML += '<i class="fa-solid fa-star-half" style="color: gold"></i>';
            }
            else
            {
                star.innerHTML += '<i class="fa-regular fa-star" style="color: white"></i>';
            }
        }
        star.innerHTML += `<small>(${data.rating.count}Buys)</small>`;
        viewproduct.innerHTML = `<div class="container mt-5">
            <div class="row align-items-center">
                <div class="col-md-4 text-center">
                    <img src="${data.image}" class="img-fluid rounded" alt="Product Image">
                </div>
                <div class="col-md-6">
                    <h3 class="fw-bold">${data.title}</h3>
                    <h5>${data.category}</h5>
                    <p class="text-muted">${data.description}</p>
                    <p class="price">$${data.price}</p>
                    <div id="star-rating">${star.outerHTML}</div>
                    <button class="btn btn-primary mt-3 w-50 d-block mx-auto">Add to Cart</button>
                </div>
            </div>
        </div>`;
    }
}
calldata();