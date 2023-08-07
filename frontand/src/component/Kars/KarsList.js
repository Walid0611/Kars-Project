import React ,{useEffect} from 'react'
import KarsCard from './KarsCard.js'
import { useSelector, useDispatch } from 'react-redux'
import {setKars} from '../../store/KarsSlice'
import { fetchAllCars } from '../../api/AuthCars'


const KarsList = () => {

  const Kars=useSelector(state=>state.KarsElement)
  console.log ('KarsElement',Kars)


  const dispatch= useDispatch()


 
const getAllKars =  async() => {
  const data=  await fetchAllCars()
  console.log('Kars:',data.allBookings)
  dispatch(setKars(data.allBookings))

  }
  useEffect(()=>{getAllKars()},[])




    return (



    <div>{Kars.map((e) =><KarsCard   mini={e}       getAllKars={getAllKars}     />)}

    </div>
  )
}

export default KarsList
