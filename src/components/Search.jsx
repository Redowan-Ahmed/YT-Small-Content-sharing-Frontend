
function Search() {
    return (
        <div className="w-full">
            <form className="w-full">
                <div className="flex">
                    <label htmlFor="location-search" className="mb-2 text-sm font-medium text-white sr-only dark:text-white">Your Email</label>

                    <div className="relative w-full h-10 flex">
                        <input type="search" id="location-search" className="block p-2.5 pl-5 w-full z-20 text-sm text-white bg-primary rounded-l-full border-s-sidebar-accent border-s-2 border border-sidebar-accent focus:ring-blue-700 focus:border-blue-700 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-700 placeholder:text-md" placeholder="Search" required />
                        <button type="submit" title="Search" className="h-full w-16 flex justify-center align-middle items-center p-2.5 text-sm font-medium text-white text-center bg-sidebar-accent rounded-e-full border border-sidebar-accent ">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="#f1f1f1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Search