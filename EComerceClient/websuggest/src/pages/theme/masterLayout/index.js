import {memo} from 'react';
import Header from '../header';
import Footer from '../footer';
import { CartProvider } from 'utils/Context';

const MasterLayout = ({children,...props}) => {
    return (
        <div {...props}>
            <CartProvider>
                <Header/>
                    {children}
                <Footer/>
            </CartProvider>
        </div>
        
    );
}

export default memo(MasterLayout);