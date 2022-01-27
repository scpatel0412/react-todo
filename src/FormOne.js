import React,{useState} from 'react'
import {Form,Button,Row} from 'react-bootstrap';
import './App.css'

function FormOne() {

    const [data, setData] = useState({id: new Date().getTime().toString(),title:'',description:'',date:''})
    const [items, setItems] = useState([])
    const [idOne, setIdOne] = useState(null)
    const [toggle,setToggle] =useState (true)
    const onSubmitClick = (e) => {
      
        if(data.title === "" || data.description === "" || data.date === ""){
            alert("Please add all field data")
            
        }
        else if (data && !toggle){
            setItems(items.map((i) => {
                if (i.id === idOne){
                    return {...i,title:data.title,description:data.description,date:data.date}
                }
                return i
                
            }))
            setData({id: new Date().getTime().toString(),title:'',description:'',date:''})
        setIdOne(null)
        setToggle(true) 
        }
        else{
            setItems([...items,data])
        setData({id: new Date().getTime().toString(),title:'',description:'',date:''})
        }
        e.preventDefault();
    
    }
    const deleteItems = (index) => {
          console.log("id ==>",index)
          const updatedItems = items.filter((elem) => {
              return index != elem.id
          })
          setItems(updatedItems)
    }
    const editItem = (index) => {
        console.log("index ==>",index)
        const update =  items.find((i) => {
            return i.id === index
        })
        setData(update)
        setIdOne(index)
        setToggle(false)
    }
    const onClickClear = () => {
        setItems([])
    }



    return (
    <div className='container-fluid backgroundOne' >
        <Row>
            <div className='jumbotron' style={{padding:'40px'}}>
                <h1 className='text-center '>
                    React Todo-List
                </h1>

            </div>
        </Row>
      <Row >
        <div className='col-sm-6' >
        
           <h1 className='text-center'>Form</h1>
           <hr/>
          {/* <Form.Group className="mb-3">
             <Form.Label>id</Form.Label>
             <Form.Control type="number" value={data.id} onChange={(e) => idChange(e)} className="form-control" placeholder="Enter id"/>
          </Form.Group> */}
          <Form.Group className="mb-3">
             <Form.Label>Title</Form.Label>
             <Form.Control type="text" value={data.title}  onChange={(e) => setData({...data,title:e.target.value})} placeholder="Enter Title"/>
          </Form.Group>
          <Form.Group className="mb-3">
             <Form.Label>description</Form.Label>
             <textarea value={data.description} onChange={(e) => setData({...data,description:e.target.value})} className='form-control'   placeholder="Enter Description" rows="4"></textarea>
          </Form.Group>
          <Form.Group>
             <Form.Label>Date and time</Form.Label>
             <Form.Control type="datetime-local" value={data.date} onChange={(e) => setData({...data,date:e.target.value})}  className="form-control" placeholder="Choose date"/>
          </Form.Group>
          <hr/>
          {toggle ? <Button onClick={onSubmitClick} style={{fontSize:'20px'}} variant="outline-dark">Submit</Button> : <Button onClick={onSubmitClick} style={{fontSize:'20px'}} variant="outline-dark">Update</Button> } 
           <Button onClick={() => onClickClear()}  variant="outline-dark" className='m-4' style={{fontSize:'20px'}}>Clear All</Button>
          
        </div>
     
        <div className="col-sm-6">
          <h1 className='text-center'>Data Entry</h1>
          <hr/>
        <table className="table">
        <thead style={{backgroundColor:'#2D2E2E'}}>
            <tr>
           
            <th style={{color:'white'}} scope="col">Title</th>
            <th style={{color:'white'}}  scope="col">Description</th>
            <th style={{color:'white'}}  scope="col">Date</th>
            <th style={{color:'white'}}  scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            
           {
            items.map((e) => {
                console.log("items==>",items)
                return(
                 <tr className="scope" key={e.id}>
                      <td style={{fontSize:'20px',color:'white'}}>{e.title}</td>
            <td style={{fontSize:'20px',color:'white'}}>{e.description}</td>
            <td style={{fontSize:'20px',color:'white'}}>{e.date}</td>
            <td> <Button variant="dark" onClick={() => deleteItems(e.id)}><i className='fa fa-trash'></i></Button> <Button onClick={() => editItem(e.id)} variant='dark'><i className='fa fa-edit'></i></Button></td>
                 </tr>      
                )
            })}
           
            
        </tbody>
        </table>
        </div>

      </Row>
    
    </div>
    )
}

export default FormOne
