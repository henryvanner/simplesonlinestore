import { InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
    typePolicies: {
        Game: {
            fields: {
                isInCart: {
                    read: (isInCart = false) => {
                        /*console.log('inside read function');
                        console.log(`Id: ${readField("id")} isInCart: ${isInCart}`);*/
                        return isInCart;
                    }
                }
            }
        }
    }
});

export default cache;