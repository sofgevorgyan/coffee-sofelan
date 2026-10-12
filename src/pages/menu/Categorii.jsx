import axios from "axios"
import { useEffect, useState } from "react"

export default function Categorii() {
  const [catData, setCatData] = useState([])
  const [menuData, setMenuData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [filteredMenu, setFilteredMenu] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/MenuCategory")
      .then((res) => setCatData(res.data))
      .catch((err) => console.error(err))
  }, [])

  useEffect(() => {
    axios.get("http://localhost:3001/menu")
      .then((res) => setMenuData(res.data))
      .catch((err) => console.error(err))
  }, [])

  useEffect(() => {
    if (selectedCategory === 0) {
      setFilteredMenu(menuData)
    } else {
      setFilteredMenu(
        menuData.filter(item => Number(item.category) === Number(selectedCategory))
      )
    }
  }, [menuData, selectedCategory])

  return (
    <article className="p-15 bg-[#f9f5f0]">
      <div className="flex gap-4 flex-wrap justify-center mb-8">
        <button
          onClick={() => setSelectedCategory(0)}
          className="px-6 py-2 rounded-xl text-15 font-bold border-2 bg-[#e9c09c]/20 border-[#3a2a18] text-[#b85c38] hover:bg-[#fdf7f1] transition-colors duration-200"
        >
          Все
        </button>

        {catData.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className="px-6 py-2 rounded-xl text-15 font-bold border-2 bg-[#e9c09c]/20 border-[#3a2a18] text-[#b85c38] hover:bg-[#fdf7f1] transition-colors duration-200"
          >
            {cat.name}
          </button>
        ))}
      </div>

      {filteredMenu.length === 0 ? (
        <p className="text-center text-[#b85c38] font-semibold text-lg">
          В этой категории пока нет блюд
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              className="border-gray-500 p-4 rounded-xl shadow-md flex flex-col items-center text-center bg-[#e9c09c]/20"
            >
              <img src={item.photo} alt={item.name} className="w-30 h-30" />
              <h3 className="text-[35px] font-bold text-[#5D3A2E]">{item.name}</h3>
              <p className="mt-2 font-bold text-[#b85c38] text-[20px]">{item.price} ₽</p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  )
}

