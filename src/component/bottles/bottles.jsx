import React, { use, useEffect, useState } from 'react';
import Bottle from '../bottle/bottle';
import './bottles.css';
import { addLocalStorage, getCardFormLocalStorages, removeFormLocalStorages } from '../../utilities/localStorages';

const Bottles = ({ bottlesPromise }) => {
    const bottles = use(bottlesPromise);
    // console.log(bottles);
    const [purchase, setPurchase] = useState([]);

    useEffect(() => {
        const getStoredCardIds = getCardFormLocalStorages();
        // console.log(getStoredCardIds, bottles);
        const storedBottle = [];
        for (const id of getStoredCardIds) {
            const findBottle = bottles.find(bottle => bottle.id === id);
            storedBottle.push(findBottle);
        }
        setPurchase(storedBottle)


    }, [bottles])


    const purchaseProduct = (bottle) => {
        // console.log(bottle);
        // setPurchase(bottle);
        const newPurchase = [...purchase, bottle];
        // console.log(newPurchase);        
        setPurchase(newPurchase);
        addLocalStorage(bottle.id);

    }
    const removeFormCart = (id) => {
        const remainingCart = purchase.filter(bottle => bottle.id !== id);
        setPurchase(remainingCart);
        removeFormLocalStorages(id);
    }

    return (
        <div>
            <h2>Bottles : {bottles.length}</h2>
            <div >
                <h3>Purchased Product : {purchase.length}</h3>
                <div className='purchased'>
                    {
                        purchase.map(purchase => {
                            return (
                                <div>
                                    <img key={purchase.id} src={purchase.img} alt="" />
                                    <button onClick={() => removeFormCart(purchase.id)}>x</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id} purchaseProduct={purchaseProduct} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;