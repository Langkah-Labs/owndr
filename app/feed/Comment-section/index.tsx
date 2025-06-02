import { IoClose } from 'react-icons/io5'
import useStore, { setIsCommentOpen } from '~/stores/global'
import AddComment from '~/app/feed/Add-comment-section'

const reviews = [
  {
    id: 1,
    rating: 5,
    content: `
      <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
    `,
    date: 'July 16, 2021',
    datetime: '2021-07-16',
    author: 'Emily Selman',
    avatarSrc:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  },
  {
    id: 2,
    rating: 5,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    author: 'Hector Gibbons',
    avatarSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  },
  {
    id: 2,
    rating: 5,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    author: 'Hector Gibbons',
    avatarSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  },
  // More reviews...
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Index() {
  const isCommentOpenHandler = useStore(setIsCommentOpen)

  return (
    <div className="bg-white fixed rounded-lg py-2 px-12 w-8/12 h-[32rem]">
      <button
        onClick={() => isCommentOpenHandler('')}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
      >
        <span className="sr-only">Close</span>
        <IoClose size={24} />
      </button>
      <div className="overflow-y-scroll w-full h-full pr-8 py-4 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Comments</h2>
        <div className="my-2">
          <AddComment />
        </div>
        <div className="pt-8">
          <div className="-my-10 -mb-6">
            {reviews.map((review, reviewIdx) => (
              <div
                key={review.id}
                className="flex space-x-4 text-sm text-gray-500"
              >
                <div className="flex-none py-6">
                  <img
                    alt=""
                    src={review.avatarSrc}
                    className="size-10 rounded-full bg-gray-100"
                  />
                </div>
                <div
                  className={classNames(
                    reviewIdx === 0 ? '' : 'border-t border-gray-200',
                    'flex-1 py-6'
                  )}
                >
                  <h3 className="font-medium text-gray-900">{review.author}</h3>
                  <p>
                    <time dateTime={review.datetime}>{review.date}</time>
                  </p>

                  <div
                    dangerouslySetInnerHTML={{ __html: review.content }}
                    className="mt-4 text-sm/6 text-gray-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
