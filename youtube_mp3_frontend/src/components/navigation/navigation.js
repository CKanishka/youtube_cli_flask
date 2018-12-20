import React from 'react'

const Navigation = (props) => {
    if(props.isSignedIn){
        return (
           
            <div class="">
            
              <fieldset class="cf bn mw7 mt2">
                <div class="cf">
                  <input class="f6 f5-l input-reset bn fl blue bg-white pa3 lh-solid w-100 w-75-m w-80-l br-pill" placeholder="Search for your song..." type="text" name="song" id="song"/>
                  <input class="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-blue hover-bg-light-blue white pointer w-100 w-25-m w-20-l br-pill" type="submit" value="Search"/>
                </div>
              </fieldset>
          </div>
        );
     } else {
        return (
            <nav style={{display:'flex',justifyContent:'center'}}>
                <p className='f3 link dim white pa3 pointer system calisto'> </p>
            </nav>
        );      
     }  
}

export default Navigation;