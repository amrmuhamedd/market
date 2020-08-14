import React from 'react';
import Navbar from '../../component/nav/nav'
import Aux from '../../hoc/ar';
import Footer from '../../component/ui/footer/footer'
const layout = (props) => {
    return (
        <Aux>
            
         <Navbar />
         <main >
            {props.children}
         </main>
         <Footer/>
        </Aux>
      
    )
}

export default layout;