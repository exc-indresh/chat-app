import { Button } from '@chakra-ui/react';
import React, { useRef, useState } from 'react'


const VoiceRecorder = () => {
    const audioChunk = useRef([]);
    const [recordings, setRecordings] = useState([]);
    const mediaRecorderRef = useRef(null);
    const [streamRecording, setStreamRecording] = useState(false);
    
    const startRec = async()=>{
        try {
            
            const stream = await navigator.mediaDevices.getUserMedia({audio:true});
            const mediaRecorder = new MediaRecorder(stream);
        
            mediaRecorder.ondataavailable = (e) =>{
                if(e.data.size>0){
                    // save data 
                    audioChunk.current.push(e.data);
                }
            }
            mediaRecorder.onstop = ()=>{
                const audioBlob = new Blob(audioChunk.current, {type:'audio/wav'})
                const audioUrl = URL.createObjectURL(audioBlob);
                setRecordings(prevRecs => [...prevRecs,audioUrl])
            };
    
            mediaRecorderRef.current = mediaRecorder;
            mediaRecorder.start();
            setStreamRecording(true);
        } catch (error) {
            console.log('some error occured', error);
        }

    }
    
    const stopRec = () =>{
        if(mediaRecorderRef.current && mediaRecorderRef.current.state==="recording"){
            mediaRecorderRef.current.stop();
            setStreamRecording(false);
        }
    }
  return (
    <div>
      sound recorder
      <hr />
      {!streamRecording?(<Button onClick={startRec}>Start Recording</Button>):
      (<Button onClick={stopRec}>Stop Recording</Button>)}
      {
        recordings.map((rec,index)=>{
            return (
                <div key={index}>
                    <audio controls src={rec}/>
                    <a href={rec} download={`recording-${index}.wav`}></a>
                </div>
            )
        })
      }
    </div>
  )
}

export default VoiceRecorder
