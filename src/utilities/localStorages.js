


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


export {
    getCardFormLocalStorages,
    addLocalStorage
}











