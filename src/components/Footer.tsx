import { data } from "../utils/data"

function Footer() {
    return (
        <footer className="rounded-md w-full shadow m-4 mt-0 bg-zinc-700">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm sm:text-center text-gray-300">© {new Date().getFullYear()} <a href="https://chessv.netlify.app/" className="hover:underline">ChessV</a> All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-200 sm:mt-0">
                <li>
                    <a href={data.linkedin} className="hover:underline me-4 md:me-6">LinkedIn</a>
                </li>
                <li>
                    <a href={data.github} className="hover:underline me-4 md:me-6">Github</a>
                </li>
                <li>
                    <a href={data.project_repo} className="hover:underline me-4 md:me-6">Project Repo</a>
                </li>
            </ul>
            </div>
        </footer>
    )
}

export default Footer
