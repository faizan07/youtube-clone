import React from 'react'
import Button from './Button'

const list = [{tag:"All", color:"bg-gray-300 px-4 py-2 m-2 rounded-lg"}, 
{tag:"Tech", color:"bg-red-300 px-4 py-2 m-2 rounded-lg"}, 
{tag:"Food", color:"bg-yellow-300 px-4 py-2 m-2 rounded-lg"}, 
{tag:"Sports", color:"bg-green-300 px-4 py-2 m-2 rounded-lg"}, 
{tag:"Travel", color:"bg-red-300 px-4 py-2 m-2 rounded-lg"},
{tag:"Music", color:"bg-pink-300 px-4 py-2 m-2 rounded-lg"},
{tag:"Football", color:"bg-cyan-300 px-4 py-2 m-2 rounded-lg"},
{tag:"Cricket", color:"bg-orange-300 px-4 py-2 m-2 rounded-lg"},
{tag:"Fashion", color:"bg-amber-300 px-4 py-2 m-2 rounded-lg"},
{tag:"Coffee", color:"bg-lime-300 px-4 py-2 m-2 rounded-lg"},
{tag:"Groom", color:"bg-emerald-300 px-4 py-2 m-2 rounded-lg"},
{tag:"Webshows", color:"bg-teal-300 px-4 py-2 m-2 rounded-lg"}]

const ButtonList = () => {
  return (
    <div>
      {list.map((item, index) => {
        return <Button key={index} name={item.tag} color={item.color}/>
      })}
    </div>
  )
}

export default ButtonList