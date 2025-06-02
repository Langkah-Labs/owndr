import useStore, { setIsContentFormOpen } from '~/stores/global'
import { IoClose } from 'react-icons/io5'
import { PhotoIcon } from '@heroicons/react/24/solid'
import { FaMagnifyingGlass } from 'react-icons/fa6'

export default function Index() {
  const isContentFormOpenHandler = useStore(setIsContentFormOpen)

  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <div className="bg-white fixed px-12 py-2 w-10/12 h-[32rem] rounded-2xl">
        <button
          onClick={() => isContentFormOpenHandler(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <span className="sr-only">Close</span>
          <IoClose size={24} />
        </button>
        <form className="w-full overflow-y-scroll h-full pr-8 py-8 text-left">
          <div className="w-full">
            <div className="border-b border-gray-900/10 pb-12">
              <div>
                <h2 className="text-base/7 font-semibold text-gray-900">
                  Create a New Post
                </h2>
                <p className="mt-1 text-sm/6 text-gray-600">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Title
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#103f66]">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="janesmith"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Content
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#103f66]"
                      defaultValue={''}
                    />
                  </div>
                  <p className="mt-3 text-sm/6 text-gray-600">
                    Write a few sentences about your story.
                  </p>
                </div>

                {/* <div className="col-span-full">
                  <label
                    htmlFor="photo"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Photo/Video
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <UserCircleIcon
                      aria-hidden="true"
                      className="size-12 text-gray-300"
                    />
                    <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Change
                    </button>
                  </div>
                </div> */}
                <div>
                  <label
                    htmlFor="search"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Location
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#103f66]">
                      <input
                        id="search"
                        name="search"
                        type="text"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-0"
                      />
                      <div className="flex py-1.5 pr-1.5">
                        <kbd className="inline-flex items-center rounded-sm border border-gray-200 p-1 font-sans text-xs text-gray-400">
                          <FaMagnifyingGlass />
                        </kbd>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Attachment
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        aria-hidden="true"
                        className="mx-auto size-12 text-gray-300"
                      />
                      <div className="mt-4 flex text-sm/6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-[#103f66] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#103f66] focus-within:ring-offset-2 hover:opacity-40 duration-300"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs/5 text-gray-600">
                        PNG, JPG, MP4 up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              onClick={() => isContentFormOpenHandler(false)}
              className="text-sm/6 font-semibold text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-[#103f66] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-40 duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#103f66]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
