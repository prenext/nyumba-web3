import { N } from 'ethers'
import React from 'react'
import Home from '@/app/(pages)/widgets/Home'
import How_it_works from './widgets/How_it_works'
import Hero from '@/app/(pages)/widgets/Hero'
import Features from '@/app/(pages)/widgets/Features'
import Founders from '@/app/(pages)/widgets/Founders'
import HomeSearch from '@/app/(pages)/widgets/HomeSearch'
import PropertiesSection from '@/app/(pages)/widgets/PropertiesSection'


function page() {
  return (
   <><HomeSearch/><Home /><Hero />
   <How_it_works/>
   <Features/>
   <PropertiesSection/>
   <Founders/></>
  )
}

export default page