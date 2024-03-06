import React from 'react'
import Button from './Button'


const Buttonlist = () => {
  const list = ['all', 'music','Gaming','Foodie','india']
  return (
    <div className='flex' >
      {
        list.map((data,index)=>
        <Button name={data} key={index} />

        )
      }

    </div>
  )
}

export default Buttonlist