import React from 'react'

const Formtitle = props => (
  <pre style={{fontSize:'16px'}}>
  	 {
  	 	props.city && props.country && <pre style={{color:'white'}}>
        Temparature  Humidity  Condition
  	 	</pre>
  	 }
  </pre>
)

export default Formtitle
