import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: 10px;
  border: none;

`
const Place = styled.div`
  width: 80%;
  height: 3em;
  border-radius: 10px;
  display: flex;
  margin-top: 2em;
  
`
const Area = styled.textarea`
  width: 100%;
  max-height: fit-content;
  background: inherit;
  border-radius: 10px;
  border: none;
`
const P2child = ({placeholder,isTextArea = false,children} : any) => {

    if(isTextArea == true){

        return (
            <Place>
            {children}
            <Area placeholder={placeholder} className='pl-10'/>
          </Place>
          )

      
    }else {
          return (
            <Place>
            {children}
            <Input placeholder={placeholder} className='pl-10'/>
          </Place>
          )
    }

}

export default P2child ;