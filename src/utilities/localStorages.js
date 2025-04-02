


const getCardFormLocalStorages = () => {
    const storedString = localStorage.getItem("cart");
    if (storedString) {
        const storedCard = JSON.parse(storedString);
        return storedCard;
    }
    return [];
}


const saveToLocalStorages = (cart) => {
    const stringified = JSON.stringify(cart);
    localStorage.setItem("cart", stringified);
}

const addLocalStorage = (id) => {
    const cart = getCardFormLocalStorages();
    const newCart = [...cart, id];
    saveToLocalStorages(newCart);
}
const removeFormLocalStorages = (id) => {
    const storedCard = getCardFormLocalStorages();
    const remainingCart = storedCard.filter(storedId => storedId !== id);
    saveToLocalStorages(remainingCart);
}

export {
    getCardFormLocalStorages,
    addLocalStorage,
    removeFormLocalStorages
}











