"use client"

import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, X, FileText, ImageIcon } from "lucide-react"

interface FileWithPreview extends File {
  preview?: string
}

interface UploadZoneProps {
  files: FileWithPreview[]
  onFilesChange: (files: FileWithPreview[]) => void
  maxFiles?: number
  maxFileSize?: number
  acceptedTypes?: string[]
}

export function UploadZone({
  files,
  onFilesChange,
  maxFiles = 10,
  maxFileSize = 20 * 1024 * 1024, // 20MB
  acceptedTypes = ["application/pdf", "image/png", "image/jpeg", "image/jpg"],
}: UploadZoneProps) {
  const [errors, setErrors] = useState<string[]>([])

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: any[]) => {
      setErrors([])
      const newErrors: string[] = []

      // Handle rejected files
      rejectedFiles.forEach((rejection) => {
        rejection.errors.forEach((error: any) => {
          if (error.code === "file-too-large") {
            newErrors.push(`${rejection.file.name}: File too large (max ${maxFileSize / 1024 / 1024}MB)`)
          } else if (error.code === "file-invalid-type") {
            newErrors.push(`${rejection.file.name}: Invalid file type`)
          }
        })
      })

      // Check total file count
      if (files.length + acceptedFiles.length > maxFiles) {
        newErrors.push(`Maximum ${maxFiles} files allowed`)
        setErrors(newErrors)
        return
      }

      // Add preview URLs for images
      const filesWithPreview = acceptedFiles.map((file) => {
        const fileWithPreview = file as FileWithPreview
        if (file.type.startsWith("image/")) {
          fileWithPreview.preview = URL.createObjectURL(file)
        }
        return fileWithPreview
      })

      onFilesChange([...files, ...filesWithPreview])
      setErrors(newErrors)
    },
    [files, onFilesChange, maxFiles, maxFileSize],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedTypes.reduce(
      (acc, type) => {
        acc[type] = []
        return acc
      },
      {} as Record<string, string[]>,
    ),
    maxSize: maxFileSize,
    multiple: true,
  })

  const removeFile = (index: number) => {
    const newFiles = [...files]
    const removedFile = newFiles.splice(index, 1)[0]

    // Revoke preview URL to prevent memory leaks
    if (removedFile.preview) {
      URL.revokeObjectURL(removedFile.preview)
    }

    onFilesChange(newFiles)
  }

  const getFileIcon = (file: File) => {
    if (file.type === "application/pdf") {
      return <FileText className="w-8 h-8 text-red-500" />
    } else if (file.type.startsWith("image/")) {
      return <ImageIcon className="w-8 h-8 text-blue-500" />
    }
    return <FileText className="w-8 h-8 text-gray-500" />
  }

  return (
    <div className="space-y-4">
      <Card
        {...getRootProps()}
        className={`
          cursor-pointer transition-all duration-200 border-2 border-dashed
          ${isDragActive ? "border-[#E21E2C] bg-[#E21E2C]/5" : "border-zinc-700 hover:border-zinc-600 bg-zinc-800/30"}
        `}
      >
        <CardContent className="flex flex-col items-center justify-center py-8 text-center">
          <input {...getInputProps()} />
          <Upload className={`w-12 h-12 mb-4 ${isDragActive ? "text-[#E21E2C]" : "text-zinc-500"}`} />
          <div className="text-white font-medium mb-2">
            {isDragActive ? "Drop files here" : "Drag & drop files here"}
          </div>
          <div className="text-zinc-400 text-sm mb-4">or click to browse files</div>
          <div className="text-xs text-zinc-500">PDF, PNG, JPG up to {maxFileSize / 1024 / 1024}MB each</div>
        </CardContent>
      </Card>

      {errors.length > 0 && (
        <div className="space-y-1">
          {errors.map((error, index) => (
            <div key={index} className="text-sm text-red-400 bg-red-900/20 border border-red-800/40 rounded px-3 py-2">
              {error}
            </div>
          ))}
        </div>
      )}

      {files.length > 0 && (
        <div className="space-y-2">
          <div className="text-sm font-medium text-white">
            Uploaded Files ({files.length}/{maxFiles})
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {files.map((file, index) => (
              <Card key={index} className="border-zinc-800/60 bg-zinc-900/40">
                <CardContent className="flex items-center gap-3 p-3">
                  {file.preview ? (
                    <img
                      src={file.preview || "/placeholder.svg"}
                      alt={file.name}
                      className="w-12 h-12 object-cover rounded border border-zinc-700"
                    />
                  ) : (
                    getFileIcon(file)
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white truncate">{file.name}</div>
                    <div className="text-xs text-zinc-400">{(file.size / 1024 / 1024).toFixed(1)} MB</div>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(index)}
                    className="text-zinc-400 hover:text-red-400 hover:bg-red-900/20 p-1 h-auto"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
