import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: 10px;
  border: none;
  padding-left: 3em;

`
const Place = styled.div`
  min-width: 28em ;
  min-height: 3em;
  border-radius: 10px;
  display: flex;
  background-color: #007269;
  
`
const Area = styled.textarea`
  width: 100%;
  height: 10em;
  padding-top: 10px;
  background-color: #007269;
  padding-left: 3em;

  /* position: relative; */
  border-radius: 10px;
  border: none;
`
const Pchild = ({placeholder,isTextArea = false ,children,type} : any) => {

    if(isTextArea == true){

        return (
            <Place className='h-fit'>
            {children}
            <Area placeholder={placeholder} />
          </Place>
          )

      
    }else {
          return (
            <Place>
            {children}
            <Input placeholder={placeholder} type={type}
            />
          </Place>
          )
    }

}

export default Pchild ;