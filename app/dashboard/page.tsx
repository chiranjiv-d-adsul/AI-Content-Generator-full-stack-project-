"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateList from './_components/TemplateList'
function Dashboard() {

  const [userSearchInput, setUserSearchInput] = useState<string>()

  return (
    <div>
          {/* search section */}
          <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>
          {/* template list section */}
          <TemplateList userSearchInput={userSearchInput} />
    </div>
  )
}

export default Dashboard
