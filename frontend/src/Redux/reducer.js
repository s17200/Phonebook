const initialState = {
     contacts:[{
        name:"saurabh",
        number:353535,
        id:0
    }],
    Type:"ADD",
    Id:0
  };

const phonebookReducer=(state=initialState,action)=>{
            switch(action.type){
                case "ADD" : return {
                    ...state, contacts:[...state.contacts,action.payload]
                }

                case "DELETE" : return {
                    ...state, contacts:state.contacts.filter((contact)=>{
                        if(contact.id!=action.payload){
                            return contact;
                        }
                    })
                }

                case "EDIT" : return {
                    ...state, contacts:state.contacts.map((contact)=>{
                        if(contact.id!=action.payload.id){
                            return contact;
                        }else{
                            return action.payload
                        }
                    })
                }
                
                case "change" : return {
                    ...state, Type:action.payload.Type, Id:action.payload.id
                    
                }    

                default:
                    return state;
            }
}

export default phonebookReducer;