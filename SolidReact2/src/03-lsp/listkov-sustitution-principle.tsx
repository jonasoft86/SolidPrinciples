import { BlueButton, RedButton, YellowButton } from "./Buttons";



export function LiskovSustitutionPrinciple() {
  return <>
    
    <RedButton text="red button" onClick={() => console.log('Im red')} />
    
    <YellowButton
    text="yellow button"
    style={{ marginBottom: '1rem' }}
    onClick={() => console.log('Im yellow')}
    />
    
    <BlueButton text="blue button" onClick={() => console.log('Im blue')} />
  </>
}