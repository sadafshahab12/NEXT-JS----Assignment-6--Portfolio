"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
const Skill2ndCard = () => {
  const route  = useRouter()
  return (
    <>
         {/* second card  */}
         <div className=" bg-gradient-to-b from-[#7C48ED] to-white p-[0.1rem] rounded-lg ">
          <div className="bg-white p-1 rounded-md">
            <div className="p-0 relative ">
              <h2 className=" text-[0.9rem] bg-[#372E2E] py-4 px-2 rounded-lg text-white text-wrap tracking-[0.4rem] absolute top-[-2rem] left-[2rem]">
                Extra Ordinary
              </h2>
            </div>

            <div className="bg-[#7C48ED] space-y-5 rounded-md px-5 pt-10 pb-5 text-white">
              <div className='text-center'>
                <h1 className="text-[1.8rem] tracking-[0.4em] font-bold">
                  Graphics
                </h1>
                <h1 className="font-thin text-[1.1rem] tracking-[0.8em]">
                  Designing{" "}
                </h1>
              </div>

              <p className="text-[0.8rem] w-[13rem] tracking-widest leading-6">
                Creative Graphic Designer crafting stunning visuals that engage
                audiences.
              </p>

              <button onClick={()=>route.push("https://wa.me/+923402195735")} className="flex gap-3 mx-auto items-center bg-black text-white py-2 px-5 rounded-lg text-[0.9rem]">
                {`Connect with Me`}
                <FontAwesomeIcon icon={faLink} width={25} height={25} />
              </button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Skill2ndCard
