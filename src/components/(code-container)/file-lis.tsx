import { File, Folder } from 'lucide-react'

interface FileListProps {
  files: File[]
}

export function FileList({ files }: FileListProps) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 text-blue-400">Files and Folders</h2>
      <ul className="space-y-2">
        {files.map((file, index) => (
          <li key={index} className="flex items-center p-3 rounded-md bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transition-all duration-300">
            {file.type === 'folder' ? (
              <Folder className="mr-3 h-5 w-5 text-yellow-400" />
            ) : (
              <File className="mr-3 h-5 w-5 text-blue-400" />
            )}
            <span className="text-gray-200">{file.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

