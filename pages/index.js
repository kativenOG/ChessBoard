import Head from 'next/head'
import { useState } from 'react'
import Tessera from '../components/Tessera'
import OutsideH from '../components/OutsideH'
import OutsideV from '../components/OutsideV'
import EmptyTile from '../components/EmptyTile'
import ActorPawn from '../components/ActorPawn'

export default function Home() {

  const [selected,chooseSelected] = useState(0)

  const [actors,setactor] =  useState(
    [ 
      <ActorPawn actor="/actor1.jpg"/>, <ActorPawn actor="/actor2.jpg"/>,
      <ActorPawn actor="/actor3.jpg"/>, <ActorPawn actor="/actor4.jpg"/>,
      <ActorPawn actor="/actor5.jpg"/>, <ActorPawn actor="/actor6.jpg"/>,
      <ActorPawn actor="/actor7.jpg"/>
    ]
  )

  let oriz= ["A","B","C","D","E","F","G","H"]
  let ver= ["1","2","3","4","5","6","7","8"]
  let counter = true  
  let inverse = 0

  let squareList = []

  for (let i =0; i<100;i++){
    if(i<9 && i>0)  squareList[i]= <EmptyTile dir={1}/>
    else if( (i+1)%10==0 && i!=9 && i!=99 ) squareList[i] = <EmptyTile dir={0}/>
    else if( i%10 == 0 || i==9 ) squareList[i] = <OutsideV content={ver[(i/10)-1]} i={i} />
    else if(i>90)  squareList[i]= <OutsideH content={oriz[i-91]} i={i}/>
    else {
      if(inverse%8!=0) counter= !counter
      squareList[i] = <Tessera color={counter}/>
      inverse++
    }
  }

  return (
  <div className="h-screen w-screen">
    <Head>
        <title>SognoSonFesso</title>
        <link rel="icon" href="/public/favicon.ico" />
    </Head>
    
    <div className="flex items-center justify-center h-full w-full bg-stone-700">
      <div className="grid grid-cols-10 ">
        {squareList}
      </div>
    </div> 

    <ActorPawn actor="/actor1.jpg"/>      
    <ActorPawn actor="/actor2.jpg"/>      
    <ActorPawn actor="/actor3.jpg"/>      
    <ActorPawn actor="/actor4.jpg"/>      
    <ActorPawn actor="/actor5.jpg"/>
    <ActorPawn actor="/actor6.jpg"/>      
    <ActorPawn actor="/actor7.jpg"/>
  </div>
  )
}
