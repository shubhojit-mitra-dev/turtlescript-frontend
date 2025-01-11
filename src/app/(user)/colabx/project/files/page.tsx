'use client'

import { useState, useEffect } from 'react'
import { FileIcon, FolderIcon, UploadIcon, MoreVerticalIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface File {
  id: string
  name: string
  type: 'file' | 'folder'
  size: string
  lastModified: string
}

// This is just dummy data. In a real application, this would come from an API.
const dummyFiles: File[] = [
  { id: '1', name: 'Project Proposal.docx', type: 'file', size: '2.3 MB', lastModified: '2023-05-15' },
  { id: '2', name: 'Images', type: 'folder', size: '--', lastModified: '2023-05-14' },
  { id: '3', name: 'Budget.xlsx', type: 'file', size: '1.5 MB', lastModified: '2023-05-13' },
  { id: '4', name: 'Meeting Notes.pdf', type: 'file', size: '567 KB', lastModified: '2023-05-12' },
  { id: '5', name: 'Documents', type: 'folder', size: '--', lastModified: '2023-05-11' },
]

export default function FilesPage() {
  const [files, setFiles] = useState<File[]>(dummyFiles)

  useEffect(() => {
    // TODO: Implement API call to fetch files
    // Example:
    // async function fetchFiles() {
    //   const response = await fetch('/api/files');
    //   const data = await response.json();
    //   setFiles(data);
    // }
    // fetchFiles();
  }, [])

  const handleUpload = () => {
    // TODO: Implement file upload API call
    // Example:
    // async function uploadFile(file: File) {
    //   const formData = new FormData();
    //   formData.append('file', file);
    //   const response = await fetch('/api/upload', {
    //     method: 'POST',
    //     body: formData,
    //   });
    //   if (response.ok) {
    //     // Refresh file list after successful upload
    //     fetchFiles();
    //   }
    // }
  }

  const handleDownload = (fileId: string) => {
    // TODO: Implement file download API call
    // Example:
    // window.open(`/api/files/${fileId}/download`, '_blank');
  }

  const handleRename = (fileId: string, newName: string) => {
    // TODO: Implement file rename API call
    // Example:
    // async function renameFile(id: string, newName: string) {
    //   const response = await fetch(`/api/files/${id}/rename`, {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ newName }),
    //   });
    //   if (response.ok) {
    //     // Refresh file list after successful rename
    //     fetchFiles();
    //   }
    // }
  }

  const handleDelete = (fileId: string) => {
    // TODO: Implement file delete API call
    // Example:
    // async function deleteFile(id: string) {
    //   const response = await fetch(`/api/files/${id}`, {
    //     method: 'DELETE',
    //   });
    //   if (response.ok) {
    //     // Refresh file list after successful delete
    //     fetchFiles();
    //   }
    // }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold">Files</h1>
          <Button 
            className="bg-black hover:bg-gray-800 text-white border border-white w-full sm:w-auto" 
            onClick={handleUpload}
          >
            <UploadIcon className="mr-2 h-4 w-4" /> Upload File
          </Button>
        </div>
        <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden border border-white">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider hidden sm:table-cell">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider hidden md:table-cell">Size</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider hidden lg:table-cell">Last Modified</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {files.map((file) => (
                  <tr key={file.id} className="hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {file.type === 'folder' ? (
                          <FolderIcon className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                        ) : (
                          <FileIcon className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                        )}
                        <span className="text-sm font-medium text-white truncate max-w-[150px] sm:max-w-xs">{file.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                      <span className="text-sm text-white">{file.type}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                      <span className="text-sm text-white">{file.size}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                      <span className="text-sm text-white">{file.lastModified}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0 text-white hover:bg-gray-700">
                            <span className="sr-only">Open menu</span>
                            <MoreVerticalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-gray-800 text-white border border-white">
                          <DropdownMenuItem onClick={() => handleDownload(file.id)} className="hover:bg-gray-700">
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleRename(file.id, 'New Name')} className="hover:bg-gray-700">
                            Rename
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDelete(file.id)} className="hover:bg-gray-700">
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

