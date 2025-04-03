import Link from "next/link"

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto text-center py-24">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Статья не найдена</h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Запрашиваемая статья не существует или была удалена.
      </p>
      <Link href="/blog" className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md transition-colors">
        Вернуться к блогу
      </Link>
    </div>
  )
}

