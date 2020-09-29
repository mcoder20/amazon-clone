import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

import './Subtotal.css';

function Subtotal() {

    const [{ basket }, dispatch] = useStateValue();

    const getTotalBasketBalance = () => {
        return basket?.reduce((total, item) => total + item.price, 0);
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getTotalBasketBalance()}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>

        </div>
    )
}

export default Subtotal
