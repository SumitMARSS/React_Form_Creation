import './App.css';
import React, {useState} from 'react';


function App() {

  //each time our form gets updated whenever we change 
  // but for  each time we have to call fuction for each tag ????

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);
  // function changeHandlerFirst(event){
  //   // console.log( "Inside the UI ", event.target.value);
  //   // console.log(  "Element is ",event.target);
  //   setFirstName(event.target.value);
  // }

  // function changeHandlerLast(event){
  //   // console.log( "Inside the UI ", event.target.value);
  //   // console.log(  "Element is ",event.target);
  //   setLastName(event.target.value);
  // }

            ////   *********************************************************** ////

  //create an object like thing for whole form only by using one function will be called

  // const [ formData, setFormData ] = useState( {firstName: "" , lastName: "", 
  // email:"" ,comments:"", isVisible:true , ticked:"", choice:"" } );

  // // console.log(formData);  //printing the object containing all form data
  // // console.log(formData.email);  //email

  // function changeHandler(event){
  //   setFormData( prevFormData => {
  //     //getting all from event.target
  //     const { name, value, type, checked } = event.target;
  //     return {
  //       ...prevFormData,
  //       // [event.target.name] : event.target.value
  //       [name] : type === "checkbox" ? checked : value
  //     }
  //   } )
  // }

  // function submitHandler(event){
  //   event.preventDefault();
  //   console.log("Finally printing our data: ");
  //   console.log(formData);
  // }




  //UI gets rerendered so value get filled wuth corresponding attribute

  //** here we used same name to get a selected for one out of multiple 
  //if you want multiple select then use diff name  */

  // return (
  //   <div className="App">
  //     <form onSubmit={submitHandler}>

  //       <br/>
  //       <br/>
  //       <input 
  //         type="text" 
  //         placeholder="First Name" 
  //         onChange={changeHandler} 
  //         name='firstName'
  //         value={formData.firstName} />
  //       <br/>
  //       <br/>
  //       <input 
  //         type="text" 
  //         placeholder="Last Name" 
  //         onChange={changeHandler} 
  //         name='lastName'
  //         value={formData.lastName} />
  //       <br/>
  //       <br/>
  //       <input 
  //         type="email" 
  //         placeholder="Enter your email : " 
  //         onChange={changeHandler} 
  //         name='email'
  //         value={formData.email} />
  //       <br/>
  //       <br/>
  //       <textarea
  //         placeholder='Enter your comments : '
  //         onChange={changeHandler}
  //         name='comments'
  //         value={formData.comments}
  //       />
  //       <br/>
  //       <br/>
  //       <input
  //         type="checkbox"
  //         name='isVisible'
  //         onChange={changeHandler}
  //         id='Visible'
  //         checked={formData.isVisible}
  //       />
  //       <label htmlFor='Visible'>Am I visible ? </label>
  //       <br/>
  //       <br/>

  //       <fieldset>
  //         <legend>Mode:</legend>
  //         <br/>
  //         <input
  //             type="radio"
  //             name='ticked'
  //             value="Online-Mode"
  //             onChange={changeHandler}
  //             id='tick'
  //             checked={formData.ticked === "Online-Mode"}
  //         />
  //           <label htmlFor='tick'>Am I Online-Mode ? </label>
  //           <br/>
  //           <br/>
  //         <input
  //             type="radio"
  //             name='ticked'
  //             value="Offline-Mode"
  //             onChange={changeHandler}
  //             id='tick'
  //             checked={formData.ticked === "Offline-Mode"}
  //         />
  //           <label htmlFor='tick'>Am I Offline-Mode ? </label>
          
  //       </fieldset>


  //       <label htmlFor='choice'> Enter your choice of vechile : </label>
  //       <select
  //         name='choice'
  //         value={formData.choice}
  //         onChange={changeHandler}
  //         id='choice'
  //       >
  //         <option value="Scarpio">Scarpio</option>
  //         <option value="Fortuner">Fortuner</option>
  //         <option value="Tharrr">Tharrr</option>
  //         <option value="Bullet">Bullet</option>

  //       </select>
  //       <br/>
  //       <br/>
  //       {/* <input type='submit'/> */}
  //       <button>Submit</button>

  //     </form>
  //   </div>
  // );


      ////    *********************************************************** ////

    const [ formData, setFormData ] = useState({ firstName: "" , lastName: "", email: "", country: "",
    street:"" , city: "" , state:"" , pincode: "", comment: false, candidate:false, offers:false ,
    push: ""});
    // console.log(formData);


    function changeHandler(event){
      setFormData( prevFormData => {
        const { name, type, checked, value } = event.target;
        return {
          ...prevFormData,
          [name] : type === 'checkbox' ? checked : value
        }
      })
    };

    function submitHandler(event){
      event.preventDefault();
      console.log("Finally our complete data is : ");
      console.log(formData);
    }


  return (
    <div className="App">
      

      <form onSubmit={submitHandler}>

        <label htmlFor='firstName'>First Name</label><br/>
        <input
          type='text'
          placeholder='sumit'
          onChange={changeHandler}
          name='firstName'
          id='firstName'
          value={formData.firstName}
          required
        />
        <br/>
        <label htmlFor='lastName'>Last Name</label><br/>
        <input
          type='text'
          placeholder='Kumar'
          onChange={changeHandler}
          name='lastName'
          id='lastName'
          value={formData.lastName}
          required
        />

        <br/>
        <label htmlFor='email'>Email address</label><br/>
        <input
          type='email'
          placeholder='skumar@gmai.com'
          onChange={changeHandler}
          name='email'
          id='email'
          value={formData.email}
          required
        />

        <br/>
        <label htmlFor='country'>Country</label><br/>
        <select
          id='country'
          name='country'
          placeholder='Enter your country'
          onChange={changeHandler}
          value={formData.country}
          required
        >
          <option value="" disabled hidden>Select your country</option>
          <option value="India">India</option>
          <option value="America">America</option>
          <option value="England">England</option>
          <option value="South Africa">South Africa</option>
          <option value="Austrelia">Austrelia</option>
          <option value="Zimwabe">Zimwabe</option>
        </select>

        <br/>
        <label htmlFor='street'>Street Address </label><br/>
        <input
        type='text'
          name='street'
          id='street'
          placeholder='1234 Main Street'
          onChange={changeHandler}
          value={formData.street}
        />
        <br/>
        <label htmlFor='city'>City</label><br/>
        <input
          type='text'
          placeholder='Rajgir'
          onChange={changeHandler}
          name='city'
          id='city'
          value={formData.city}
          required
        />

<br/>
        <label htmlFor='state'>State / Province</label><br/>
        <input
          type='text'
          placeholder='Bihar'
          onChange={changeHandler}
          name='state'
          id='state'
          value={formData.state}
          required
        />

<br/>
        <label htmlFor='pincode'> ZIP / Postal Code </label><br/>
        <input
          type='text'
          pattern='[0-9]{6}'
          placeholder='803116'
          onChange={changeHandler}
          name='pincode'
          id='pincode'
          value={formData.pincode}
          required
        />
        <p>By Email</p>
        <input
          type="checkbox"
          onChange={changeHandler}
          name='comment'
          id='comment'
          checked={formData.comment}
        />
        <label htmlFor='comment'>
           Comments<br/>
            <spam className="light" >Get notified when someone post comment </spam>
        </label><br/>

        <input
          type="checkbox"
          onChange={changeHandler}
          name='candidate'
          id='candidate'
          checked={formData.candidate}
        />
        <label htmlFor='candidate'>
          Candidates<br/>
            <spam className="light" >Get notified when a candidate apply for a job</spam>
        </label><br/>
        

        <input
          type="checkbox"
          onChange={changeHandler}
          name='offers'
          id='offers'
          checked={formData.offers}
        />
        <label htmlFor='offers'>
          Offers<br/>
            <spam className="light">Get notified when a candidate accept or reject offers</spam>
        </label><br/>
        <div className='pushnot' >Push Notifications <br/>
          <spam className="light1" >These are delivered by SMS to your mobile phone</spam>
        </div>

        <input
          type="radio"
          onChange={changeHandler}
          name='push'
          id='everything'
          value="everything"
          checked={formData.push === "everything"}
        />
        <label htmlFor='everything'>Every thing</label>
<br/>
          <input
            type="radio"
            onChange={changeHandler}
            name='push'
            id='same'
            value="same"
            checked={formData.push === "same"}
          />
          <label htmlFor='same'>Same As Email</label>
        
<br/>
        <div className='radio'>
          <input
            type="radio"
            onChange={changeHandler}
            name='push'
            id='no'
            value="no"
            checked={formData.push === "no"}
          />
          <label htmlFor='no'> No Push Notifications </label>
        </div>
        <br></br>
        <br></br>
        <button> Save </button>

      </form>
    </div>
  );
}

export default App;
