"use client"

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Toggle } from "@/components/ui/toggle"
import { ArrowUpDown, Sun, Moon } from "lucide-react"

export default function CardEditor() {
  const [subtitle, setSubtitle] = useState('')
  const [title, setTitle] = useState('')
  const [overlayOpacity, setOverlayOpacity] = useState(0)
  const [textPosition, setTextPosition] = useState('bottom')
  const [textColor, setTextColor] = useState('white')
  const [imageUrl, setImageUrl] = useState('/assets/card.png?height=600&width=400')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImageUrl(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerImageUpload = () => {
    fileInputRef.current?.click()
  }

  const downloadImage = useCallback(() => {
    if (cardRef.current) {
      import('html-to-image').then((htmlToImage) => {
        htmlToImage.toPng(cardRef.current as HTMLElement)
          .then((dataUrl: string) => {
            const link = document.createElement('a')
            link.download = 'card-image.png'
            link.href = dataUrl
            link.click()
          })
          .catch((error: unknown) => {
            console.error('Error generating image:', error)
          })
      })
    }
  }, [])

  return (
    <div className="flex flex-col md:flex-row mt-10 mb-20 gap-8 p-6 max-w-4xl mx-auto">
      <div className="w-full md:w-1/2  space-y-6">
        <div className="space-y-2">
          {/* <Label htmlFor="subtitle">Top subtitle</Label> */}
          <Input
            id="subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="Top subtitle"
          />
        </div>
        <div className="space-y-2">
          {/* <Label htmlFor="title">Title</Label> */}
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className='text-black'
          />
        </div>
        <div className="space-y-2">
          <Label>Color Overlay Opacity</Label>
          <Slider
            value={[overlayOpacity]}
            onValueChange={(value) => setOverlayOpacity(value[0])}
            max={100}
            step={1}
          />
        </div>
        <div className="flex space-x-2">
          <Toggle
            pressed={textPosition === 'top'}
            onPressedChange={() => setTextPosition(prev => prev === 'bottom' ? 'top' : 'bottom')}
            aria-label="Toggle text position"
          >
            <ArrowUpDown className="h-4 w-4" />
          </Toggle>
          <Toggle
            pressed={textColor === 'black'}
            onPressedChange={() => setTextColor(prev => prev === 'white' ? 'black' : 'white')}
            aria-label="Toggle text color"
          >
            {textColor === 'white' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Toggle>
        </div>
        <Button className="w-full bg-purple-500 hover:bg-purple-600" onClick={downloadImage}>Download</Button>
        <p className="text-sm text-gray-500">
          * To change the image click on the card or drag a new image inside.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <div 
          ref={cardRef}
          className="aspect-[3/4] rounded-lg overflow-hidden relative cursor-pointer group"
          onClick={triggerImageUpload}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault()
            const file = e.dataTransfer.files[0]
            if (file && file.type.startsWith('image/')) {
              const reader = new FileReader()
              reader.onload = (e) => {
                setImageUrl(e.target?.result as string)
              }
              reader.readAsDataURL(file)
            }
          }}
        >
          <Image
            src={imageUrl}
            alt="Card preview"
            layout="fill"
            objectFit="cover"
          />
          <div 
            className="absolute inset-0 bg-primary"
            style={{ opacity: overlayOpacity / 100 }}
          ></div>
          <div className={`absolute inset-0 flex flex-col ${textPosition === 'top' ? 'justify-start' : 'justify-end'} p-6`}>
            <div className={`text-${textColor}`}>
              {subtitle && <p className="text-sm mb-2">{subtitle}</p>}
              {title && <h2 className="text-2xl font-bold">{title}</h2>}
            </div>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold">Click to upload image</p>
          </div>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          className="hidden"
        />
      </div>
    </div>
  )
}