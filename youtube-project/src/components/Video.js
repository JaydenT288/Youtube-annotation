import React, { useEffect, useRef, useState, useCallback } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact} from 'slate-react'
import ReactPlayer from 'react-player/youtube'
import './css/video.css'

const Video = () => {
  
  const player = useRef(null)
  const [ editor ] = useState(() => withReact(createEditor()))
  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in paragraph'}]
    },
    {
      type: 'paragraph',
      children: [{ text: 'Apply Bold', bold: true}]
    }
  ]

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, [])
  
  useEffect(() =>{
    const interval = setInterval(async() =>{
        const elapsed_sec = await player.current.getCurrentTime()
        // console.log(elapsed_sec)
    }, 10000)
  }, [])


  return (
    <div className='body-container'>
      <div className='video-container'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/embed/iqW4VrgeZx4' 
          ref={player}
        />
      </div>
      <div className='notes-container'>
        <div className='note'>
          <Slate editor={editor} value={initialValue} className='slate-container'>
            <Editable 
              renderLeaf={renderLeaf}
            />
          </Slate>
        </div>
        <div className='note'>
          <Slate editor={editor} value={initialValue} className='slate-container'>
            <Editable />
          </Slate>
        </div>
        <div className='note'>
          <Slate editor={editor} value={initialValue} className='slate-container'>
            <Editable />
          </Slate>
        </div>
        <div className='note'>
          <Slate editor={editor} value={initialValue} className='slate-container'>
            <Editable />
          </Slate>
        </div>
        <div className='note'>
          <Slate editor={editor} value={initialValue} className='slate-container'>
            <Editable />
          </Slate>
        </div>
        
      </div>
    </div>
  )
}

const Leaf = props => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
    >
      {props.children}
    </span>
  )
}

export default Video