const loadPhones = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;

    displayPhone(phones);
}

const displayPhone = (phones) => {

    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.textContent = '';

    // -------------show all button toggle--------------
    const showAllContainer = document.getElementById("show-all-container");

    if (phones.length > 12) {
        showAllContainer.classList.remove("hidden");
    }
    else {
        showAllContainer.classList.add("hidden");
    }

    // -------------show first 12 product--------------
    phones = phones.slice(0, 12);



    phones.forEach(phone => {

        const phoneCard = document.createElement("div");
        phoneCard.classList = `border h-[633px] p-7 rounded-lg`;
        phoneCard.innerHTML = `
            <div class="w-full h-80 bg-[#0D6EFD0D] flex justify-center items-center">
                <img class="w-40 h-56" src="${phone.image}" alt="">
            </div>
            <div class="text-center">
                <h3 class="text-[#403F3F] text-2xl font-bold my-6">${phone.phone_name}</h3>
                <p class="text-[#706F6F] text-lg font-normal mb-4">There are many variations of passages of
                    available, but the majority have suffered</p>
                <p class="text-[#403F3F] text-2xl font-bold mb-4">$999</p>
                <button class="bg-[#0D6EFD] text-white text-xl font-semibold rounded-lg px-5 py-2">Show
                    Details</button>
            </div>
        `
        phoneContainer.appendChild(phoneCard);
    });
}

const handlesearch = () => {
    const search = document.getElementById("search-input");
    const searchText = search.value;

    loadPhones(searchText);
}