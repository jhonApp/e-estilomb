import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Feminino",
    },
    {
      cateImg: "./images/category/trousers_959069.png",
      cateName: "Jeans",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Básicos",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Acessórios",
    }
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
