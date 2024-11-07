interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
}


const BaseButton: React.FC<ButtonProps> = ({ text, style, ...rest }) => (
  <button style={{ padding: '10px', ...style }} {...rest}>
    {text}
  </button>
);


export const RedButton: React.FC<ButtonProps> = (props) => 
  <BaseButton style={{ backgroundColor: 'red' }} {...props} />
  
  
export const YellowButton: React.FC<ButtonProps> = (props) => 
  <BaseButton style={{ backgroundColor: 'yellow' }} {...props} />
    
    
export const BlueButton: React.FC<ButtonProps> = (props) => 
  <BaseButton style={{ backgroundColor: 'blue' }} {...props} />
