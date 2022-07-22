import React, { useEffect, useState } from 'react'

export default function TimeCard({item}) {
  
  // const [boluher, setboluher] = useState(false)
 



  return (
    <div>

      <div className="">

        {
          item.Day===0&&item.Hours==0&&item.Munites==0&&item.second_here==0 ? (<><p>Sale Ended</p></>) : (<> {item.Day}:{item.Hours}:{item.Munites}:{item.second_here}</>)
        }


      </div>

    </div>
  )
}
